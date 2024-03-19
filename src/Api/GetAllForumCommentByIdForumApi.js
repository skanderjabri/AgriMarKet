
import axios from "axios";
import Url from "../util/Url";
function GetAllForumCommentByIdForum(id) {
    try {
        let URL = Url.BaseUrl + `/GetAllForumCommentByIdForum/${id}`;
        return axios
            .post(URL, {
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

export default GetAllForumCommentByIdForum;

