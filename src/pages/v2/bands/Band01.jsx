// Design band 01.
// Generated from src/design/movement-home-{dark,light}.html by
// tools/build-design-react.mjs — structure is shared, styles are per theme.

const S = {
  s0: {
    padding: '60px 40px 0px',
    boxSizing: 'border-box',
  },
  s1: {
    dark: {
      width: 'min(1320px, 100%)',
      margin: '0px auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '14px 26px',
      fontSize: '15px',
      color: 'rgb(138, 138, 138)',
    },
    light: {
      width: 'min(1320px, 100%)',
      margin: '0px auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '14px 26px',
      fontSize: '15px',
      color: 'rgb(98, 104, 133)',
    },
  },
  s2: {
    dark: {
      color: 'rgb(51, 51, 51)',
    },
    light: {
      color: 'rgb(182, 186, 208)',
    },
  },
};

export default function Band01({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="94" style={S.s0}>
      <div data-dc-tpl="95" style={S.s1[theme]}>
        <div data-dc-tpl="96">Deep liquidity</div>
        <div data-dc-tpl="97" style={S.s2[theme]}>•</div>
        <div data-dc-tpl="98">Real human support</div>
        <div data-dc-tpl="99" style={S.s2[theme]}>•</div>
        <div data-dc-tpl="100">Professional platforms</div>
        <div data-dc-tpl="101" style={S.s2[theme]}>•</div>
        <div data-dc-tpl="102">Clear conditions</div>
      </div>
    </div>
  );
}
