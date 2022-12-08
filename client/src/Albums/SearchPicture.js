import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation }from '@apollo/client';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from "@mui/material/TextField";
import Toolbar from '@mui/material/Toolbar';

const QUERY_ALL_PICTURES=gql`
    query Getpictures{
        pictures {
            id
            name
            url
        }
    }
`;

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
    const{data:pictureData}=useQuery(QUERY_ALL_PICTURES);
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
                    {fetchPicture({variables:{name: pictureSearched}})}}>Search</Button>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <div>
                    {pictureSearchedData && (
                    <div>
                        <h1>PictureName:{pictureSearchedData.picture.name}</h1>{" "}
                        <h1>PictureUrl:{pictureSearchedData.picture.url}</h1>{" "}
                    </div>)}
                    {pictureError && <h6> The picture not exist</h6>}
                </div>
            </Toolbar>
        </div>
    )  
    
}
export default SearchPicture