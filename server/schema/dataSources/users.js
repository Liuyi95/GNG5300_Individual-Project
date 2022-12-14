import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Users extends MongoDataSource {
  async getUsers() {
    return await this.model.find();
  }

  async getUser(email) {
    return await this.model.findOne({"email":email});
  }

  async createUser({ input }) {
    return await this.model.create({ name:input.name, email:input.email, password:input.password });
  }

  async updateUserPicture({input}){
    const userId=input.userId
    const pictureId=input.pictureId
    return await this.model.updateOne({_id:userId},{
      $push:
        {"favoritePicture":pictureId}
    })
  }
  
}
