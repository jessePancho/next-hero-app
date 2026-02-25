
import React from 'react'
import { Box, Typography } from '@mui/material'
import SuperheroDetailRow from './SuperheroDetailRow'
import { useSuperheroCardStyles } from './useSuperheroCardStyles'
import { LOGOS, MESSAGES } from '@/shared/constants'
import ImageProfile from './ImageProfile'

const SuperheroCard = ({ superheroInfo }) => {
  const styles = useSuperheroCardStyles();
  const { images, name, biography, powerstats } = superheroInfo || {};

  const names = [
    { label: 'Superhero Name', value: name || 'unknown' },
    { label: 'Real Name', value: biography?.fullName || 'unknown' },
  ]
  console.log('SuperheroCard component loaded', superheroInfo); // --- IGNORE ---
  const stats = [
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

  const alignment = biography?.alignment === 'bad' ? 'Super-Villains' : biography?.alignment === 'neutral' ? 'Neutral' : 'Super-Heroes';
  const publisher = biography?.publisher === "DC Comics" ? LOGOS.dc : LOGOS.marvel;
  console.log(superheroInfo)
  return (
    <Box sx={styles.characterDetails}>
      <Box sx={{ position: 'relative', border: '2px dotted red' }}>
        <ImageProfile alignment={alignment} logo={publisher} imageSrc={images.lg} names={names} />
        <Box>

        </Box>
      </Box>
      <Box sx={{ ...styles.profileStyles, border: '1px solid green' }}>
        {stats.map((stat) => {
          return (
            <SuperheroDetailRow key={stat.label} label={stat.label} value={stat.value} />
          )
        })}
        <Box sx={styles.characterDetailRow}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Hello Hero</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SuperheroCard
