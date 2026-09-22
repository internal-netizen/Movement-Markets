import MarketDiagram from '../../../components/MarketDiagram.jsx';
import '../../../styles/landing-details.css';
// Design band 06.
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
    display: 'flex',
    gap: '34px',
    alignItems: 'flex-start',
    marginTop: '24px',
  },
  s5: {
    dark: {
      flex: '0 0 auto',
      background: 'rgb(38, 38, 38)',
      borderRadius: '999px',
      padding: '10px 22px 10px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    light: {
      flex: '0 0 auto',
      background: 'rgb(17, 14, 23)',
      borderRadius: '999px',
      padding: '10px 22px 10px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
  },
  s6: {
    width: '26px',
    height: '26px',
    borderRadius: '999px',
    background: 'rgb(176,240,0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  s7: {
    dark: {
      width: '7px',
      height: '7px',
      borderRadius: '999px',
      background: 'rgb(38, 38, 38)',
    },
    light: {
      width: '7px',
      height: '7px',
      borderRadius: '999px',
      background: 'rgb(17, 14, 23)',
    },
  },
  s8: {
    dark: {
      fontSize: '13px',
      fontWeight: '500',
      color: 'rgb(244, 244, 244)',
      whiteSpace: 'nowrap',
    },
    light: {
      fontSize: '13px',
      fontWeight: '500',
      color: 'rgb(255, 255, 255)',
      whiteSpace: 'nowrap',
    },
  },
  s9: {
    flex: '1 1 0%',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    maxWidth: '290px',
  },
  s10: {
    dark: {
      fontSize: '9px',
      lineHeight: '1.8',
      color: 'rgb(138, 138, 138)',
    },
    light: {
      fontSize: '9px',
      lineHeight: '1.8',
      color: 'rgb(98, 104, 133)',
    },
  },
  s11: {
    dark: {
      flex: '1 1 0%',
      fontSize: '50px',
      lineHeight: '1.06',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(244, 244, 244)',
      textAlign: 'right',
      marginTop: '-6px',
    },
    light: {
      flex: '1 1 0%',
      fontSize: '50px',
      lineHeight: '1.06',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(17, 14, 23)',
      textAlign: 'right',
      marginTop: '-6px',
    },
  },
  s12: {
    dark: {
      flex: '1 1 0%',
      marginTop: '24px',
      background: 'rgb(15, 15, 15)',
      borderRadius: '26px',
      padding: '11px',
      boxSizing: 'border-box',
      display: 'flex',
      gap: '9px',
    },
    light: {
      flex: '1 1 0%',
      marginTop: '24px',
      background: 'rgb(17, 14, 23)',
      borderRadius: '26px',
      padding: '11px',
      boxSizing: 'border-box',
      display: 'flex',
      gap: '9px',
    },
  },
  s13: {
    flex: '1 1 0%',
    background: 'rgb(176,240,0)',
    borderRadius: '20px',
    padding: '20px 22px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  s14: {
    fontSize: '13px',
    fontWeight: '500',
    color: 'rgba(17, 14, 23, 0.7)',
  },
  s15: {
    marginTop: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  s16: {
    dark: {
      fontSize: '24px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(12, 12, 12)',
    },
    light: {
      fontSize: '24px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(17, 14, 23)',
    },
  },
  s17: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: 'rgba(17, 14, 23, 0.6)',
    maxWidth: '280px',
  },
  s18: {
    dark: {
      flex: '1 1 0%',
      background: 'rgb(38, 38, 38)',
      borderRadius: '20px',
      padding: '20px 22px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    light: {
      flex: '1 1 0%',
      background: 'rgb(38, 38, 38)',
      borderRadius: '20px',
      padding: '20px 22px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  s19: {
    dark: {
      fontSize: '13px',
      fontWeight: '500',
      color: 'rgba(242, 246, 250, 0.6)',
    },
    light: {
      fontSize: '13px',
      fontWeight: '500',
      color: 'rgba(255, 255, 255, 0.6)',
    },
  },
  s20: {
    dark: {
      fontSize: '24px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(244, 244, 244)',
    },
    light: {
      fontSize: '24px',
      lineHeight: '1.25',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(255, 255, 255)',
    },
  },
  s21: {
    dark: {
      fontSize: '15px',
      lineHeight: '1.7',
      color: 'rgba(242, 246, 250, 0.5)',
      maxWidth: '280px',
    },
    light: {
      fontSize: '15px',
      lineHeight: '1.7',
      color: 'rgba(255, 255, 255, 0.5)',
      maxWidth: '280px',
    },
  },
  s22: {
    dark: {
      aspectRatio: '4 / 3',
      flex: '1.2 1 0%',
      borderRadius: '20px',
      background: 'url(/art/03_home_technology_execution.jpg) center/cover no-repeat',
    },
    light: {
      aspectRatio: '4 / 3',
      flex: '1.2 1 0%',
      borderRadius: '20px',
      background: 'url(/art/03_home_technology_execution.jpg) center/cover no-repeat',
    },
  },
};

export default function Band06({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="393" style={S.s0}>
      <div data-dc-tpl="394" style={S.s1}>
        <div data-dc-tpl="396" data-screen-label="04" data-fit="1200" style={S.s2}>
          <div className="mb-canvas" data-dc-tpl="397" style={S.s3}>
            <div className="mb-head" data-dc-tpl="410" style={S.s4}>
              <div data-dc-tpl="411" style={S.s5[theme]}>
                <div data-dc-tpl="412" style={S.s6}>
                  <div data-dc-tpl="413" style={S.s7[theme]} />
                </div>
                <div data-dc-tpl="414" style={S.s8[theme]}>Our technology</div>
              </div>
              <div className="mb-copy" data-dc-tpl="415" style={S.s9}>
                <div className="mb-p" data-dc-tpl="416" style={S.s10[theme]}>Purpose-built systems connect pricing, platforms and execution in one coordinated trading environment.</div>
                <div className="mb-p" data-dc-tpl="417" style={S.s10[theme]}>Pricing, routing and platform access are built to work as one system.</div>
              </div>
              <div className="mb-h" data-dc-tpl="418" style={S.s11[theme]}>
                Technology
                <br data-dc-tpl="419" />
                & execution.
              </div>
            </div>
            <div className="mb-row" data-dc-tpl="420" style={S.s12[theme]}>
              <div data-dc-tpl="421" className="technology-card technology-card-lime" style={{...S.s13, position: 'relative', overflow: 'hidden'}}>
                <div data-dc-tpl="422" style={S.s14}>01</div>
                <div data-dc-tpl="423" style={{...S.s15, position: 'relative', zIndex: 2}}>
                  <div className="mb-sub" data-dc-tpl="424" style={S.s16[theme]}>
                    Smart liquidity
                    <br data-dc-tpl="425" />
                    routing
                  </div>
                  <div className="mb-p" data-dc-tpl="426" style={{...S.s17, color: 'var(--detail-muted)'}}>Orders are directed through connected liquidity pathways to support efficient execution.</div>
                </div>
                <div className="technology-diagram"><MarketDiagram kind="routing" /></div>
              </div>
              <div data-dc-tpl="427" className="technology-card technology-card-dark" style={{...S.s18[theme], position: 'relative', overflow: 'hidden'}}>
                <div data-dc-tpl="428" style={S.s19[theme]}>02</div>
                <div data-dc-tpl="429" style={{...S.s15, position: 'relative', zIndex: 2}}>
                  <div className="mb-sub" data-dc-tpl="430" style={S.s20[theme]}>
                    Connected platforms
                    <br data-dc-tpl="431" />
                    on your devices
                  </div>
                  <div className="mb-p" data-dc-tpl="432" style={{...S.s21[theme], color: 'var(--detail-muted)'}}>Keep your account, watchlists and trading access consistent across supported devices.</div>
                </div>
                <div className="technology-diagram"><MarketDiagram kind="devices" /></div>
              </div>
              <div className="mb-media" data-dc-tpl="433" style={S.s22[theme]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
