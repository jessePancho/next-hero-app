import { store } from "@/redux/store";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
