import { Heading } from '../components/Heading/Heading';
import { Box } from '@mui/material';
import { useHomeStyles } from '@/styles/useHomeStyles';
import SuperHeroForm from '@/components/Form';
import Footer from '@/components/Footer';

export default function Home() {
  const styles = useHomeStyles();

  return (
    <Box sx={styles.container}>
      <Heading />
      <SuperHeroForm />
      <Footer />
    </Box>
  );
}


