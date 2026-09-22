import MarketDiagram from '../../../components/MarketDiagram.jsx';
import '../../../styles/landing-details.css';
// Design band 05.
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
    alignItems: 'flex-start',
    gap: '28px',
    marginTop: '14px',
  },
  s5: {
    dark: {
      width: '300px',
      flex: '0 0 auto',
      background: 'rgb(15, 15, 15)',
      borderRadius: '34px',
      padding: '11px',
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative',
    },
    light: {
      width: '300px',
      flex: '0 0 auto',
      background: 'rgb(17, 14, 23)',
      borderRadius: '34px',
      padding: '11px',
      boxSizing: 'border-box',
      display: 'flex',
      position: 'relative',
    },
  },
  s6: {
    dark: {
      aspectRatio: '1 / 1',
      flex: '1 1 0%',
      borderRadius: '26px',
      background: 'url(/art/04_home_performance_every_click.jpg) center/cover no-repeat',
    },
    light: {
      aspectRatio: '1 / 1',
      flex: '1 1 0%',
      borderRadius: '26px',
      background: 'url(/art/04_home_performance_every_click.jpg) center/cover no-repeat',
    },
  },
  s7: {
    dark: {
      position: 'absolute',
      left: '52px',
      bottom: '-24px',
      width: '50px',
      height: '50px',
      borderRadius: '999px',
      background: 'rgb(176,240,0)',
      boxShadow: 'rgb(12, 12, 12) 0px 0px 0px 3px, rgb(15, 15, 15) 0px 0px 0px 9px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(12, 12, 12)',
      fontSize: '19px',
      fontWeight: '600',
    },
    light: {
      position: 'absolute',
      left: '52px',
      bottom: '-24px',
      width: '50px',
      height: '50px',
      borderRadius: '999px',
      background: 'rgb(176,240,0)',
      boxShadow: 'rgb(17, 14, 23) 0px 0px 0px 3px, rgb(17, 14, 23) 0px 0px 0px 9px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgb(17, 14, 23)',
      fontSize: '19px',
      fontWeight: '600',
    },
  },
  s8: {
    flex: '1 1 0%',
    display: 'flex',
    flexDirection: 'column',
  },
  s9: {
    display: 'flex',
    gap: '14px',
    height: '196px',
    flex: '0 0 auto',
  },
  s10: {
    dark: {
      flex: '1 1 0%',
      background: 'rgb(31, 31, 31)',
      borderRadius: '20px',
      padding: '20px 22px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    light: {
      flex: '1 1 0%',
      background: 'rgb(241, 255, 215)',
      borderRadius: '20px',
      padding: '20px 22px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  s11: {
    dark: {
      fontSize: '20px',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(244, 244, 244)',
    },
    light: {
      fontSize: '20px',
      fontWeight: '500',
      letterSpacing: '-0.02em',
      color: 'rgb(17, 14, 23)',
    },
  },
  s12: {
    dark: {
      fontSize: '72px',
      fontWeight: '600',
      letterSpacing: '-0.04em',
      color: 'rgb(244, 244, 244)',
      lineHeight: '1',
      marginTop: '14px',
    },
    light: {
      fontSize: '72px',
      fontWeight: '600',
      letterSpacing: '-0.04em',
      color: 'rgb(17, 14, 23)',
      lineHeight: '1',
      marginTop: '14px',
    },
  },
  s13: {
    dark: {
      fontSize: '15px',
      lineHeight: '1.7',
      color: 'rgb(138, 138, 138)',
      marginTop: '18px',
      maxWidth: '280px',
    },
    light: {
      fontSize: '15px',
      lineHeight: '1.7',
      color: 'rgb(98, 104, 133)',
      marginTop: '18px',
      maxWidth: '280px',
    },
  },
  s14: {
    flex: '1 1 0%',
    background: 'rgb(176,240,0)',
    borderRadius: '20px',
    padding: '20px 22px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  s15: {
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
  s16: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: 'rgba(17, 14, 23, 0.6)',
    marginTop: '18px',
    maxWidth: '280px',
  },
  s17: {
    dark: {
      fontSize: '52px',
      lineHeight: '1.05',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(244, 244, 244)',
      marginTop: '36px',
    },
    light: {
      fontSize: '52px',
      lineHeight: '1.05',
      fontWeight: '500',
      letterSpacing: '-0.035em',
      color: 'rgb(17, 14, 23)',
      marginTop: '36px',
    },
  },
};

export default function Band05({ theme = 'dark' }) {
  return (
    <div data-dc-tpl="360" style={S.s0}>
      <div data-dc-tpl="361" style={S.s1}>
        <div data-dc-tpl="363" data-screen-label="03" data-fit="1200" style={S.s2}>
          <div className="mb-canvas" data-dc-tpl="364" style={S.s3}>
            <div className="mb-row" data-dc-tpl="377" style={S.s4}>
              <div className="mb-media" data-dc-tpl="378" style={S.s5[theme]}>
                <div data-dc-tpl="379" style={S.s6[theme]} />
              </div>
              <div data-dc-tpl="381" style={S.s8}>
                <div className="mb-cards" data-dc-tpl="382" style={S.s9}>
                  <div data-dc-tpl="383" className="technology-card" style={{...S.s10[theme], position: 'relative', overflow: 'hidden'}}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div className="mb-sub" data-dc-tpl="384" style={S.s11[theme]}>Availability target</div>
                      <div className="mb-big" data-dc-tpl="385" style={S.s12[theme]}>99.9%</div>
                      <div className="mb-p" data-dc-tpl="386" style={{...S.s13[theme], color: 'var(--detail-muted)'}}>Uptime target across pricing, routing and platform access.</div>
                    </div>
                    <div className="technology-diagram"><MarketDiagram kind="availability" /></div>
                  </div>
                  <div data-dc-tpl="387" className="technology-card technology-card-lime" style={{...S.s14, position: 'relative', overflow: 'hidden'}}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div className="mb-sub" data-dc-tpl="388" style={S.s15[theme]}>
                        Execution target
                        <br data-dc-tpl="389" />
                        under 15ms
                      </div>
                      <div className="mb-p" data-dc-tpl="390" style={{...S.s16, color: 'var(--detail-muted)'}}>The target that sits alongside our median 12ms fill on the major pairs in liquid sessions.</div>
                    </div>
                    <div className="technology-diagram"><MarketDiagram kind="speed" /></div>
                  </div>
                </div>
                <div className="mb-h" data-dc-tpl="391" style={S.s17[theme]}>
                  Performance
                  <br data-dc-tpl="392" />
                  built into every click.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
