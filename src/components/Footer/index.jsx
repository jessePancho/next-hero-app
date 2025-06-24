import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { useFooterStyles } from './useFooterStyles'

const Footer = () => {
  const styles = useFooterStyles();
  return (
    <Box sx={styles.footContainer}>
      <Typography sx={styles.footerText}>
        © 2025 Lorem Ipsum. Dolor sit amet,
        <Link
          href="https://github.com/RapidAPI/DevRel-Examples-External"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
        >
          <Box
            component="span"
            sx={{
              transition: 'color 300ms',
              '&:hover': {
                color: 'secondary.main',
              },
            }}
          >
            consectetur adipiscing elit.
          </Box>
        </Link>
      </Typography>
    </Box>
  )
}

export default Footer
