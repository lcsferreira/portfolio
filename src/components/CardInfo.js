import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function CardInfo({ textInfo, illustra }) {
  return (
    <Card sx={{ maxWidth: 640 }}>
      <CardMedia
        className="grayscale"
        component="img"
        height="180"
        image={illustra}
        alt="Ilustração Card"
      />
      <CardContent>
        <Typography className="text" variant="p" component="p">
          {textInfo}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardInfo;