import React from 'react';

const marqueeTags = [
  "CURIOUS?", "▲", "CHOOSE A GAME", "▼", "MEET SOMEONE", "▲", "PLAY", "▼", 
  "TALK", "▲", "LAUGH", "▼", "CONNECT", "▲", "MAKE FRIENDS", "▲", "COMPETE", "▲", "REPEAT"
];

const HeroSection: React.FC = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.tickerContainer}>
        <div className="marquee">
          {marqueeTags.map((tag, i) => <span key={`m1-${i}`}>{tag}</span>)}
          {marqueeTags.map((tag, i) => <span key={`m2-${i}`}>{tag}</span>)}
          {marqueeTags.map((tag, i) => <span key={`m3-${i}`}>{tag}</span>)}
          {marqueeTags.map((tag, i) => <span key={`m4-${i}`}>{tag}</span>)}
        </div>
      </div>
      
      <div style={styles.content}>
        <h1 style={styles.heading}>
          MEET RANDOM <br /> PEOPLE FROM <br /> YOUR CITY
        </h1>
        
        <div style={styles.mainImageContainer}>
           <img src="/Assets/Mainimage.svg" alt="Main" style={styles.mainImage} />
           <img src="/Assets/Slimlig.svg" alt="Smiling Face" style={styles.smileyDecoration} />
           <img src="/Assets/Star.svg" alt="Pink Star" style={styles.starDecoration} />
           <img src="/Assets/Blackstar.svg" alt="Black Star" style={styles.blackStarDecoration} />
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    padding: '40px 0 80px',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  tickerContainer: {
    position: 'absolute' as const,
    top: '150px',
    left: '-5%',
    width: '110%',
    transform: 'rotate(-3deg)',
    backgroundColor: 'var(--white)',
    borderTop: '2px solid var(--black)',
    borderBottom: '2px solid var(--black)',
    padding: '8px 0',
    zIndex: 5,
    overflow: 'hidden',
  },
  content: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
    maxWidth: '1000px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '153px',
    letterSpacing: '-1px',
    marginBottom: '60px',
    lineHeight: '0.9',
  },
  mainImageContainer: {
    position: 'relative' as const,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-80px', // Overlaps the text
    zIndex: 2,
  },
  mainImage: {
    width: '100%',
    maxWidth: '1000px',
  },
  smileyDecoration: {
    position: 'absolute' as const,
    top: '-130px',
    left: '30px',
    width: '120px',
    zIndex: 2,
    animation: 'wobble 4s ease-in-out infinite',
  },
  starDecoration: {
    position: 'absolute' as const,
    top: '-90px',
    right: '-20px',
    width: '150px',
    zIndex: 2,
    animation: 'float-up-down 3s ease-in-out infinite',
  },
  blackStarDecoration: {
    position: 'absolute' as const,
    top: '-70px',
    right: '-160px',
    width: '106px',
    zIndex: 1,
    animation: 'float-up-down 4s ease-in-out infinite 1s',
  }
};

export default HeroSection;
