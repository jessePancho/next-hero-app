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
    imageContainer: {
      position: 'relative'
    },
    alignmentContainer: {
      position: 'absolute',
      backgroundColor: 'yellow',
      color: 'black',
      padding: '0.25rem'
    },
    logoContainer: {
      position: 'absolute',
      bottom: 8,
      right: 8,
      width: 50,
      height: 50
    },
    logoImg: {
      objectFit: 'contain'
    },
    characterDetails: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
      marginTop: '0.5rem',
      width: '60%',
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
      justifyContent: 'start',
      // marginLeft: '2rem',
      width: '85%',
    },
    characterDetailRow: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
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
    },
    progress: {
      background: 'gray',
      flexGrow: 1, mx: 2,
      '& .MuiLinearProgress-bar1': {
        background: 'red'
      }
    }
  }
}