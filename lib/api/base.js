import axios from "axios";

class BaseApi {

  constructor(accessToken, subPath){
    this.config = {};
    if(accessToken){
      this.config.headers = {"authorization": `Bearer ${accessToken}`}
    }
    this.api = process.env.API_URL_PATH + subPath;
  }

  async get() {
    return await axios.get(this.api);
  }
  async create(data) {
    return await axios.post(`${this.api}`, data, this.config);
  }
  async getById(id) {
    return await axios.get(`${this.api}/${id}`);
  }
  async update(id, data) {
    return await axios.patch(`${this.api}/${id}`, data, this.config);
  }
  async delete(id) {
    return await axios.delete(`${this.api}/${id}`, this.config);
  }
}

export default BaseApi;
