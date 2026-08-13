import React from 'react';
import MagneticButton from './MagneticButton';

const PricingSection: React.FC = () => {
  return (
    <section style={styles.sectionWrapper}>
      <div className="pricing-vertical-line" style={styles.verticalLine}></div>
      <div style={styles.section}>
        <div className="pricing-grid" style={styles.grid}>
        
        {/* FREE PLAN */}
        <div style={styles.planContainer}>
          <div style={styles.planHeader}>
            <img src="./Assets/Freeicon.svg" alt="Free" style={styles.planIcon} />
            <h3 style={styles.planTitle}>FREE</h3>
          </div>
          
          <div className="brutal-card" style={{ ...styles.card, backgroundColor: '#D9F1D9' }}>
            <h4 style={styles.cardTitle}>Start Meeting People</h4>
            <ul style={styles.featureList}>
              <li style={styles.featureItem}><img src="./Assets/1.svg" alt="check" style={styles.checkIcon} /> Limited game invitations per day</li>
              <li style={styles.featureItem}><img src="./Assets/1.svg" alt="check" style={styles.checkIcon} /> Join unlimited public games (ad-supported)</li>
              <li style={styles.featureItem}><img src="./Assets/1.svg" alt="check" style={styles.checkIcon} /> Limited filters</li>
              <li style={styles.featureItem}><img src="./Assets/1.svg" alt="check" style={styles.checkIcon} /> 30-minute sessions</li>
              <li style={styles.featureItem}><img src="./Assets/1.svg" alt="check" style={styles.checkIcon} /> Connect with people</li>
            </ul>
            <MagneticButton style={styles.actionButton}>START FREE NOW</MagneticButton>
          </div>
        </div>

        {/* PAID PLAN */}
        <div style={styles.planContainer}>
          <div style={styles.planHeader}>
            <img src="./Assets/paidicon.svg" alt="Paid" style={styles.planIcon} />
            <h3 style={styles.planTitle}>PAID</h3>
          </div>
          
          <div className="brutal-card" style={{ ...styles.card, backgroundColor: '#F9F3E5' }}>
            <h4 style={styles.cardTitle}>Unlock the Full Experience</h4>
            <ul style={styles.featureList}>
              <li style={styles.featureItem}><img src="./Assets/2.svg" alt="check" style={styles.checkIcon} /> Unlimited game invitations</li>
              <li style={styles.featureItem}><img src="./Assets/2.svg" alt="check" style={styles.checkIcon} /> Ad-free experience</li>
              <li style={styles.featureItem}><img src="./Assets/2.svg" alt="check" style={styles.checkIcon} /> Unlimited filters</li>
              <li style={styles.featureItem}><img src="./Assets/2.svg" alt="check" style={styles.checkIcon} /> Extend sessions up to 60 minutes</li>
              <li style={styles.featureItem}><img src="./Assets/2.svg" alt="check" style={styles.checkIcon} /> Connect with people from your city</li>
            </ul>
            <MagneticButton className="green" style={styles.actionButton}>₹350/MONTH</MagneticButton>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

const styles = {
  sectionWrapper: {
    borderTop: '2px solid var(--black)',
    position: 'relative' as const,
    backgroundColor: 'var(--bg-color)',
  },
  verticalLine: {
    position: 'absolute' as const,
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: 'var(--black)',
    transform: 'translateX(-50%)',
    zIndex: 0,
  },
  section: {
    padding: '52px 24px 80px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative' as const,
    zIndex: 1,
  },
  grid: {
    display: 'flex',
    gap: '200px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  planContainer: {
    flex: '1',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  planHeader: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginBottom: '16px',
  },
  planIcon: {
    height: '72px',
    marginBottom: '8px',
  },
  planTitle: {
    fontSize: '44px',
  },
  card: {
    width: '100%',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
    borderRadius: '24px',
  },
  cardTitle: {
    fontSize: '24px',
    marginBottom: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--black)',
    textTransform: 'none' as const,
    fontWeight: 500,
  },
  featureList: {
    listStyleType: 'none',
    padding: 0,
    margin: '0 0 32px 0',
    flex: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '16px',
    fontFamily: 'var(--font-body)',
    fontSize: '20px',
    fontWeight: 400,
  },
  checkIcon: {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    marginTop: '2px',
  },
  actionButton: {
    width: '100%',
    height: '76px',
    fontSize: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default PricingSection;
