import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Translation from "./pages/Translation";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/translation" element={<Translation/>}/>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
