import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyle from './globalStyles/Global';
import { lightTheme, darkTheme } from './globalStyles/Themes';
import Toggle from './components/Toggle';
import './App.css';
import Login from './pages/Login';
import { MainContainer } from './globalStyles/componentsGlobal';
import CreateLogin from './pages/CreateLogin/Index';
import Wall from './pages/Wall';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={ themeMode }>
      <GlobalStyle />
      <MainContainer>
        <Toggle theme={ theme } toggleTheme={ themeToggler } />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/create-login" component={ CreateLogin } />
          <Route exact path="/wall" component={ Wall } />
        </Switch>
      </MainContainer>
    </ThemeProvider>

  );
};

export default App;
