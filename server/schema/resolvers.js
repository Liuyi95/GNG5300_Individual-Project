
const _=require("lodash")

const resolvers={
    Query:{
        //USER
        users: async(_, _args, { dataSources: { users } }) => {
            return users.getUsers();
        },
        user:async (_, { email }, { dataSources: { users } })=>{
            return users.getUser(email);
        },
        //PICTURE
        pictures:async(_, _args, { dataSources: { pictures } }) => {
            return pictures.getPictures();
        },
        picture:async (_, { name }, { dataSources: { pictures } })=>{
            return pictures.getPicture(name);
        },
    },
    User:{
        // favoritePicture: (parent) =>{
        //     console.log(parent);
        //     return PictureList
        // },
    },
    Mutation:{
        createUser: async (_, args, { dataSources: { users } }) => {
            return users.createUser(args)
        },
        createPicture: async (_, args, { dataSources: { pictures } }) => {
            return pictures.createPicture(args)
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