import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes/theme";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Home from "./screens/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
