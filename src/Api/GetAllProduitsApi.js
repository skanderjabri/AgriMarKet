import axios from "axios";
import Url from "../util/Url";
function GetAllProduitsApi(limit, page) {
    try {
        let URL = Url.BaseUrl + `/GetAllProduits?page=${page}&limit=${limit}`;
        return axios
            .get(URL)
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}

export default GetAllProduitsApi;
