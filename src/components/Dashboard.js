import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./out.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Strava from "./Strava";
import Header from "./Header";

function Dashboard() {
    //dashboard
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [display, setDisplay] = useState("")
    const [backgroundColor, setBackgroundColor] = useState("")
    const [border, setBorder] = useState("")
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplay(prevState => "none")
        },3000)
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBackgroundColor(prevState => "hsla(89, 43%, 51%, 0)");
        },3000)
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBorder(prevState => "0px solid");
        },3000)
    });

    return (
        <>
        {/*<Header/>*/}
        <div className="app_container">
            <Strava/>
            <div className="dashboard">
                <div className="dashboard_container" style={{backgroundColor: backgroundColor, border: border}}>
                    <span  style={{display: display}}>Zalogowano jako</span>
                 <div  style={{display: display}}>{name}</div>
                 <div  style={{display: display}}>{user?.email}</div>
                    {/*<button className="dashboard_btn" onClick={logout}>*/}
                    {/*    Wyloguj*/}
                    {/*</button>*/}
             </div>
            </div>
        </div>
        </>
    );
}
export default Dashboard;