import React from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import { useSuperheroCardStyles } from './useSuperheroCardStyles'

const SuperheroDetailRow = ({ label, value }) => {
  const styles = useSuperheroCardStyles();
  return (
    <Box sx={styles.characterDetailRow}>
      <Typography sx={styles.detailLabel} variant='body2'>{label}</Typography>
      <LinearProgress variant="determinate" value={value ?? 0} sx={styles.progress} />
      <Typography sx={styles.detailValue} variant='body2'>{value ?? 'N/A'}</Typography>
    </Box>
  )
}

export default SuperheroDetailRow
