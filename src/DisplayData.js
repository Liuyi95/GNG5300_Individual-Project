import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation }from '@apollo/client';

const QUERY_ALL_USERS=gql`
    query Getuser{
        users {
            id
            name
            email
            password
        }
    }
`;
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

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input:CreateUserInput!){
        createUser(input:$input){
        id
        name
        email
        password
        }
    
    }
`


function DisplayData(){
    const[pictureSearched, setPictureSearched]= useState ("");
    // const[id, setId]= useState ("");
    // create user states
    const[name, setName]= useState ("");
    // create email
    const[email, setEmail]= useState ("");
    //email password
    const[password, setPasword]= useState ("");


    const{data, loading , error, refetch }=useQuery(QUERY_ALL_USERS);
    const{data:pictureData}=useQuery(QUERY_ALL_PICTURES);
    const[
        fetchPicture,{data:pictureSearchedData, error:pictureError}]=useLazyQuery(GET_PICTURE_BY_NAME);
    
    const [createUser]= useMutation(CREATE_USER_MUTATION);
    
    if (loading){
        return <h1> Data is loding....</h1>
    }
    if (error){
        console.log(error);
    }

    if (data){
        console.log(data);
    }
    if (pictureSearchedData){
        console.log(pictureSearchedData);
    }
    if (pictureError){
        console.log(pictureError);
    }
    return(
        <div>
            <div>
                <input type ="text" placeholder="Name..." 
                onChange={(event)=> {setName(event.target.value);}}/>

                <input type ="text" placeholder="Email..."
                onChange={(event)=> {setEmail(event.target.value);}}/>

                <input type ="text" placeholder="Password..."
                onChange={(event)=> {setPasword(event.target.value);}}/>

                <button onClick={() => {createUser({variables :{input:{name, email, password}},});
                refetch();
                }}> Create User </button>
            </div>

            {data&&
                data.users.map((user)=>{
                    return( 
                        <div>
                            <h1> id:{user.id}</h1>
                            <h1>Name: {user.name}</h1>  
                            <h1>Email:{user.email}</h1>
                        </div>
                    );
                })
            }
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
            <div>
                <input type="text" placeholder="Picture.."
                onChange={(event)=> {setPictureSearched(event.target.value);}}/>
                <button onClick={()=>
                    {fetchPicture({variables:{name: pictureSearched}})}}>Fetch Data</button>
                <div>
                    {pictureSearchedData && (
                    <div>
                        <h1>PictureName:{pictureSearchedData.picture.name}</h1>{" "}
                        <h1>PictureUrl:{pictureSearchedData.picture.url}</h1>{" "}
                    </div>)}
                    {pictureError && <h1> The picture not exist</h1>}
                </div>
            </div>
        </div>
    )
        
    
}
export default DisplayData