// MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
      <main style={{ 
          padding: '20px', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
          maxWidth: '800px', 
          margin: 'auto' 
      }}>
          <p style={{ 
              fontSize: '18px', 
              color: '#333', 
              lineHeight: '1.6' 
          }}>
              I love to visit <span style={{ fontWeight: 'bold', color: 'blue' }}>New York</span>, 
              <span style={{ fontWeight: 'bold', color: 'blue' }}> Paris</span>, and 
              <span style={{ fontWeight: 'bold', color: 'blue' }}> Tokyo</span>.
          </p>
      </main>
  );
};

export default MainContent;

