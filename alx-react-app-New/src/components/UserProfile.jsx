// UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  return (
      <div style={{ 
          border: '1px solid gray', 
          padding: '15px', 
          margin: '15px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
      }}>
          <h2 style={{ 
              color: 'navy', 
              fontSize: '1.5em', 
              marginBottom: '10px' 
          }}>{props.name}</h2>
          <p style={{ marginBottom: '5px' }}>
              Age: <span style={{ 
                  fontWeight: 'bold', 
                  color: 'darkred' 
              }}>{props.age}</span>
          </p>
          <p style={{ 
              fontStyle: 'italic', 
              lineHeight: '1.5' 
          }}>Bio: {props.bio}</p>
      </div>
  );
};

export default UserProfile;
