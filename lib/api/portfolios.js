import axios from "axios";
import BaseApi from "./base";

class ProtfoliosApi extends BaseApi {

  constructor(accessToken){
    super(accessToken, "/portfolios");
  }

}

export default ProtfoliosApi;
