import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './AlbumsHeader';
import SearchPicture from './SearchPicture';
import IconCheckboxes from './Heart'
// import { useNavigate } from 'react-router-dom';

import { useQuery, gql, }from '@apollo/client';

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
  // const [ setUser] = useState()
  const{data:pictureData}=useQuery(QUERY_ALL_PICTURES);
  const [cards, setCards]=useState('');
  // const navigate = useNavigate();

  React.useEffect(() => {
    console.log(pictureData)
    console.log(pictureData?.pictures)
    pictureData&&setCards(pictureData.pictures)
  }, [pictureData])

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      // setUser(foundUser)
    }
    if(!loggedInUser){
      // navigate('/')
    }
  }, []);
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
        {/* <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        </Box> */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards&&cards.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    // sx={{
                    //   pt: '56.25%',
                    // }}
                    image={card.url}
                    alt={card.name}
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
                    <Button size="small"><IconCheckboxes/> </Button>
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