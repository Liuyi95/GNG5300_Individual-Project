
const {UserList, PictureList}=require('../FakeData');
const _=require("lodash")

const resolvers={
    Query:{
        //USER
        users: async(_, _args, { dataSources: { users } }) => {
            return users.getUsers();
        },
        user:async (_, { email }, { dataSources: { users } })=>{
            // const id=args.id;
            // const user=_.find(UserList, {id: Number(id)});
            return users.getUser(email);
        },

        //PICTURE
        pictures: async(_, _args, { dataSources: { pictures } }) => {
            return pictures.getPictures();
        },
        picture:async (_, { name }, { dataSources: { pictures } })=>{
            // const id=args.id;
            // const user=_.find(UserList, {id: Number(id)});
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
            console.log(args)
            return users.createUser(args)
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