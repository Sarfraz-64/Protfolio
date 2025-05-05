import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function ActionAreaCard({ image, title, description }) {
  return (
    <Card
      sx={{
        width: 345,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ height: 180, objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function ProjectGrid() {
  const projects = [
    {
      image: 'paint-logo.png',
      title: 'Paint 3D',
      description:
        "In our OOP course, we designed a fully functional Paint 3D clone of Microsoft's Paint using C++ with several libraries.",
    },
    {
        image: 'gomoku-logo.png',
        title: 'Gomoku',
        description: 'A two-player board game similar to tic-tac-toe, developed in C++.',
      },
    {
      image: 'ludo-logo.jpg',
      title: 'Ludo',
      description: 'In my DSA course, I developed complete Ludo game using the C++, and several built-in libraries for images and icons and it was an individual project.',
    },
   
  ];

  return (
    <Grid
    container
    spacing={3}
    justifyContent="center"
    sx={{ mt: 4 }}
  >
    {projects.map((project, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <ActionAreaCard
          image={project.image}
          title={project.title}
          description={project.description}
        />
      </Grid>
    ))}
  </Grid>
  );
}
