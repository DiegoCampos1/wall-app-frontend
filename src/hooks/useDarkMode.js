import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);
  const setMode = (mode) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => (
    theme === 'light' ? setMode('dark') : setMode('light')
  );

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }

    setMountedComponent(true);
  }, []);

  return [theme, themeToggler, mountedComponent];
};

export default useDarkMode;
