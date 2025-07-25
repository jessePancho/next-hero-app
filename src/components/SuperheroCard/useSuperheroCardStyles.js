import { useTheme } from "@mui/material"


export const useSuperheroCardStyles = () => {
  const theme = useTheme();

  const sharedStyles = {
    textTransform: 'uppercase',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  }

  return {
    characterDetails: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
      marginTop: '3rem',
      width: '50%',
      height: '80%',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        width: '66.666667%',
        height: '100%',
        marginBottom: '3rem',
      }
    },
    profileStyles: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: '2rem',
      width: '50%',
    },
    characterDetailRow: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',

      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    detailLabel: {
      color: theme.palette.primary.main || 'blue',
      ...sharedStyles
    },
    detailValue: {
      color: theme.palette.text.primary || 'blue',
      ...sharedStyles
    }
  }
}