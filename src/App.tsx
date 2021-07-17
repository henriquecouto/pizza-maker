import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>Hello Pizza Maker</div>
    </ThemeProvider>
  );
};

export default App;
