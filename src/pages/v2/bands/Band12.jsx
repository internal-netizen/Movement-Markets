// Design band 12.
// Generated from src/design/movement-home-{dark,light}.html by
// tools/build-design-react.mjs — structure is shared, styles are per theme.

const S = {
  s0: {
    padding: '110px 40px 0px',
    boxSizing: 'border-box',
  },
  s1: {
    width: 'min(1320px, 100%)',
    margin: '0px auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px 56px',
    fontSize: 'clamp(38px, 5vw, 66px)',
    fontWeight: '500',
    letterSpacing: '-0.04em',
  },
  s2: {
    dark: {
      color: 'rgb(38, 38, 38)',
    },
    light: {
      color: 'rgb(182, 186, 208)',
    },
  },
  s3: {
    dark: {
      color: 'rgb(51, 51, 51)',
    },
    light: {
      color: 'rgb(182, 186, 208)',
    },
  },
  s4: {
    dark: {
      color: 'rgb(244, 244, 244)',
    },
    light: {
      color: 'rgb(17, 14, 23)',
    },
  },
};

export default function Band12({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="593" style={S.s0}>
      <div data-dc-tpl="594" style={S.s1}>
        <div data-dc-tpl="595" style={S.s2[theme]}>Human.</div>
        <div data-dc-tpl="596" style={S.s3[theme]}>Precise.</div>
        <div data-dc-tpl="597" style={S.s4[theme]}>Fast.</div>
        <div data-dc-tpl="598" style={S.s3[theme]}>Ahead.</div>
      </div>
    </div>
  );
}
