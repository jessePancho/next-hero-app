
import React from 'react'
import { Box } from '@mui/material'
import SuperheroDetailRow from './SuperheroDetailRow'
import { useSuperheroCardStyles } from './useSuperheroCardStyles'
import Image from 'next/image'
import { MESSAGES } from '@/shared/constants'

const SuperheroCard = ({ superheroInfo }) => {
  const styles = useSuperheroCardStyles();
  const { images, name, biography, powerstats } = superheroInfo || {};

  const stats = [
    { label: 'Superhero Name', value: name },
    { label: 'Real Name', value: biography?.fullName || 'unknown' },
    { label: 'Durability', value: powerstats?.durability },
    { label: 'Intelligence', value: powerstats?.intelligence },
    { label: 'Strength', value: powerstats?.strength },
    { label: 'Speed', value: powerstats?.speed },
    { label: 'Power', value: powerstats?.power },
    { label: 'Combat', value: powerstats?.combat },
  ];

  if (!superheroInfo || !images || !images.lg) {
    return (
      <Box sx={{ color: 'red', mt: 4, fontWeight: 700 }}>
        {MESSAGES.SUPERHERO_NOT_FOUND}
      </Box>
    );
  }

  return (
    <Box sx={styles.characterDetails}>
      <Image width={220} height={300} src={images.lg} alt={name} />
      <Box sx={styles.profileStyles}>
        {stats.map((stat) => {
          return (
            <SuperheroDetailRow key={stat.label} label={stat.label} value={stat.value} />
          )
        })}
      </Box>
    </Box>
  )
}

export default SuperheroCard
