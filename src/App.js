import {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Router} from "react-router-dom"

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import './components/Header/Header.js';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path='/auth' element={<Auth/>}/>
                {/*<Route exact path='/'>
            <Main />*/}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
