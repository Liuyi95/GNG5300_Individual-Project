import React from 'react';
import Button from '@material-ui/core/Button';
import { useQuery, useLazyQuery, gql, useMutation, throwServerError }from '@apollo/client';



const CREATE_PICTURE_MUTATION = gql`
mutation CreatePicture($input: CreatePictureInput!){createPicture(input: $input) {
    name
    url
  }}
`

const UploadButton = () => {
    const [createPicture]= useMutation(CREATE_PICTURE_MUTATION);
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded)
        createPicture({variables :{input:{name: fileUploaded.name, url:`/${fileUploaded.name}` }}})
};
return (
	<div style={{
	display: 'flex',
	margin: 'auto',
	width: 400,
	flexWrap: 'wrap',
	}}>
	<div style={{ width: '100%', float: 'left' }}>
		<h3>Please upload your picture to Visual Canada</h3> <br />
	</div>
	<input
		type="file"
		accept="image/*"
		style={{ display: 'none' }}
        onChange={handleChange}
		id="contained-button-file"
	/>
	<label htmlFor="contained-button-file">
		<Button variant="contained" color="primary" component="span">
		    Upload
		</Button>
	</label>
	</div>
);
}

export default UploadButton;
