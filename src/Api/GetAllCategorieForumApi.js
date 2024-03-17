import axios from "axios";
import Url from "../util/Url";
function GetAllCategorieForumApi() {
    try {
        let URL = Url.BaseUrl + `/GetAllForumCategorie`;
        return axios
            .post(URL)
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}

export default GetAllCategorieForumApi;
