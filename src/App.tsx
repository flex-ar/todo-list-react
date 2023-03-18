import { ThemeProvider } from 'styled-components';

import { Container } from './components/Container';
import { useToggleTheme } from './hooks/useToggleTheme';
import { BgImage } from './styled-components/GlobalComponents';
import { GlobalStyle } from './styled-components/GlobalStyle';
import themes from './themes';

function App() {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <BgImage />
      <Container toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
