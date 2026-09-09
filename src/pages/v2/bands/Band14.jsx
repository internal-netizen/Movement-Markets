// Design band 14.
// Generated from src/design/movement-home-{dark,light}.html by
// tools/build-design-react.mjs — structure is shared, styles are per theme.

const S = {
  s0: {
    padding: '74px 40px 64px',
    boxSizing: 'border-box',
  },
  s1: {
    dark: {
      width: 'min(1320px, 100%)',
      margin: '0px auto',
      borderTop: '1px solid rgb(31, 31, 31)',
      paddingTop: '34px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px 40px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    light: {
      width: 'min(1320px, 100%)',
      margin: '0px auto',
      borderTop: '1px solid rgb(221, 225, 238)',
      paddingTop: '34px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px 40px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  s2: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  s3: {
    width: '26px',
    height: '26px',
    borderRadius: '999px',
    background: 'rgb(176,240,0)',
  },
  s4: {
    dark: {
      fontSize: '16px',
      fontWeight: '600',
      color: 'rgb(244, 244, 244)',
      whiteSpace: 'nowrap',
    },
    light: {
      fontSize: '16px',
      fontWeight: '600',
      color: 'rgb(17, 14, 23)',
      whiteSpace: 'nowrap',
    },
  },
  s5: {
    dark: {
      color: 'rgb(138, 138, 138)',
    },
    light: {
      color: 'rgb(98, 104, 133)',
    },
  },
  s6: {
    dark: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '26px',
      fontSize: '14px',
      color: 'rgb(138, 138, 138)',
    },
    light: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '26px',
      fontSize: '14px',
      color: 'rgb(98, 104, 133)',
    },
  },
  s7: {
    dark: {
      fontSize: '13px',
      color: 'rgb(138, 138, 138)',
    },
    light: {
      fontSize: '13px',
      color: 'rgb(98, 104, 133)',
    },
  },
};

export default function Band14({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="612" style={S.s0}>
      <div data-dc-tpl="613" style={S.s1[theme]}>
        <div data-dc-tpl="614" style={S.s2}>
          <div data-dc-tpl="615" style={S.s3} />
          <div data-dc-tpl="616" style={S.s4[theme]}>
            movement
            <span data-dc-tpl="617" style={S.s5[theme]}>markets</span>
          </div>
        </div>
        <div data-dc-tpl="618" style={S.s6[theme]}>
          <div data-dc-tpl="619">Markets</div>
          <div data-dc-tpl="620">Platforms</div>
          <div data-dc-tpl="621">Pricing</div>
          <div data-dc-tpl="622">Company</div>
          <div data-dc-tpl="623">Legal</div>
        </div>
        <div data-dc-tpl="624" style={S.s7[theme]}>© 2026 Movement Markets</div>
      </div>
    </div>
  );
}
