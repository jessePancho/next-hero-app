import { Box, Typography } from "@mui/material";
import React from "react";
import { useHeadingStyles } from "./useHeadingStyles";


export function Heading() {
  const styles = useHeadingStyles();
  return (
    <>
      <Typography variant="h2" component="h2" sx={styles.heading}>
        <Box component="span" sx={styles.spanText}>
          Superhero
        </Box>{' '}
        App
      </Typography>

      <Typography variant="h5" component="h3" sx={styles.subheading}>
        Search for your favorite superhero
      </Typography>
    </>
  );
}