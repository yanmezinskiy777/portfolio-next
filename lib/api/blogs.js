import axios from "axios";
import BaseApi from "./base";

class BlogApi extends BaseApi {

  constructor(accessToken){
    super(accessToken, '/blogs')
  }

  async getByUser() {
    return await axios.get(`${this.api}/me`, this.config);
  }

}

export default BlogApi;
