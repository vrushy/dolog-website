import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.flowerContainer}>
        <img src="/Assets/Flower.svg" alt="flower" style={styles.flower} />
      </div>
      
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>
          COME CURIOUS. LEAVE CONNECTED.<br/>
          FORGET AWKWARD INTRODUCTIONS.
        </h2>
        <p style={styles.paragraph}>
          Instead, step into a room filled with games designed to bring people together. Pick a challenge, meet someone new across the table, and discover how quickly a little competition can turn strangers into friends.
        </p>
      </div>

      <div style={styles.interactiveArea}>
        <img src="/Assets/yellowfom.svg" alt="decoration" className="feature-decoration" style={styles.bgDecorationLeft} />
        <img src="/Assets/Frame%201321315507.gif" alt="Game" className="feature-board-gif" style={styles.boardGif} />
        <img src="/Assets/brakets.svg" alt="decoration" className="feature-decoration" style={styles.bgDecorationRight} />
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center' as const,
    position: 'relative' as const,
  },
  flowerContainer: {
    marginBottom: '32px',
  },
  flower: {
    height: '94px',
    animation: 'spin 10s linear infinite',
  },
  textContainer: {
    maxWidth: '1000px',
    margin: '0 auto 80px',
  },
  heading: {
    fontSize: '44px',
    marginBottom: '24px',
  },
  paragraph: {
    fontSize: '32px',
    fontWeight: 400,
  },
  interactiveArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    position: 'relative' as const,
    marginTop: '60px',
  },
  boardGif: {
    height: '598px',
    zIndex: 2,
  },
  bgDecorationLeft: {
    position: 'absolute' as const,
    left: '-180px',
    top: '0px',
    height: '189px',
    zIndex: 3,
  },
  bgDecorationRight: {
    position: 'absolute' as const,
    right: '-100px',
    top: '400px',
    height: '121px',
    zIndex: 3,
  }
};

export default FeatureSection;
