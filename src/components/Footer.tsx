import React from 'react';
import MagneticButton from './MagneticButton';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      
      <div style={styles.topSection}>
        <div style={styles.socialGrid}>
          <div className="brutal-card" style={styles.socialIcon}>
            <img src="./Assets/dis.svg" alt="Discord" style={styles.iconImage} />
          </div>
          <div className="brutal-card" style={styles.socialIcon}>
            <img src="./Assets/prime_twitter.svg" alt="X" style={styles.iconImage} />
          </div>
          <div className="brutal-card" style={styles.socialIcon}>
            <img src="./Assets/inst.svg" alt="Instagram" style={styles.iconImage} />
          </div>
          <div className="brutal-card" style={styles.socialIcon}>
            <img src="./Assets/link.svg" alt="LinkedIn" style={styles.iconImage} />
          </div>
        </div>

        <div className="brutal-card footer-banner" style={styles.banner}>
          <div className="footer-banner-content" style={styles.bannerContent}>
            <img src="./Assets/image%20258.png" alt="Conversations" style={styles.bannerImage} />
            <div style={styles.bannerText}>
              <h3 style={styles.bannerHeading}>
                THOUSANDS OF<br/>CONVERSATIONS<br/>
                <span style={{color: '#7FA37F'}}>ARE WAITING...</span>
              </h3>
            </div>
          </div>
          <MagneticButton style={styles.bannerButton}>SIGN IN</MagneticButton>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <div className="footer-bottom-inner" style={styles.bottomInner}>
          <div style={styles.logoContainerFooter}>
            <img src="./Assets/logo%20animation%20.gif" alt="DOLOG Animation" style={styles.logo} />
          </div>
          
          <div style={styles.middleTextContainer}>
            <h2 style={styles.middleHeading}>
              STOP SCROLLING.<br />
              <span style={{ color: '#678467' }}>START MEETING.</span>
            </h2>
          </div>

          <div className="footer-links" style={styles.links}>
            <a href="#" className="footer-link" style={styles.link}>BACK TO TOP</a>
            <a href="#" className="footer-link" style={styles.link}>TERMS OF SERVICE</a>
            <a href="#" className="footer-link" style={styles.link}>PRIVACY POLICY</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

const styles = {
  footer: {
    padding: '80px 0 0',
    borderTop: '2px solid var(--black)',
    backgroundColor: 'var(--white)',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4px',
    maxWidth: '1200px',
    margin: '0 auto 80px',
    padding: '0 24px',
    flexWrap: 'wrap' as const,
  },
  socialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '4px',
  },
  socialIcon: {
    width: '192px',
    height: '192px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: '24px',
  },
  iconImage: {
    width: '56px',
    height: '56px',
  },
  banner: {
    padding: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
    backgroundColor: '#dbe4d5',
    width: '648px',
    height: '392px',
    borderRadius: '24px',
  },
  bannerContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    flex: 1,
  },
  bannerImage: {
    height: '180px',
    objectFit: 'contain' as const,
  },
  bannerText: {
    flex: 1,
  },
  bannerHeading: {
    fontSize: '44px',
    lineHeight: '1.2',
  },
  bannerButton: {
    width: '100%',
    height: '76px',
    fontSize: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSection: {
    backgroundColor: 'var(--black)',
    padding: '24px',
    width: '100%',
  },
  bottomInner: {
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    padding: '40px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '32px',
    margin: '0 auto',
    maxWidth: '1200px',
  },
  logoContainerFooter: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '124px',
    height: '124px',
    objectFit: 'contain' as const,
  },
  middleTextContainer: {
    flex: '2',
    textAlign: 'center' as const,
  },
  middleHeading: {
    fontSize: '44px',
    lineHeight: '1.2',
    letterSpacing: '-1px',
    margin: 0,
  },
  links: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    textAlign: 'right' as const,
    flex: '1',
  },
  link: {
    fontFamily: 'var(--font-heading)',
    color: 'var(--black)',
    textDecoration: 'none',
    fontSize: '28px',
    lineHeight: '1.2',
  }
};

export default Footer;
