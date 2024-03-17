import Swal from 'sweetalert2';
const AlertSweet = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });

}

export default AlertSweet;