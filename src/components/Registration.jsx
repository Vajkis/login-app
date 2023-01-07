import { useRef, useState } from "react";
import inputsValidation from "../functions/inputsValidations";
import Notifications from "./Notifications";

function Registration() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const [type, setType] = useState('password');
    const [isChecked, setIsCheched] = useState(false);

    const [notificationsList, setNotificationsList] = useState([]);

    const registration = e => {
        e.preventDefault();

        setNotificationsList([]);

        const name = inputsValidation(nameRef.current.value, 'name');
        const email = inputsValidation(emailRef.current.value, 'email');
        const pass = inputsValidation(passRef.current.value, 'pass');

        const isName = !name.error;
        const isEmail = !email.error;
        const isPass = !pass.error;

        if (isName && isEmail && isPass & isChecked) {

            nameRef.current.value = '';
            emailRef.current.value = '';
            passRef.current.value = '';

        } else {
            if (!isName) {
                setNotificationsList(n => [...n, name.notification]);
            }

            if (!isEmail) {
                setNotificationsList(n => [...n, email.notification]);
            }

            if (!isPass) {
                setNotificationsList(n => [...n, pass.notification]);
            }

            if (!isChecked) {
                setNotificationsList(n => [...n, 'must agree']);
            }
        }
    }

    const passwordVisibility = () => {
        setType(t => t === 'password' ? 'text' : 'password')
    }

    return (
        <>
            <h1>Registration</h1>

            {notificationsList.length ? <Notifications notificationsList={notificationsList} /> : null}

            <form onSubmit={e => registration(e)}>
                <input type='text' ref={nameRef} />
                <input type='email' ref={emailRef} />
                <input type={type} ref={passRef} />
                <button type='button' onClick={passwordVisibility}>
                    {type === 'password' ? 'Show password' : 'Hide password'}
                </button>

                <label>
                    <span>Agree</span>
                    <input type='checkbox' checked={isChecked} onChange={e => setIsCheched(e.target.checked)} />
                </label>

                <button>Sing up</button>
            </form>

            <article>
                <h2>Have account?</h2>
                <button>Sing in</button>
            </article>
        </>
    );
}

export default Registration;