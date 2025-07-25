import { useTheme } from "@mui/material"



export const useFormStyles = () => {
  const theme = useTheme();

  return {
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    formStyle: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      width: '50%',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        width: '83.3333%',
      },
    },
    input: {
      border: 'none',
      outline: 'none',
      width: '100%',
      color: 'black',
      borderRadius: '0.125rem',
      fontFamily: 'Raleway, sans-serif',
      '& .MuiInputBase-input': {
        color: theme.palette.text.primary,
      },
      '& .MuiInputBase-input::placeholder': {
        color: theme.palette.text.primary,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#ccc', // default
        },
        '&:hover fieldset': {
          borderColor: '#2196f3', // on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: '#1976d2', // when focused
        },
      },
      '& .MuiInputBase-input': {
        color: theme.palette.text.primary,
      },
    },
    button: {
      outline: 'none',
      border: `1px solid ${theme.palette.custom?.active || '#yourActiveColor'}`,
      fontWeight: 'bold',
      fontFamily: 'Raleway, sans-serif',
      marginLeft: '1rem',
      padding: '0.5rem 3rem',
      borderRadius: '0.125rem',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      transition: 'all 300ms ease',

      '&:hover': {
        color: '#ffffff',
      },
    },
  }
}