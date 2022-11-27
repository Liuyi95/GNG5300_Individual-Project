
const {UserList, PictureList}=require('../FakeData');
const _=require("lodash")

const resolvers={
    Query:{
        //USER
        users: async(_, _args, { dataSources: { users } }) => {
            return users.getUsers();
        },
        user:async (_, { id }, { dataSources: { users } })=>{
            // const id=args.id;
            // const user=_.find(UserList, {id: Number(id)});
            return users.getUser(id);
        },
        //PICTURE
        // pictures:()=>{
        //     return PictureList;
        // },
        // picture:(parent, args)=>{
        //     const name=args.name;
        //     const picture=_.find(PictureList, {name});
        //     return picture; 
        // },
    },
    User:{
        // favoritePicture: (parent) =>{
        //     console.log(parent);
        //     return PictureList
        // },
    },
    Mutation:{
        createUser: async (_, args, { dataSources: { users } }) => {
            return users.createMovie(args)
          },
        // createUser:(parent, args) => {
        //     const user =args.input;
        //     // console.log(user);
        //     const lastId = UserList[UserList.length-1].id;
        //     user.id=lastId+1;
        //     UserList.push(user);
        //     return user;

        //     // const res = await createUser.save();
        // },

        // updateUsername:(parent, args) => {
        //     const {id, newUsername}=args.input;
        //     let userUpdate;
        //     UserList.forEach((user)=>{
        //         if (user.id === Number(id)){
        //             user.name = newUsername;
        //             userUpdate = user;
        //         }
        //     }
        //     );
        //     return userUpdate;
        // },

        // deleteUser: (parent, args) => {
        //     const id=args.id;
        //     _.remove(UserList,(user) => user.id === Number(id));
        //     return null;
        // },
    }
}

module.exports={resolvers}