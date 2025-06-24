import { useTheme } from "@mui/material"

export const useFooterStyles = () => {
  const theme = useTheme();

  return {
    footContainer: {
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '9rem',

      [theme.breakpoints.down('md')]: {
        height: '11rem',
      },
    },
    footerText: {
      color: theme.palette.primary.main,
      paddingBottom: '1rem',

      [theme.breakpoints.down('md')]: {
        width: '15rem',
        textAlign: 'center',
      },
    },
  }
}