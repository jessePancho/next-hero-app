import { useTheme } from "@mui/material";

export const useHomeStyles = () => {
  const theme = useTheme();

  return {
    container: {
      background: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      minHeight: '100vh',
      pt: 10,
      pb: 6,
    },
    heroDetailRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem', // mt-4 = 1rem
      width: '100%',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    detailValue: {
      color: theme.palette.text.secondary,
    },
  }
};