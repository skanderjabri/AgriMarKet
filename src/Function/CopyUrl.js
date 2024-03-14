const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL)

        .catch((error) => {
            console.error('Erreur lors de la copie de l\'URL :', error);
        });
};

export default copyURL; 