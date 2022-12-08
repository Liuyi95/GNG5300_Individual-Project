import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Pictures extends MongoDataSource {
  async getPictures() {
    return await this.model.find();
  }

  async getPicture(name) {
    return await this.model.findOne({"name":name});
  }

  async createPicture({ input }) {
    return await this.model.create({ name:input.name, url:input.url });
  }
}
