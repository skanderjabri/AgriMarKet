import axios from "axios";
import Url from "../util/Url";
function LoginApi(email, password) {
    try {
        let URL = Url.BaseUrl + "/LoginUser";

        var data = JSON.stringify({
            email: email,
            password: password,
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

export default LoginApi;
