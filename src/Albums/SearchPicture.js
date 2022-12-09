import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, }from '@apollo/client';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconCheckboxes from './Heart'
// const QUERY_ALL_PICTURES=gql`
//     query Getpictures{
//         pictures {
//             id
//             name
//             url
//         }
//     }
// `;

const GET_PICTURE_BY_NAME =gql`
    query Picture($name: String!){
        picture (name:$name){
            name
            url
        }
    }
`;


function SearchPicture(){

    const[pictureSearched, setPictureSearched]= useState ("");
    const{data:pictureData}=useQuery(GET_PICTURE_BY_NAME);
    const[
        fetchPicture,{data:pictureSearchedData, error:pictureError}]=useLazyQuery(GET_PICTURE_BY_NAME);
    if (pictureSearchedData){
        console.log(pictureSearchedData);
    }
    if (pictureError){
        console.log(pictureError);
    }
    return(
        <div>
            {pictureData&&
                pictureData.pictures.map((picture)=>{
                    return (
                        <div>
                            <h1> id:{picture.id}</h1>
                            <h1>Name: {picture.name}</h1>  
                            <h1>URL:{picture.url}</h1>
                        </div>
                    )
                })
            }
             <Toolbar >
                <TextField className="text" placeholder="Picture.."
                onInput={(event)=> {setPictureSearched(event.target.value);}}
                variant="outlined"
                size="small"
                fullWidth="true"
                
                />
                <Button  variant="contained" size="small" onClick={()=>
                    {fetchPicture({variables:{name: pictureSearched}})}} >Search</Button>
                <IconButton>
                    <SearchIcon/>
                </IconButton>

                <Container maxWidth="md" >
                    {pictureSearchedData && (
                    <div>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardMedia
                                component="img"
                                alt={pictureSearchedData.picture.name}
                                height="300"
                                image={pictureSearchedData.picture.url}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {/* pictureSearchedData.picture.name */}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"><IconCheckboxes/></Button>
                            </CardActions>
                            </Card>

                        {/* <h1>PictureName:{pictureSearchedData.picture.name}</h1>{" "}
                        <h1>PictureUrl:{pictureSearchedData.picture.url}</h1>{" "} */}
                    </div>)}
                    {pictureError && <h6> The picture not exist</h6>}
                
                </Container>
            </Toolbar>
        </div>
    )  
    
}
export default SearchPicture