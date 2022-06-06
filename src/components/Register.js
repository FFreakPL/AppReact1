import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
} from "./firebase";
import "./Register.css";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div className="register">
            <div className="register__container">
                <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nick"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Adres E-mail"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                />
                <button className="register__btn" onClick={register}>
                    Zarejestruj się
                </button>
                <button
                    className="register__btn register__google"
                    onClick={signInWithGoogle}
                >
                    Zarejestruj z Google
                </button>
                <button
                    className="register__btn register__facebook"
                    onClick={signInWithFacebook}
                >
                    Zarejestruj z Facebook
                </button>
                <div>
                    Masz już konto? <Link to="/">Zaloguj się</Link> teraz.
                </div>
            </div>
        </div>
    );
}
export default Register;