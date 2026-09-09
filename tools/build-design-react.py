"""Generate the design page as React components.

WARNING: the components under src/pages/v2/bands/ are now hand-edited — copy
has been rewritten and sections reordered there, not in the design HTML. This
script OVERWRITES them, so it requires --force. It remains useful for a fresh
re-import from the canvas, but expect to redo the copy afterwards.

    python3 tools/build-design-react.py

Run after tools/build-design.mjs, which produces the HTML this reads.

The dark and light halves have identical structure (624 nodes) and differ only
in inline style values, so one component tree is emitted with the styles lifted
into a per-file table. A style that is the same in both themes is stored once;
one that differs is stored as a {dark, light} pair and indexed by the theme
prop. That also lets /v3 reuse these components with a per-band theme.
"""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import _h2jsx as h2jsx

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, "src", "design") + os.sep
OUT = os.path.join(ROOT, "src", "pages", "v2", "bands") + os.sep
os.makedirs(OUT, exist_ok=True)


def load(theme):
    s = open(D + f"movement-home-{theme}.html", encoding="utf-8").read()
    s = re.sub(r"<!--(?!MM_HERO).*?-->", "", s, flags=re.S)
    before, _, after = s.partition("<!--MM_HERO-->")
    root_b, root_a = h2jsx.parse(before), h2jsx.parse(after)
    return ([c for c in root_b.children if c.tag], [c for c in root_a.children if c.tag])


class Emitter:
    def __init__(self):
        self.styles = []          # list of (shared: bool, dark, light)
        self.index = {}           # dedupe key -> slot name

    def slot(self, dark_style, light_style):
        key = (dark_style, light_style)
        if key in self.index:
            return self.index[key]
        name = f"s{len(self.styles)}"
        self.styles.append((dark_style == light_style, dark_style, light_style))
        self.index[key] = name
        return name

    def attrs(self, dnode, lnode, indent):
        out = []
        ldict = dict(lnode.attrs)
        for name, value in dnode.attrs:
            if name == "style":
                slot = self.slot(value, ldict.get("style", value))
                shared = self.styles[int(slot[1:])][0]
                out.append(f"style={{S.{slot}}}" if shared else f"style={{S.{slot}[theme]}}")
                continue
            key = h2jsx.ATTR.get(name, name)
            if value is None:
                out.append(key if name in h2jsx.BOOL else f'{key}=""')
            elif '"' in value:
                out.append(f"{key}={{{value!r}}}")
            else:
                out.append(f'{key}="{value}"')
        return out

    def emit(self, dnode, lnode, indent, buf):
        pad = "  " * indent
        if dnode.tag is None:
            if dnode.text.strip():
                buf.append(pad + h2jsx.jsx_text(dnode.text.strip()))
            return
        tag = h2jsx.TAG_CASE.get(dnode.tag, dnode.tag)
        attrs = self.attrs(dnode, lnode, indent)
        head = f"<{tag}" + (" " + " ".join(attrs) if attrs else "")

        dk = [c for c in dnode.children if c.tag is not None or c.text.strip()]
        lk = [c for c in lnode.children if c.tag is not None or c.text.strip()]
        if len(dk) != len(lk):
            raise SystemExit(f"structure diverged at <{tag}>: {len(dk)} vs {len(lk)}")

        if not dk:
            buf.append(pad + head + " />")
            return
        if len(dk) == 1 and dk[0].tag is None:
            buf.append(pad + head + ">" + h2jsx.jsx_text(dk[0].text.strip()) + f"</{tag}>")
            return
        buf.append(pad + head + ">")
        for a, b in zip(dk, lk):
            self.emit(a, b, indent + 1, buf)
        buf.append(f"{pad}</{tag}>")

    def table(self):
        lines = ["const S = {"]
        for i, (shared, dark, light) in enumerate(self.styles):
            if shared:
                lines.append(f"  s{i}: {h2jsx.style_obj(dark, 1)[1:-1]},")
            else:
                lines.append(f"  s{i}: {{")
                lines.append(f"    dark: {h2jsx.style_obj(dark, 2)[1:-1]},")
                lines.append(f"    light: {h2jsx.style_obj(light, 2)[1:-1]},")
                lines.append("  },")
        lines.append("};")
        return "\n".join(lines)


def build(name, dnode, lnode, doc):
    em = Emitter()
    buf = []
    em.emit(dnode, lnode, 2, buf)
    jsx = "\n".join(buf)
    src = (f"// {doc}\n"
           f"// Generated from src/design/movement-home-{{dark,light}}.html by\n"
           f"// tools/build-design-react.mjs — structure is shared, styles are per theme.\n\n"
           f"{em.table()}\n\n"
           f"export default function {name}({{ theme = 'dark' }}) {{\n"
           f"  return (\n{jsx}\n  );\n}}\n")
    open(OUT + name + ".jsx", "w", encoding="utf-8").write(src)
    return len(src), len(em.styles)


if "--force" not in sys.argv:
    raise SystemExit(
        "refusing to overwrite hand-edited components in src/pages/v2/bands/.\n"
        "Re-run with --force if you really want to re-import from the design HTML."
    )

db, da = load("dark")
lb, la = load("light")
assert len(db) == len(lb) and len(da) == len(la), "band count mismatch"

total = 0
size, n = build("Nav", db[0], lb[0], "Top navigation band.")
print(f"  Nav.jsx           {size:7,} chars  {n:3} styles")
total += size
names = ["Nav"]
for i, (d, l) in enumerate(zip(da, la), 1):
    nm = f"Band{i:02}"
    size, n = build(nm, d, l, f"Design band {i:02}.")
    print(f"  {nm}.jsx       {size:7,} chars  {n:3} styles")
    total += size
    names.append(nm)
print(f"\ntotal {total:,} chars across {len(names)} components")

