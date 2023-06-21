
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function ProductCard({product}) {
  const navigate = useNavigate();
  const truncate=(input, maxCharacters) => input.length > maxCharacters ? `${input.substring(0,maxCharacters)}...` :input;
    return (
      <Card sx={{ maxWidth: 450, height: 700, px: 1.5 }}>
      <CardMedia
        component="img"
        image={product.image}
        title="Green Iguana"
        sx={{ objectFit: 'contain', height: 340 }}
      />
  
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {truncate(product.title,50)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {truncate(product.description, 100)}
        </Typography>
      </CardContent>
      <CardActions>
        
       
    <Button  size="small" variant='solid' onClick={() => navigate(`/products/${product._id}`)}>Learn More</Button>
  
      </CardActions>
    </Card>
  );
}

