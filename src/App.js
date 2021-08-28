import {Component} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import { Router } from "react-router-dom"

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import './components/Header/Header.js';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Auth from "./components/Auth/Auth";
import NotFound from "./components/NotFound/NotFound";

class App extends Component {
  render() {
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
  }
}

export default withRouter(App);
