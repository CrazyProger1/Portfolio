import emailjs from 'emailjs-com';
import {EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE, EMAILJS_TEMPLATE_ID} from '../config/email';


export const initEmailService = () => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

export const sendEmail = async (message) => {
    return emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE_ID,
        {message: message,}
    )
}
