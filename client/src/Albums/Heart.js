import React, { useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useQuery, useLazyQuery, gql, useMutation }from '@apollo/client';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UPDATE_USER_PICTURE_MUTATION = gql`
  mutation UpdatePicture($input: UpdateUserPictureInput!){updateUserPicture(input: $input) {
    _id
    favoritePicture
  }}
`

export default function IconCheckboxes(props) {
  const [checked, setChecked] = React.useState(false);
  const [updatePicture]= useMutation(UPDATE_USER_PICTURE_MUTATION);

  const handleChange = (event) => {
    setChecked(event.target.checked)
  };

  React.useEffect(() => {
    if(checked){
      updatePicture({variables :{input:{userId: props.user._id, pictureId: props.pictureId}}})
      
    }
  }, [checked])
  
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder color='secondary'/>} checkedIcon={<Favorite color='warning'/>} onChange={handleChange} checked={checked} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon color='secondary'/>}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}