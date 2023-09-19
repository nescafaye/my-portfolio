// useDarkMode.js
import { useState, useEffect } from 'react';

export default function useDarkMode() {

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem('darkMode', newIsDarkMode.toString());
  };
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
   
}
