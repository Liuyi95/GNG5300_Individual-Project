import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './post.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/Liuyi95/GNG5300_Individual-Project.git">
        Liuyi Chen Assignment
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

const mainFeaturedPost = {
  title: 'Visual Canada',
  description:
    "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Visual arts',
    date: 'Dec 12',
    description:
      'Art in Canada is marked by thousands of years of habitation by its indigenous peoples.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Canada Senery',
    date: 'Dec 11',
    description:
      'North America is filled with wondrous places to visit.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const posts = [post1,post2];

const sidebar = {
  title: 'About',
  description:
    'This is the Individual Assignment in GNG5300 Full Stack and Cloud Development My name is Liuyi Chen /Student Number:300232056. Welcome to my Visual Canada',

    social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Visual Canada" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="GNG5300 Assignment" />




            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              // archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          
          <Copyright sx={{ mt: 5 }} />
        </main>
      </Container>
    </ThemeProvider>
  );
}