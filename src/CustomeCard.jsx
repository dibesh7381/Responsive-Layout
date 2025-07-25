// CustomCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const CustomCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 4,
        boxShadow: 5,
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
        alt="Tech image"
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Custom Tech Product
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          This is a sleek and powerful tech gadget that improves your workflow.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
