const{gql}=require("apollo-server");

const typeDefs = gql`
    type User{
        id:ID!
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
        user(id: ID!):User!
        pictures:[Picture!]!
        picture(name: String!): Picture!
    }

`;

module.exports = {typeDefs }