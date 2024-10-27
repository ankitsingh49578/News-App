import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import image from '../assets/news.webp';

export default function NewsItem({title, description, src, url}) {
  return (
    <Card sx={{ maxWidth:345, bgcolor: '#1d2126', color: 'white', padding: 1, maxHeight: 500}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={src? src: image}
          alt="img"
          style={{height: 200, width: 360, padding: 2}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontSize: 17}}>
            {title?title.slice(0, 80): "There should be a title but due to some internal issue it is not visible"}
          </Typography>
          <Typography variant="body2" sx={{ color: '#b6bec9', fontSize: 14}}>
            {description?description.slice(0, 200): "There should be a description but due to some internal issue it is not visible. Please click on read more..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={url} size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
