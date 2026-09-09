// Top navigation band.
// Generated from src/design/movement-home-{dark,light}.html by
// tools/build-design-react.mjs — structure is shared, styles are per theme.

const S = {
  s0: {
    padding: '28px 40px 0px',
    boxSizing: 'border-box',
  },
  s1: {
    dark: {
      width: 'min(1320px, 100%)',
      margin: '0px auto',
      boxSizing: 'border-box',
      background: 'rgb(28, 28, 28)',
      border: '1px solid rgb(38, 38, 38)',
      borderRadius: '22px',
      padding: '16px 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '18px',
      boxShadow: 'rgba(0, 0, 0, 0.45) 0px 18px 40px',
    },
    light: {
      width: 'min(1320px, 100%)',
      margin: '0px auto',
      boxSizing: 'border-box',
      background: 'rgb(255, 255, 255)',
      border: '1px solid rgb(221, 225, 238)',
      borderRadius: '22px',
      padding: '16px 26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '18px',
      boxShadow: 'rgba(126, 132, 163, 0.18) 0px 18px 40px',
    },
  },
  s2: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  s3: {
    width: '34px',
    height: '34px',
    borderRadius: '999px',
    background: 'rgb(176,240,0)',
  },
  s4: {
    dark: {
      fontSize: '19px',
      fontWeight: '600',
      letterSpacing: '-0.02em',
      color: 'rgb(244, 244, 244)',
      whiteSpace: 'nowrap',
    },
    light: {
      fontSize: '19px',
      fontWeight: '600',
      letterSpacing: '-0.02em',
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
      gap: '34px',
      fontSize: '15px',
      color: 'rgb(176, 176, 176)',
    },
    light: {
      display: 'flex',
      gap: '34px',
      fontSize: '15px',
      color: 'rgb(98, 104, 133)',
    },
  },
  s7: {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
  },
  s8: {
    dark: {
      fontSize: '15px',
      color: 'rgb(244, 244, 244)',
    },
    light: {
      fontSize: '15px',
      color: 'rgb(17, 14, 23)',
    },
  },
  s9: {
    background: 'rgb(176,240,0)',
    color: 'rgb(12, 12, 12)',
    borderRadius: '999px',
    padding: '13px 22px',
    fontSize: '15px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
    whiteSpace: 'nowrap',
  },
};

export default function Nav({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="9" style={S.s0}>
      <div data-dc-tpl="10" style={S.s1[theme]}>
        <div data-dc-tpl="11" style={S.s2}>
          <div data-dc-tpl="12" style={S.s3} />
          <div data-dc-tpl="13" style={S.s4[theme]}>
            movement
            <span data-dc-tpl="14" style={S.s5[theme]}>markets</span>
          </div>
        </div>
        <div data-dc-tpl="15" style={S.s6[theme]}>
          <div data-dc-tpl="16">Markets</div>
          <div data-dc-tpl="17">Platforms</div>
          <div data-dc-tpl="18">Pricing</div>
          <div data-dc-tpl="19">Company</div>
        </div>
        <div data-dc-tpl="20" style={S.s7}>
          <div data-dc-tpl="21" style={S.s8[theme]}>Log in</div>
          <div data-dc-tpl="22" style={S.s9}>
            Open account{' '}
            <span data-dc-tpl="23">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
