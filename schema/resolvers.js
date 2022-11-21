
const {UserList, PictureList}=require('../FakeData');
const _=require("lodash")

const resolvers={
    Query:{
        //USER
        users:() => {
            return UserList;
        },
        user:(parent, args)=>{
            const id=args.id;
            const user=_.find(UserList, {id: Number(id)});
            return user;
        },
        //PICTURE
        pictures:()=>{
            return PictureList;
        },
        picture:(parent, args)=>{
            const name=args.name;
            const picture=_.find(PictureList, {name});
            return picture; 
        },
    },
    User:{
        favoritePicture: () =>{
            return PictureList
        },
    },
    Mutation:{
        createUser:(parent, args) => {
            const user =args.input;
            console.log(user);
        }
    }
}

module.exports={resolvers}