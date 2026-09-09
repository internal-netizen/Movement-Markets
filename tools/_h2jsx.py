"""HTML -> JSX converter for the generated design pages."""
from html.parser import HTMLParser

VOID = {"area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"}
TAG_CASE = {"lineargradient":"linearGradient","radialgradient":"radialGradient","clippath":"clipPath",
            "textpath":"textPath","foreignobject":"foreignObject","fegaussianblur":"feGaussianBlur"}
ATTR = {"class":"className","for":"htmlFor","viewbox":"viewBox","preserveaspectratio":"preserveAspectRatio",
        "stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin",
        "stroke-dasharray":"strokeDasharray","stroke-dashoffset":"strokeDashoffset","fill-rule":"fillRule",
        "clip-rule":"clipRule","fill-opacity":"fillOpacity","stroke-opacity":"strokeOpacity",
        "stop-color":"stopColor","stop-opacity":"stopOpacity","text-anchor":"textAnchor","font-size":"fontSize",
        "font-family":"fontFamily","font-weight":"fontWeight","letter-spacing":"letterSpacing",
        "gradientunits":"gradientUnits","vector-effect":"vectorEffect",
        "shape-rendering":"shapeRendering","paint-order":"paintOrder","dominant-baseline":"dominantBaseline",
        "clip-path":"clipPath","mask-type":"maskType","color-interpolation-filters":"colorInterpolationFilters","tabindex":"tabIndex","colspan":"colSpan","rowspan":"rowSpan",
        "srcset":"srcSet","crossorigin":"crossOrigin","autocomplete":"autoComplete","readonly":"readOnly",
        "maxlength":"maxLength","spellcheck":"spellCheck","contenteditable":"contentEditable"}
BOOL = {"hidden","open","checked","disabled","required","selected","multiple","readonly","autofocus"}


class Node:
    __slots__ = ("tag", "attrs", "children", "text")
    def __init__(self, tag=None, attrs=None, text=None):
        self.tag, self.attrs, self.children, self.text = tag, attrs or [], [], text


class Builder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root"); self.stack = [self.root]
    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs); self.stack[-1].children.append(n)
        if tag not in VOID: self.stack.append(n)
    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))
    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]; return
    def handle_data(self, data):
        self.stack[-1].children.append(Node(text=data))


def parse(html):
    b = Builder(); b.feed(html); return b.root


def jsx_text(s):
    return (s.replace("{", "{'{'}").replace("}", "{'}'}")
             .replace("<", "{'<'}").replace(">", "{'>'}")
             .replace(" ", "{'\\u00a0'}"))


def style_obj(value, indent):
    parts = []
    depth = 0; cur = ""
    for ch in value:                      # split on ';' outside parens
        if ch == "(": depth += 1
        elif ch == ")": depth -= 1
        if ch == ";" and depth == 0:
            parts.append(cur); cur = ""
        else:
            cur += ch
    parts.append(cur)

    out = []
    for decl in parts:
        if ":" not in decl: continue
        prop, val = decl.split(":", 1)
        prop, val = prop.strip(), " ".join(val.split())
        if not prop or not val: continue
        if prop.startswith("--"):
            key = f"'{prop}'"
        else:
            bits = prop.split("-")
            key = bits[0] + "".join(b.capitalize() for b in bits[1:])
            if key in {"float"}: key = "cssFloat"
        q = '"' if "'" in val else "'"
        out.append(f"{key}: {q}{val}{q}")
    if not out:
        return "{{}}"
    pad = "  " * (indent + 1)
    inner = (",\n" + pad).join(out)
    return "{{\n" + pad + inner + ",\n" + "  " * indent + "}}"


def attrs_to_jsx(attrs, indent):
    out = []
    for name, value in attrs:
        if name == "style" and value:
            out.append("style=" + style_obj(value, indent)); continue
        key = ATTR.get(name, name)
        if value is None:
            out.append(key if name in BOOL else f'{key}=""'); continue
        if '"' in value:
            out.append(f"{key}={{{value!r}}}")
        else:
            out.append(f'{key}="{value}"')
    return out


def emit(node, indent=0, buf=None):
    buf = buf if buf is not None else []
    pad = "  " * indent
    if node.tag is None:
        if node.text.strip(): buf.append(pad + jsx_text(node.text.strip()))
        return buf
    tag = TAG_CASE.get(node.tag, node.tag)
    attrs = attrs_to_jsx(node.attrs, indent)
    kids = [c for c in node.children if c.tag is not None or c.text.strip()]

    multiline = any("\n" in a for a in attrs)
    if multiline:
        head = f"<{tag}\n" + "\n".join(pad + "  " + a for a in attrs) + f"\n{pad}"
    else:
        head = f"<{tag}" + (" " + " ".join(attrs) if attrs else "")

    if not kids:
        buf.append(pad + head + (" />" if not multiline else "/>")); return buf

    has_text = any(c.tag is None for c in kids)
    if has_text and len(kids) == 1:
        buf.append(pad + head + ">" + jsx_text(kids[0].text.strip()) + f"</{tag}>")
        return buf

    buf.append(pad + head + ">")
    for c in kids: emit(c, indent + 1, buf)
    buf.append(f"{pad}</{tag}>")
    return buf


def render(nodes, indent=0):
    out = []
    for n in nodes: emit(n, indent, out)
    return "\n".join(out)
