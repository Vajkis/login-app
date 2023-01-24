import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <h1>Login</h1>

            <form>
                <input type='email' />
                <input type='password' />

                <input type='' />

                <button>Sing in</button>

            </form>
            <article>
                <h2>Create account</h2>
                <Link to='/registration'>Sing up</Link>
            </article>


        </>
    );
}

export default Login;