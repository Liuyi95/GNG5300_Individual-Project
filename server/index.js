const { ApolloServer } = require ("apollo-server");
const{typeDefs}=require('./schema/type-defs');
const {resolvers} = require("./schema/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });
const { MongoClient } = require("mongodb");

const MONGODB = "mongodb+srv://Liuyi:950601@apolloserversetup.ie88wcb.mongodb.net/?retryWrites=true&w=majority";
const mongoose =require('mongoose');

const client = new MongoClient(MONGODB);
server.listen().then(({ url }) => {
    // async function run(){
    //     try{
    //         const database = client.db('PictureUploadSystem');
    //         const users = database.collection('users');
    //         // Query for a movie that has the title 'Back to the Future'
    //         const query = { name: 'Liuyi' };
    //         const user = await users.findOne(query);
    //         console.log(user)
    //     }finally{
    //         await client.close();
    //     }
    // }
    // run().catch(console.dir)
    
    mongoose.connect(MONGODB, {useNewUrlParser:true})
    .then(()=>{
        console.log("MongoDB Connected");
    })
    // .then ((res)=>{
    //     console.log(res)
    //     console.log(`Server running at ${res.url}`)
    // })
    .catch(err=>{
        console.log(err)
    });
    console.log(`YOU API IS RUNNING AT: ${url}`);
});

