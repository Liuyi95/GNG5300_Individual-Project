import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './AlbumsHeader';
import SearchPicture from './SearchPicture';
import { useQuery, useLazyQuery, gql, useMutation }from '@apollo/client';

const QUERY_ALL_PICTURES=gql`
    query Getpictures{
        pictures {
            name
            url
        }
    }
`;

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const cards1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sections = [
  { title: 'Pictures', url: '#' },
  { title: 'Video', url: '#' },
  { title: 'Music', url: '#' },
  { title: 'Front', url: '#' },
  { title: 'Intelligent service', url: '#' },
  { title: 'Commerical Use', url: '#' },
  { title: 'Public ', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];
const theme = createTheme();

export default function Albums() {
  const{data:pictureData}=useQuery(QUERY_ALL_PICTURES);
  const [cards, setCards]=useState('');

  React.useEffect(() => {
    console.log(pictureData)
    console.log(pictureData?.pictures)
    pictureData&&setCards(pictureData.pictures)
    console.log(cards)
  }, [pictureData])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Visual Canada" sections={sections} />
      </Container>

      <Container maxWidth="md" >

        <SearchPicture/> 
      </Container>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          {/* <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container> */}
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards&&cards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    //image="https://source.unsplash.com/random"
                    image={card.url}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
      <Copyright sx={{ mt: 5 }} />
    </ThemeProvider>
  );
}