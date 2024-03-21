import axios from "axios";
import Url from "../util/Url";
function LikeDislikeForumCommentApi(userId, CommentId) {
    try {
        let URL = Url.BaseUrl + "/LikeDislikeForumComment";
        var data = JSON.stringify({
            userId,
            CommentId
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
export default LikeDislikeForumCommentApi;
