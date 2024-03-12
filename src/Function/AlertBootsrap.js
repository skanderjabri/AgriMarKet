import { useState } from 'react';

const useAlert = () => {
    const [alertUser, setAlertUser] = useState({
        message: '',
        type: ''
    });

    const showAlert = (message, type) => {
        setAlertUser({
            message: message,
            type: type
        });
    };

    const clearAlert = () => {
        setAlertUser({
            message: '',
            type: ''
        });
    };

    return {
        alertUser,
        showAlert,
        clearAlert
    };
};

export default useAlert;
