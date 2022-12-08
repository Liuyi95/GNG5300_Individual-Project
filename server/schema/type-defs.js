const{gql}=require("apollo-server");

const typeDefs = gql`
    type User{
        id:ID
        name: String!
        email:String!
        password: String!
        favoritePicture:[Picture]
         
    }

    type Picture{
        id: ID!  
        name: String!
        url: String!

    }
    type Query{
        users: [User!]!
        user(email: String!):User!
        pictures:[Picture!]!
        picture(name: String!): Picture!
    }

    input CreateUserInput{
        id:ID
        name: String!
        email:String!
        password: String!
    }

    input CreatePictureInput{
        id:ID
        name:String!
        url:String!
    }

    input UpdateUsernameInput{
        id:ID!
        newUsername: String!
    }

    type Mutation{
        createUser(input: CreateUserInput!): User
        createPicture(input: CreatePictureInput!): Picture
        updateUsername(input:UpdateUsernameInput!):User
        deleteUser(id: ID!):User
    }

`;

module.exports = {typeDefs }