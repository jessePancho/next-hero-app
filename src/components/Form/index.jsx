import { useState } from 'react'
import SuperheroCard from '../SuperheroCard';
import { useFormStyles } from './useFormStyles';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHero } from '@/redux/slices/heroSlice';
import { MESSAGES } from '@/shared/constants'


const SuperHeroForm = () => {
  const [name, setName] = useState('');
  const styles = useFormStyles();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.hero);


  const handleSearch = async (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(fetchHero(name))
    }
  };

  return (
    <>
      <Box sx={styles.formContainer}>
        <Box component="form" sx={styles.formStyle}>
          <TextField
            autoFocus={true}
            type='text'
            sx={styles.input}
            placeholder={MESSAGES.SEARCH_PLACEHOLDER}
            aria-label='Search for superhero'
            onChange={e => setName(e.target.value)}
          />
          <Button
            sx={styles.button}
            onClick={handleSearch}
            aria-label='Search button'
          >
            {MESSAGES.SEARCH_BUTTON}
          </Button>
        </Box>
      </Box>
      {loading && <CircularProgress />}
      {error && <Typography>{error}</Typography>}
      {data && <SuperheroCard superheroInfo={data} />}
    </>
  )
}

export default SuperHeroForm
