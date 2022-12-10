import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { useQuery, useLazyQuery, gql }from '@apollo/client';

const QUERY_ALL_PICTURES=gql`
    query Getpictures{
        pictures {
            _id
            name
            url
        }
    }
`;

const GET_USER_BY_EMAIL=gql`
query getUser($email: String!){
    user(email: $email) {
      _id
      name
      email
      password
      favoritePicture
    }
  }
`;

export default function FavoritePictures(props) {
  const{data:pictureData}=useQuery(QUERY_ALL_PICTURES);
  const [cards, setCards]=useState('');
  const[fetchUser,{data:userSearchData, error:userError}]=useLazyQuery(GET_USER_BY_EMAIL)

  React.useEffect(() => {
    fetchUser({variables:{email: props.user?.email}})
    const allPictures=pictureData?.pictures
    const userLikedPictures=userSearchData?.user?.favoritePicture
    let favoritePictureObjArr=[]
    if(allPictures&&userLikedPictures){
        favoritePictureObjArr=allPictures.filter((item)=>{
            return userLikedPictures.indexOf(item._id)>=0
        })
    }
    favoritePictureObjArr&&setCards(favoritePictureObjArr)
  }, [pictureData, userSearchData])

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
        {cards&&cards.map((card) => (
            <Grid item key={card.name} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                component="img"
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
            </Card>
            </Grid>
        ))}
        </Grid>
    </Container>
  );
}