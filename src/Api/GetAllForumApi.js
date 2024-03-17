import axios from "axios";
import Url from "../util/Url";
function GetAllForumApi(limit, page) {
    try {
        let URL = Url.BaseUrl + `/GetAllForum?page=${page}&limit=${limit}`;
        return axios
            .get(URL)
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}

export default GetAllForumApi;
