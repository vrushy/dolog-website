import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const headerContent = (
    <div style={styles.headerInner}>
      <div style={styles.logoContainer}>
        <img src="./Assets/LOGO.svg" alt="DOLOG" style={styles.logo} />
      </div>
      <nav className="desktop-only" style={styles.nav}>
        <div 
          style={styles.navItemContainer}
          onMouseEnter={(e) => {
            setIsAboutHovered(true);
            setCursorPos({ x: e.clientX, y: e.clientY });
          }}
          onMouseLeave={() => setIsAboutHovered(false)}
          onMouseMove={handleMouseMove}
        >
          <a href="#about" style={styles.link}>About us</a>
          {isAboutHovered && (
            <div className="comic-bubble" style={{
              left: `${cursorPos.x + 4}px`,
              top: `${cursorPos.y + 30}px`,
            }}>
              <p style={styles.captionText}>
                DOLOG was built for one purpose: enjoyment. Not networking, not matching, not swiping — just people, coming together in a room, playing something, and enjoying the conversation that follows.
              </p>
              <p style={styles.captionText}>
                We wanted to build a safe space where connection actually has a purpose. Every room on DOLOG starts with a game, because a game gives people a reason to talk that doesn't feel forced. You're not trying to impress anyone. You're just trying to win — and somewhere between your first move and your last, a real conversation happens on its own.
              </p>
              <p style={styles.captionText}>
                That's the thing about a room full of strangers: you never really know who's in it. Could be someone across the city. Could be someone from your own college. Could be the neighbor you've walked past a hundred times and never once said hello to.
              </p>
              <p style={{ ...styles.captionText, marginBottom: 0 }}>
                DOLOG is that room. Come play, come talk, come find out.
              </p>
            </div>
          )}
        </div>
        <a href="#privacy" style={styles.link}>Privacy policy</a>
        <a href="#contact" style={styles.link}>Contact Us</a>
      </nav>
      <div className="desktop-only">
        <MagneticButton style={styles.playButton}>PLAY IN BROWSER</MagneticButton>
      </div>
      <div className="mobile-only" style={styles.hamburger} onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </div>
    </div>
  );

  const fixedHeaderStyle = {
    ...styles.header,
    ...styles.stickyHeader,
    transform: isSticky ? 'translateY(0)' : 'translateY(-100%)',
  };

  return (
    <>
      <header style={styles.header}>
        {headerContent}
      </header>
      <header style={fixedHeaderStyle}>
        {headerContent}
      </header>

      <div style={{
        ...styles.mobileMenuOverlay,
        transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-150%)',
        pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
      }}>
        <div style={styles.mobileMenuContent}>
           <a href="#about" style={styles.mobileLink} onClick={toggleMobileMenu}>About us</a>
           <a href="#privacy" style={styles.mobileLink} onClick={toggleMobileMenu}>Privacy policy</a>
           <a href="#contact" style={styles.mobileLink} onClick={toggleMobileMenu}>Contact Us</a>
           <MagneticButton style={{...styles.playButton, width: '100%', marginTop: '24px'}} onClick={toggleMobileMenu}>PLAY IN BROWSER</MagneticButton>
        </div>
      </div>
    </>
  );
};

const styles = {
  header: {
    width: '100%',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    position: 'relative' as const,
    backgroundColor: 'var(--bg-color)',
  },
  stickyHeader: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--bg-color)',
    borderBottom: '2px solid var(--black)',
    transition: 'transform 0.3s ease-in-out',
  },
  headerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 48px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '55px',
  },
  nav: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontWeight: 600,
    fontSize: '14px',
    textTransform: 'uppercase' as const,
  },
  navItemContainer: {
    position: 'relative' as const,
  },
  captionText: {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
    marginBottom: '16px',
    textTransform: 'none' as const,
  },
  playButton: {
    height: '54px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 24px',
  },
  hamburger: {
    cursor: 'pointer',
    alignItems: 'center',
  },
  mobileMenuOverlay: {
    position: 'fixed' as const,
    top: '103px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'var(--bg-color)',
    zIndex: 900,
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '24px',
    transition: 'transform 0.4s ease-in-out',
  },
  mobileMenuContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '32px',
    alignItems: 'center',
  },
  mobileLink: {
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontWeight: 600,
    fontSize: '24px',
    textTransform: 'uppercase' as const,
  }
};

export default Header;
