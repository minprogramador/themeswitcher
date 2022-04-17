import React, {useState} from 'react';
import styled, { ThemeProvider} from 'styled-components';

import logo from './logo.svg';
import './App.css';
import {lightTheme, darkTheme, GlobalStyles} from './theme';

const StyledApp = styled.div`

  color: ${props => props.theme.fontColor}

`;
function App() {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
        <p>Ola mundo</p>
        <button onClick={() => themeToggle()}>Trocar thema</button>

      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
