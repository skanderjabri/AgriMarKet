import axios from "axios";
import Url from "../util/Url";
function LikeDislikeForumApi(userId, ForumId) {
    try {
        let URL = Url.BaseUrl + "/LikeDislikeForum";
        var data = JSON.stringify({
            userId,
            ForumId
        });
        return axios
            .post(URL, data, {
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
export default LikeDislikeForumApi;
