import 'dotenv/config'
import {User as UserModel} from './schema/models/user';
import Users from './schema/dataSources/users';

import {Picture as PictureModel} from './schema/models/picture';
import Pictures from './schema/dataSources/pictures';

const { ApolloServer } = require ("apollo-server");
const{typeDefs}=require('./schema/type-defs');
const {resolvers} = require("./schema/resolvers");

const MONGODB = "mongodb+srv://Liuyi:950601@apolloserversetup.ie88wcb.mongodb.net/?retryWrites=true&w=majority";
const mongoose =require('mongoose');

const uri = process.env.MONGODB_URI

const main = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  };

  main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

  const dataSources = () => ({
    users: new Users(UserModel),
    pictures: new Pictures(PictureModel),
  });

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });

// const client = new MongoClient(MONGODB);
// server.listen().then(({ url }) => {
//     // async function run(){
//     //     try{
//     //         const database = client.db('PictureUploadSystem');
//     //         const users = database.collection('users');
//     //         // Query for a movie that has the title 'Back to the Future'
//     //         const query = { name: 'Liuyi' };
//     //         const user = await users.findOne(query);
//     //         console.log(user)
//     //     }finally{
//     //         await client.close();
//     //     }
//     // }
//     // run().catch(console.dir)
    
//     mongoose.connect(MONGODB, {useNewUrlParser:true})
//     .then(()=>{
//         console.log("MongoDB Connected");
//     })
//     // .then ((res)=>{
//     //     console.log(res)
//     //     console.log(`Server running at ${res.url}`)
//     // })
//     .catch(err=>{
//         console.log(err)
//     });
//     console.log(`YOU API IS RUNNING AT: ${url}`);
// });

