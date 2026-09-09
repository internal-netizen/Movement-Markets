// Design band 10.
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
    aspectRatio: '1200 / 675',
    overflow: 'hidden',
    boxSizing: 'border-box',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  s3: {
    width: '1200px',
    height: '675px',
    transformOrigin: 'left top',
    background: 'transparent',
    position: 'relative',
    overflow: 'hidden',
    transform: 'scale(0.998333)',
  },
  s4: {
    dark: {
      position: 'absolute',
      left: '0px',
      top: '0px',
      width: '42%',
      height: '100%',
      background: 'rgb(15, 15, 15)',
      borderRadius: '0px 46px 46px 0px',
    },
    light: {
      position: 'absolute',
      left: '0px',
      top: '0px',
      width: '42%',
      height: '100%',
      background: 'rgb(17, 14, 23)',
      borderRadius: '0px 46px 46px 0px',
    },
  },
  s5: {
    dark: {
      position: 'absolute',
      left: '9%',
      top: '16%',
      width: '14.5%',
      height: '70%',
      borderRadius: '22px',
      background: 'url(/art/routing.jpg) 62% center/cover no-repeat',
    },
    light: {
      position: 'absolute',
      left: '9%',
      top: '16%',
      width: '14.5%',
      height: '70%',
      borderRadius: '22px',
      background: 'url(/art/routing.jpg) 62% center/cover no-repeat',
    },
  },
  s6: {
    dark: {
      position: 'absolute',
      left: '24.5%',
      top: '13%',
      width: '14%',
      height: '73%',
      borderRadius: '22px',
      background: 'url(/art/arch.jpg) center/cover no-repeat',
    },
    light: {
      position: 'absolute',
      left: '24.5%',
      top: '13%',
      width: '14%',
      height: '73%',
      borderRadius: '22px',
      background: 'url(/art/arch.jpg) center/cover no-repeat',
    },
  },
  s7: {
    position: 'absolute',
    left: '3.4%',
    top: '29%',
    width: '52px',
    height: '52px',
    borderRadius: '999px',
    background: 'rgb(176,240,0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '2',
  },
  s8: {
    dark: {
      transform: 'rotate(-32deg)',
      fontSize: '7px',
      letterSpacing: '0.1em',
      color: 'rgb(12, 12, 12)',
      textAlign: 'center',
      lineHeight: '1.3',
    },
    light: {
      transform: 'rotate(-32deg)',
      fontSize: '7px',
      letterSpacing: '0.1em',
      color: 'rgb(17, 14, 23)',
      textAlign: 'center',
      lineHeight: '1.3',
    },
  },
  s9: {
    position: 'absolute',
    inset: '96px 32px 34px 45%',
    display: 'flex',
    flexDirection: 'column',
  },
  s10: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '20px',
  },
  s11: {
    dark: {
      fontSize: '52px',
      lineHeight: '1.04',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(244, 244, 244)',
    },
    light: {
      fontSize: '52px',
      lineHeight: '1.04',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(17, 14, 23)',
    },
  },
  s12: {
    dark: {
      width: '38px',
      height: '38px',
      borderRadius: '999px',
      background: 'rgb(38, 38, 38)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(176,240,0)',
      fontSize: '15px',
      flex: '0 0 auto',
      marginTop: '6px',
    },
    light: {
      width: '38px',
      height: '38px',
      borderRadius: '999px',
      background: 'rgb(17, 14, 23)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(176,240,0)',
      fontSize: '15px',
      flex: '0 0 auto',
      marginTop: '6px',
    },
  },
  s13: {
    display: 'flex',
    gap: '14px',
    height: '212px',
    // was margin-top: auto, which pins the row to the column's bottom and
    // swallows every spare unit — 225 of them with our shorter heading, as
    // one hole between the heading and the cards. A fixed gap sits the cards
    // under the heading and lets the slack fall at the foot of the column.
    marginTop: '48px',
  },
  s14: {
    flex: '1 1 0%',
    background: 'rgb(176,240,0)',
    borderRadius: '20px',
    padding: '18px 20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  s15: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'rgba(17, 14, 23, 0.7)',
  },
  s16: {
    marginTop: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  s17: {
    dark: {
      fontSize: '16px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(12, 12, 12)',
    },
    light: {
      fontSize: '16px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(17, 14, 23)',
    },
  },
  s18: {
    fontSize: '8px',
    lineHeight: '1.7',
    color: 'rgba(17, 14, 23, 0.6)',
    maxWidth: '180px',
  },
  s19: {
    dark: {
      flex: '1 1 0%',
      background: 'rgb(31, 31, 31)',
      borderRadius: '20px',
      padding: '18px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    light: {
      flex: '1 1 0%',
      background: 'rgb(241, 255, 215)',
      borderRadius: '20px',
      padding: '18px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  s20: {
    dark: {
      fontSize: '13px',
      fontWeight: '500',
      color: 'rgb(138, 138, 138)',
    },
    light: {
      fontSize: '13px',
      fontWeight: '500',
      color: 'rgba(17, 14, 23, 0.7)',
    },
  },
  s21: {
    dark: {
      fontSize: '16px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(244, 244, 244)',
    },
    light: {
      fontSize: '16px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(17, 14, 23)',
    },
  },
  s22: {
    dark: {
      fontSize: '8px',
      lineHeight: '1.7',
      color: 'rgb(138, 138, 138)',
      maxWidth: '180px',
    },
    light: {
      fontSize: '8px',
      lineHeight: '1.7',
      color: 'rgba(17, 14, 23, 0.6)',
      maxWidth: '180px',
    },
  },
};

export default function Band10({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="542" style={S.s0}>
      <div data-dc-tpl="543" style={S.s1}>
        <div data-dc-tpl="545" data-screen-label="08" data-fit="1200" style={S.s2}>
          <div data-dc-tpl="546" style={S.s3}>
            <div data-dc-tpl="547" style={S.s4[theme]} />
            <div data-dc-tpl="548" style={S.s5[theme]} />
            <div data-dc-tpl="549" style={S.s6[theme]} />
            <div data-dc-tpl="565" style={S.s9}>
              <div data-dc-tpl="566" style={S.s10}>
                <div data-dc-tpl="567" style={S.s11[theme]}>
                  Built on
                  <br data-dc-tpl="568" />
                  connections.
                </div>
              </div>
              <div data-dc-tpl="570" style={S.s13}>
                <div data-dc-tpl="571" style={S.s14}>
                  <div data-dc-tpl="572" style={S.s15}>01</div>
                  <div data-dc-tpl="573" style={S.s16}>
                    <div data-dc-tpl="574" style={S.s17[theme]}>
                      Liquidity network
                      <br data-dc-tpl="575" />
                      priced together
                    </div>
                    <div data-dc-tpl="576" style={S.s18}>Several providers compete for every fill, the best price on top.</div>
                  </div>
                </div>
                <div data-dc-tpl="577" style={S.s19[theme]}>
                  <div data-dc-tpl="578" style={S.s20[theme]}>02</div>
                  <div data-dc-tpl="579" style={S.s16}>
                    <div data-dc-tpl="580" style={S.s21[theme]}>
                      Platforms you
                      <br data-dc-tpl="581" />
                      already know
                    </div>
                    <div data-dc-tpl="582" style={S.s22[theme]}>MetaTrader 5 and Movement WebTrader, one account across both.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
