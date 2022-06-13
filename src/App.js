import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import Oauth from "./components/Oauth";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    {/*<Route exact path="/authorization" element={<Oauth />}/>*/}
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/reset" element={<Reset />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;