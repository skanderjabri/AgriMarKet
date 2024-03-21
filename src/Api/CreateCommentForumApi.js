import axios from "axios";
import Url from "../util/Url";
function CreateCommentForumApi(comment_forum, userId, forumId) {
    try {
        let URL = Url.BaseUrl + "/CreateForumComment";
        var data = JSON.stringify({
            comment_forum: comment_forum,
            userId: userId,
            forumId: forumId
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
export default CreateCommentForumApi;
