import axios from "axios";
import Url from "../util/Url";
function SaveProducteurApi(
    email,
    password,
    nom_producteur,
    prenom_producteur,
    telephone,
    adresse,
    nom_exploitation_agricole,
    type_de_culture,
    emplacement_de_exploitation,
    superficie_terres_agricoles,
    modes_production,
    certifications,
    description_exploitation,
    images
) {
    try {
        let URL = Url.BaseUrl + "/SignUpProducteur";
        const formData = new FormData();
        images.forEach((image) => {
            formData.append('photos_exploitation', image.file);
        });
        formData.append("email", email);
        formData.append("password", password);
        formData.append("nom_producteur", nom_producteur);
        formData.append("prenom_producteur", prenom_producteur);
        formData.append("telephone", telephone);
        formData.append("adresse", adresse);
        formData.append("nom_exploitation_agricole", nom_exploitation_agricole);
        formData.append("type_de_culture", type_de_culture);
        formData.append("emplacement_de_exploitation", emplacement_de_exploitation);
        formData.append("superficie_terres_agricoles", superficie_terres_agricoles);
        formData.append("modes_production", modes_production);
        formData.append("certifications", certifications);
        formData.append("description_exploitation", description_exploitation);
        return axios
            .post(URL, formData)
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}

export default SaveProducteurApi;
