import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Users extends MongoDataSource {
  async getUsers() {
    return await this.model.find();
  }

  async getUser(id) {
    return await this.findOneById(id);
  }

  async createUser({ name, email, password }) {
    return await this.model.create({ name, email, password });
  }
}
