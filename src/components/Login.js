import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, signInWithFacebook } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./out.css";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="login">
            <div className="login_logo"></div>
            <div className="login_container">
                <input
                    type="text"
                    className="login_textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adres E-mail"
                />
                <input
                    type="password"
                    className="login_textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                />
                <button
                    className="login_btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Zaloguj się
                </button>
                <button className="login_btn login_google" onClick={signInWithGoogle}>
                    <span className="button-icon">Zaloguj się z   <i className="fa-brands fa-google"></i></span>
                </button>
                {/*<button className="login__btn login__facebook" onClick={signInWithFacebook}>*/}
                {/*    <span className="button-icon">Zaloguj się z   <i className="fa-brands fa-facebook"></i></span>*/}
                {/*</button>*/}
                <div>
                    <Link to="/reset">Zapomniałem hasła</Link>
                </div>
                <div>
                    Nie masz konta? <Link to="/register">Zarejestruj się</Link> teraz.
                </div>
            </div>
        </div>
    );
}
export default Login;