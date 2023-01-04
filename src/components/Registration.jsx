import { useRef, useState } from "react";

function Registration() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const [type, setType] = useState('password');
    const [isChecked, setIsCheched] = useState(false);

    // const [notification, setNotification] = useState('');

    const registration = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        console.log({ name, email, pass, isChecked });
    }

    return (
        <>
            {/* <div>{notification}</div> */}

            <h1>Registration</h1>
            <form onSubmit={e => registration(e)}>
                <input type='text' ref={nameRef} />
                <input type='email' ref={emailRef} />
                <input type={type} ref={passRef} />
                <button type='button' onClick={() => setType(t => t === 'password' ? 'text' : 'password')}>
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