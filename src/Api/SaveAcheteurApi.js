import axios from "axios";
import Url from "../util/Url";
function SaveAcheteurApi(
    email,
    password,
    nom_representant_entreprise,
    prenom_representant_entreprise,
    telephone_representant_entreprise,
    adresse_representant_entreprise,
    service_representant_entreprise,
    fonction_representant_entreprise,
    nom_entreprise,
    activite_entreprise,
    code_postale_entreprise,
    adresse_entreprise,
    ville_entreprise,
    Description_entreprise,
    email_entreprise,
    telephone_entreprise,
    logo_entreprise,
    image_user
) {
    try {
        let URL = Url.BaseUrl + "/SignUpAcheteur";
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("nom_representant_entreprise", nom_representant_entreprise);
        formData.append("prenom_representant_entreprise", prenom_representant_entreprise);
        formData.append("telephone_representant_entreprise", telephone_representant_entreprise);

        formData.append("adresse_representant_entreprise", adresse_representant_entreprise);
        formData.append("service_representant_entreprise", service_representant_entreprise);
        formData.append("fonction_representant_entreprise", fonction_representant_entreprise);
        formData.append("nom_entreprise", nom_entreprise);
        formData.append("activite_entreprise", activite_entreprise);
        formData.append("code_postale_entreprise", code_postale_entreprise);
        formData.append("adresse_entreprise", adresse_entreprise);
        formData.append("ville_entreprise", ville_entreprise);
        formData.append("Description_entreprise", Description_entreprise);
        formData.append("email_entreprise", email_entreprise);
        formData.append("telephone_entreprise", telephone_entreprise);
        formData.append("logo_entreprise", logo_entreprise);
        formData.append("image_user", image_user);

        return axios
            .post(URL, formData)
            .then((response) => {
                return response;
            });
    } catch (error) {
        throw new Error(error);
    }
}

export default SaveAcheteurApi;
