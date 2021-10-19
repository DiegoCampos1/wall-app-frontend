import React from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyle from './globalStyles/Global';
import { lightTheme, darkTheme } from './globalStyles/Themes';
import Toggle from './components/Toggle';
import './App.css';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={ themeMode }>
      <GlobalStyle />
      <Toggle theme={ theme } toggleTheme={ themeToggler } />
      <h1>Teste</h1>
    </ThemeProvider>

  );
};

export default App;
