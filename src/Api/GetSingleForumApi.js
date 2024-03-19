import axios from "axios";
import Url from "../util/Url";
function GetSingleForumApi(id) {
    try {
        let URL = Url.BaseUrl + `/GetSingleForum/${id}`;
        return axios
            .get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    charset: "utf-8",
                },
            })
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}

export default GetSingleForumApi;
