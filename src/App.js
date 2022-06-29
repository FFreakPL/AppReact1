import "./components/out.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Oauth from "./components/Oauth";
import Contact from "./components/Contact";
import StravaTest from "./components/StravaTest";
import DashboardTest from "./components/DashboardTest";
import StravaRedirect from "./components/StravaRedirect";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/reset" element={<Reset />} />
                    <Route exact path="/oauth" element={<Oauth />} />
                    <Route exact path="/redirect" element={<StravaRedirect/>} />
                    <Route exact path="/dashboard" element={<DashboardTest />} />
                    <Route exact path="/strava" element={<StravaTest />}/>
                    <Route exact path="/contact" element={<Contact />}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;