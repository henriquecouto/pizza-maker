import { Home } from 'pages';
import { ThemeProvider } from 'styled-components';
import { ScoreProvider } from 'stores/score';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ScoreProvider>
      <Home />
    </ScoreProvider>
  </ThemeProvider>
);

export default App;
