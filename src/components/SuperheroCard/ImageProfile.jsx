import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSuperheroCardStyles } from './useSuperheroCardStyles'


const ImageProfile = ({ imageSrc, names, logo, alignment }) => {
  const styles = useSuperheroCardStyles();
  return (
    <div>
      <Box >
        <Box sx={styles.imageContainer}>
          <Box sx={styles.alignmentContainer}>
            <Typography>{alignment}</Typography>
          </Box>
          <Image
            width={220}
            height={300}
            src={imageSrc}
            alt={names[0]?.value || 'Superhero Image'}
          />

          <Box sx={styles.logoContainer}>
            <Image src={logo.logo} alt={logo.name} fill style={styles.logoImg} />
          </Box>
        </Box>
        {names.map((name, index) => {
          return (
            <>
              <Typography sx={styles.detailLabel} variant='body2' >
                {name.label}
              </Typography>
              <Typography sx={styles.detailValue} variant='body2'>
                {name.value}
              </Typography>
            </>
          )
        })}
      </Box>
    </div >
  )
}

export default ImageProfile
