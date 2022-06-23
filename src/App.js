import "./components/out.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import Oauth from "./components/Oauth";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/reset" element={<Reset />} />
                    {/*<Route path="/oauth" element={<Oauth />} />*/}
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/contact" element={<Contact />}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;