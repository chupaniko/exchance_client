import React from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import './components/Header/Header.js';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/NotFound/NotFound";

/*const user = {
    roles: ['user'],
    rights: ['can_view_projects']
};

const admin = {
    roles: ['user', 'admin'],
    rights: ['can_view_projects', 'can_view_users']
};*/

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path='/auth' element={<Auth/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
    /*render() {
        //const {history} = this.props;
        return (
            <div className="App">
                <Header/>

                <Switch>
                    <Route path='/auth'>
                        <Auth />
                    </Route>
                    <Route exact path='/'>
                        <Main />
                    </Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>

                <Footer/>
            </div>
        );
    }*/

/*const App = () => (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path='/auth' element={<Auth/>}/>
            {/!*<Route exact path='/'>
            <Main />*!/}
            {/!*{hasRole(user, ['admin']) && <Route path='/admin' element={<Admin/>}/>}*!/}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </div>
);

export default App();*/
