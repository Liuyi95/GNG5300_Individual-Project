const{gql}=require("apollo-server");

const typeDefs = gql`
    type User{
        _id:ID
        name: String!
        email:String!
        password: String!
        favoritePicture:[ID!]
         
    }

    type Picture{
        _id: ID!  
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
        _id:ID
        name: String!
        email:String!
        password: String!
    }

    input CreatePictureInput{
        _id:ID
        name:String!
        url:String!
    }

    input UpdateUsernameInput{
        _id:ID!
        newUsername: String!
    }

    input UpdateUserPictureInput{
        userId:ID!
        pictureId:ID!
    }

    type Mutation{
        createUser(input: CreateUserInput!): User
        updateUserPicture(input: UpdateUserPictureInput): User
        createPicture(input: CreatePictureInput!): Picture
        updateUsername(input:UpdateUsernameInput!):User
        deleteUser(_id: ID!):User
    }

`;

module.exports = {typeDefs }