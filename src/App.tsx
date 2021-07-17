import { ThemeProvider } from 'styled-components';
import { ScoreProvider } from 'stores/score';
import Routes from './routes';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ScoreProvider>
      <Routes />
    </ScoreProvider>
  </ThemeProvider>
);

export default App;
