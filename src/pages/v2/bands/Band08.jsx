// Design band 08.
// Generated from src/design/movement-home-{dark,light}.html by
// tools/build-design-react.mjs — structure is shared, styles are per theme.

const S = {
  s0: {
    padding: '96px 40px 0px',
    boxSizing: 'border-box',
  },
  s1: {
    width: 'min(1320px, 100%)',
    margin: '0px auto',
  },
  s2: {
    width: '100%',
    maxWidth: '1200px',
    overflow: 'hidden',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  s3: {
    width: '1200px',
    height: 'auto',
    transformOrigin: 'left top',
    background: 'transparent',
    padding: '28px 32px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    transform: 'scale(0.998333)',
  },
  s4: {
    flex: '1 1 0%',
    display: 'flex',
    gap: '40px',
    marginTop: '18px',
  },
  s5: {
    flex: '1.32 1 0%',
    display: 'flex',
    flexDirection: 'column',
  },
  s6: {
    dark: {
      fontSize: '50px',
      lineHeight: '1.04',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(244, 244, 244)',
    },
    light: {
      fontSize: '50px',
      lineHeight: '1.04',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(17, 14, 23)',
    },
  },
  s7: {
    dark: {
      fontSize: '25px',
      lineHeight: '1.38',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(244, 244, 244)',
      marginTop: '74px',
      maxWidth: '470px',
    },
    light: {
      fontSize: '25px',
      lineHeight: '1.38',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(17, 14, 23)',
      marginTop: '74px',
      maxWidth: '470px',
    },
  },
  s8: {
    dark: {
      fontSize: '9px',
      lineHeight: '1.8',
      color: 'rgb(138, 138, 138)',
      marginTop: '26px',
      maxWidth: '330px',
    },
    light: {
      fontSize: '9px',
      lineHeight: '1.8',
      color: 'rgb(98, 104, 133)',
      marginTop: '26px',
      maxWidth: '330px',
    },
  },
  s9: {
    flex: '0.74 1 0%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  s10: {
    dark: {
      aspectRatio: '1 / 1',
      flex: '1 1 0%',
      width: '100%',
      borderRadius: '26px',
      background: 'url(/art/arch.jpg) center/cover no-repeat',
    },
    light: {
      aspectRatio: '1 / 1',
      flex: '1 1 0%',
      width: '100%',
      borderRadius: '26px',
      background: 'url(/art/arch.jpg) center/cover no-repeat',
    },
  },
  s11: {
    dark: {
      background: 'rgb(38, 38, 38)',
      borderRadius: '999px',
      padding: '11px 20px',
      fontSize: '12px',
      fontWeight: '500',
      color: 'rgb(244, 244, 244)',
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      marginTop: '14px',
    },
    light: {
      background: 'rgb(17, 14, 23)',
      borderRadius: '999px',
      padding: '11px 20px',
      fontSize: '12px',
      fontWeight: '500',
      color: 'rgb(255, 255, 255)',
      display: 'flex',
      alignItems: 'center',
      gap: '9px',
      marginTop: '14px',
    },
  },
  s12: {
    width: '8px',
    height: '8px',
    borderRadius: '999px',
    background: 'rgb(176,240,0)',
  },
};

export default function Band08({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="483" style={S.s0}>
      <div data-dc-tpl="484" style={S.s1}>
        <div data-dc-tpl="486" data-screen-label="06" data-fit="1200" style={S.s2}>
          <div data-dc-tpl="487" style={S.s3}>
            <div data-dc-tpl="500" style={S.s4}>
              <div data-dc-tpl="501" style={S.s5}>
                <div data-dc-tpl="502" style={S.s6[theme]}>
                  Liquidity that
                  <br data-dc-tpl="503" />
                  shows up.
                </div>
                <div data-dc-tpl="504" style={S.s7[theme]}>“Fast technology is only useful if the price behind it is real.”</div>
                <div data-dc-tpl="505" style={S.s8[theme]}>Pricing is aggregated from several bank and non-bank providers, so the top of book holds through news and session opens instead of widening the moment volume arrives.</div>
              </div>
              <div data-dc-tpl="506" style={S.s9}>
                <div data-dc-tpl="507" style={S.s10[theme]} />
                <div data-dc-tpl="508" style={S.s11[theme]}>
                  <div data-dc-tpl="509" style={S.s12} />
                  Liquidity-led execution
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
