import React from 'react';
import {FormControl, Input, InputAdornment, InputLabel} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {Link} from "react-router-dom";


const Header = () => (
    <header className="App-header">
        <Link to='/'>
          <span className="clickable">
            <img className="logo App-logo" src="/img/exchance_logo.png" alt="Exchance Logo" />
            <span>Exchance</span>
          </span>
        </Link>
        <div className="spacer"></div>
        <FormControl>
            <InputLabel htmlFor="top-search">Поиск</InputLabel>
            <Input
                id="top-search"
                type='text'
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </FormControl>
        <div className="spacer"></div>
        <Link to='/auth'>
            <ExitToAppIcon className="clickable logout" routerLink="auth">login</ExitToAppIcon>
        </Link>
    </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
