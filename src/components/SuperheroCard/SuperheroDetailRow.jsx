import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSuperheroCardStyles } from './useSuperheroCardStyles'

const SuperheroDetailRow = ({ label, value }) => {
  const styles = useSuperheroCardStyles();
  return (
    <Box sx={styles.characterDetailRow}>
      <Typography sx={styles.detailLabel} variant='body2'>{label}</Typography>
      <Typography sx={styles.detailValue} variant='body2'>{value}</Typography>
    </Box>
  )
}

export default SuperheroDetailRow
