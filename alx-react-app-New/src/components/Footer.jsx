// Footer.jsx
import React from 'react';

function Footer() {
  return (
      <footer style={{ 
          backgroundColor: '#333', 
          color: '#fff', 
          textAlign: 'center', 
          padding: '15px', 
          borderTop: '3px solid #555', 
          position: 'fixed', 
          width: '100%', 
          bottom: 0 
      }}>
          <p style={{ 
              margin: 0, 
              fontSize: '14px', 
              fontFamily: 'Arial, sans-serif' 
          }}>
              © 2023 City Lovers
          </p>
      </footer>
  );
}

export default Footer;

