

export const useHeadingStyles = () => {
  return {
    heading: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 'bold',
      fontSize: { xs: '2rem', md: '3.75rem' },
      color: 'primary.main',
      textAlign: 'center',
    },
    spanText: {
      color: '#ffffff',
    },
    subheading: {
      mt: 2,
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: 'text.secondary',
      fontSize: { xs: '1rem', md: '1.5rem' },
      px: { xs: 2, md: 0 },
      textAlign: 'center',
    },
  }
}