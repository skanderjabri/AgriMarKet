import axios from "axios";
import Url from "../util/Url";
function GetAllAcualiteApi(limit, page) {
    try {
        let URL = Url.BaseUrl + `/GetAllActualite?page=${page}&limit=${limit}`;
        return axios
            .post(URL)
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}

export default GetAllAcualiteApi;
