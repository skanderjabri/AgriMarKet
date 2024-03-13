const InsererSautLigne = (chaine) => {
    if (chaine.includes('.')) {
        return chaine.replace(/\./g, '.\n');
    } else {
        return chaine;
    }
};

export default InsererSautLigne;