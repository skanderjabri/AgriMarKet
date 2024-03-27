import axios from "axios";
import Url from "../util/Url";
function CreateContactApi(nom, email, sujet, contenu) {
    try {
        let URL = Url.BaseUrl + "/CreateContact";
        var data = JSON.stringify({
            nom,
            email,
            sujet,
            contenu
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
export default CreateContactApi;
