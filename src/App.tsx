import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import Rotas from "./routes";
import theme from "./styles/theme";



export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Rotas />
    </ThemeProvider>
  )
}

