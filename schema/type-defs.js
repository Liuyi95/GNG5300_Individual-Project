const{gql}=require("apollo-server");

const typeDefs = gql`
    type User{
        id:String!
        name: String!
        age:Int!
        heigth:Float!

    }
    type Query{
        users: User
`