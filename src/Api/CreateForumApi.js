import axios from "axios";
import Url from "../util/Url";
function CreateForumApi(titre_forum, description_forum, userId, imageFile, categorieId) {
    try {
        let URL = Url.BaseUrl + "/CreateForum";
        const formData = new FormData();
        formData.append("titre_forum", titre_forum);
        formData.append("description_forum", description_forum);
        formData.append("userId", userId);
        formData.append("image_Cover", imageFile);
        formData.append("categorieId", categorieId);
        return axios
            .post(URL, formData)
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}
export default CreateForumApi;
