import React from 'react';
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

const Auth = function() {
    const [values, setValues] = React.useState({
        password: '',
        confirmedPassword: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
/*
    const [showForAuth, setShowForAuth] = React.useState(true)
    const [showForReg, setShowForReg] = React.useState(false)
    const showReg = () => {
        setShowForReg(true);
        setShowForAuth(false);
    }
    const hideReg = () => {
        setShowForReg(false);
        setShowForAuth(true);
    }*/

    const ForAuth = function () {
        return (
            <div />
        )
    }

    const ForReg = function () {
        return (
            <div />
        );
    }

    return (
        <div>
            <div>
                <TextField id="email" label="E-mail" type="email" />
            </div>
            <div>
                <FormControl>
                    <InputLabel htmlFor="password">Пароль</InputLabel>
                    <Input
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div>
                <div className='forAuth'>
                    <Button id="login" variant="outlined">Войти</Button>
                </div>
                <div className='forAuth'>
                    <a id="toRegister" >Зарегистрироваться</a>
                </div>
            </div>
            <div>
                <div className='forReg'>
                    <FormControl>
                        <InputLabel htmlFor="confirmPassword">Повторите пароль</InputLabel>
                        <Input
                            id="confirmPassword"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.confirmedPassword}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div className='forReg'>
                    <Button id="register" variant="outlined">Зарегистрироваться</Button>
                </div>
                <div className='forReg'>
                    <a id="toAuth" >Зарегистрироваться</a>
                </div>
            </div>
        </div>
    );
}

Auth.propTypes = {};

Auth.defaultProps = {};

export default Auth;
