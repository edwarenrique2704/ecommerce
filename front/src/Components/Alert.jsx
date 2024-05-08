import Sweet from 'sweetalert2'


export default function AlertS ({icon, title}) {

    Sweet.fire({
        icon: icon,
        title: title,
    })

}