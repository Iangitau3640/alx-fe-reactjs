// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

// Custom hook to manage authentication status
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate authentication check (e.g., from local storage or API)
    const checkAuthStatus = () => {
      // Replace with real authentication logic
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token); // Set authenticated if token exists
    };
    checkAuthStatus();
  }, []);

  return { isAuthenticated };
};

export default useAuth;