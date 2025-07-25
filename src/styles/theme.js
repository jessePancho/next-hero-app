import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffa31a', // Customize this
    },
    secondary: {
      main: '#f50057',
    },
    custom: {
      active: '#00bcd4', // Your "active" color used in comments
    },
    text: {
      primary: '#ffffff',  // Default text color
      secondary: '#757575', // Used for secondary text (e.g. captions)
      disabled: '#bdbdbd',  // Used when text is disabled
    },
  },
  typography: {
    fontFamily: 'Raleway, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8,
});

export default theme;