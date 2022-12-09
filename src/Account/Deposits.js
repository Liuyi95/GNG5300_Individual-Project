import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useQuery, useLazyQuery, gql, }from '@apollo/client';




const QUERY_ALL_USERS=gql`
    query Getuser{
        users {
            id
            name
            email
            password
            favoritePicture
            
        }
    }
`;

const GET_USER_BY_NAME=gql`
query getUser($email: String!){
    user(email: $email) {
      name
      email
      password
      favoritePicture
    }
  }
`;
export default function Deposits(props) {

    const[fetchUser,{data:userSearchData, error:userError}]=useLazyQuery(GET_USER_BY_NAME,{
        onCompleted: (data) => {
          // console.log(data)
          // console.log(userSearchData)
        }
      });
      console.log(props)

    const{data, loading , error, refetch }=useQuery(QUERY_ALL_USERS);
  return (
    
    <React.Fragment>
        <Typography component="p" variant="h4">
        User Profile
      </Typography>
      <Typography component="p" variant="h5">
        <div>Name: {props?.user?.name}</div>
        <div>Email: {props?.user?.email}</div>
        <div>FavoritePicture:{props?.user?.favoritePicture}</div>

      {/* {data&& data.users.map((user)=>{
                    return( 
                        <div>
                            <h6>Name: {user.name}</h6>  
                            <h6>Email:{user.email}</h6>
                        </div>
                    );
                })
            } */}
      </Typography>
      {/* <Typography color="text.secondary" sx={{ flex: 1 }}>
        Created on 11 December, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}