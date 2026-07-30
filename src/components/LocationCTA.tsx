import React, { useState } from 'react';
import MagneticButton from './MagneticButton';

const LocationCTA: React.FC = () => {
  const locations = ['DELHI', 'BANGALORE', 'MUMBAI'];
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => setActiveIndex(prev => prev === 0 ? locations.length - 1 : prev - 1);
  const handleNext = () => setActiveIndex(prev => prev === locations.length - 1 ? 0 : prev + 1);

  return (
    <section style={styles.section}>
      <div className="brutal-card" style={styles.card}>
        <div style={styles.cardInner}>
          <div style={styles.iconContainer}>
            <img src="/Assets/Okicon.svg" alt="icon" style={styles.icon} />
          </div>
          
          <h2 style={styles.heading}>
            DELETE THE <span style={{color: '#A388EE'}}>AWKWARD</span>. KEEP <span style={{color: '#7FA37F'}}>THE FUN</span>.
          </h2>
          <p style={styles.paragraph}>
            Play, laugh, compete, and meet people who live just around the corner.
          </p>

        <div style={styles.selector}>
          <button style={styles.arrowButton} onClick={handlePrev}>
            <img src="/Assets/arrow%20left.svg" alt="Previous" style={styles.arrowIcon} />
          </button>
          
          <div style={styles.locationsWrapper}>
            <div style={{
              ...styles.locationsTrack,
              transform: `translateX(${[140, 0, -150][activeIndex]}px)`
            }}>
              {locations.map((loc, i) => (
                <span 
                  key={loc} 
                  onClick={() => setActiveIndex(i)}
                  style={{
                    ...styles.locationText, 
                    color: i === activeIndex ? 'var(--black)' : '#a0a0a0',
                    textDecoration: i === activeIndex ? 'underline' : 'none',
                    fontWeight: i === activeIndex ? 800 : 500,
                  }}
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          <button style={styles.arrowButton} onClick={handleNext}>
            <img src="/Assets/arrow%20right.svg" alt="Next" style={styles.arrowIcon} />
          </button>
        </div>

          <MagneticButton className="green" style={styles.playButton}>
            PLAY ON BROWSER
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#222222',
    padding: '80px 24px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: '800px',
    width: '100%',
    padding: '10px',
  },
  cardInner: {
    border: '2px solid var(--black)',
    borderRadius: '16px',
    padding: '38px',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: '24px',
  },
  icon: {
    height: '72px',
  },
  heading: {
    fontSize: '44px',
    marginBottom: '16px',
  },
  paragraph: {
    fontFamily: 'var(--font-body)',
    fontSize: '28px',
    marginBottom: '48px',
    fontWeight: 400,
  },
  selector: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '40px',
  },
  locationsWrapper: {
    width: '450px',
    overflow: 'hidden',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
    maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
  },
  locationsTrack: {
    display: 'flex',
    alignItems: 'center',
    gap: '44px',
    justifyContent: 'center',
    transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
  },
  locationText: {
    fontFamily: 'var(--font-heading)',
    fontSize: '32px',
    cursor: 'pointer',
    textAlign: 'center' as const,
    flexShrink: 0,
    transition: 'color 0.4s ease, font-weight 0.4s ease',
  },
  arrowButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  arrowIcon: {
    width: '56px',
    height: '56px',
  },
  playButton: {
    height: '54px',
    padding: '0 48px',
    fontSize: '28px',
    fontWeight: 400,
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default LocationCTA;
