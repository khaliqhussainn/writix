import React, { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(65);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Dashboard', icon: '🏠' },
    { name: 'Projects', icon: '📁' },
    { name: 'Tasks', icon: '✅' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Documents', icon: '📄' },
    { name: 'Reports', icon: '📊' },
  ];

  return (
    <>
      <button onClick={toggleSidebar} style={styles.menuButton} aria-label="Toggle Sidebar">
        ☰
      </button>
      <div style={{
        ...styles.sidebar,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      }}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>🚀</span>
          <span style={styles.logoText}>Writix Project</span>
        </div>
        <nav style={styles.nav}>
          {links.map((link, index) => (
            <a key={index} href="#" style={styles.navLink}>
              <span style={styles.navIcon}>{link.icon}</span>
              <span style={styles.navText}>{link.name}</span>
            </a>
          ))}
        </nav>
        <div style={styles.progressContainer}>
          <div style={styles.progressLabel}>
            <span>Project Progress</span>
            <span>{progress}%</span>
          </div>
          <div style={styles.progressBarContainer}>
            <div style={{...styles.progressBar, width: `${progress}%`}}></div>
          </div>
        </div>
        <div style={styles.profile}>
          <img src="/placeholder.svg?height=40&width=40" alt="User Avatar" style={styles.avatar} />
          <div style={styles.profileInfo}>
            <span style={styles.profileName}>Khalique Hussain</span>
            <span style={styles.profileEmail}>khaliquehussain@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  menuButton: {
    position: 'fixed' as const,
    top: '10px',
    left: '10px',
    zIndex: 1000,
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  sidebar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    height: '100vh',
    width: '250px',
    backgroundColor: '#f8f9fa',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column' as const,
    transition: 'transform 0.3s ease-in-out',
    zIndex: 999,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    padding: '40px',
    borderBottom: '1px solid #e9ecef',
  },
  logoIcon: {
    fontSize: '24px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  nav: {
    flex: 1,
    padding: '20px 0',
    overflowY: 'auto' as const,
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    color: '#495057',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  },
  navIcon: {
    marginRight: '10px',
    fontSize: '18px',
  },
  navText: {
    fontSize: '14px',
  },
  progressContainer: {
    padding: '20px',
    borderTop: '1px solid #e9ecef',
  },
  progressLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#495057',
  },
  progressBarContainer: {
    height: '6px',
    backgroundColor: '#e9ecef',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007bff',
    transition: 'width 0.3s ease-in-out',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderTop: '1px solid #e9ecef',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  profileName: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: '12px',
    color: '#6c757d',
  },
};