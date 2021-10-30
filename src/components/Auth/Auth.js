import React from 'react';
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import axios from "axios";

const Auth = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
        email: "",
        confirmedPassword: "",
        showReg: false,
        postId: null
    });

    const handleClickShowReg = () => {
        setValues({...values, showReg: !values.showReg});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values.showReg);
        let json = null;
        if (values.email !== '' && values.password !== '') {
            if (values.showReg && values.password === values.confirmedPassword) {
                json = JSON.stringify({
                    firstName: 'Ivan',
                    lastName: 'Ivanov',
                    email: values.email,
                    password: values.password
                });

                    /*'{"firstName": "Ivan", "lastName": "Ivanov", "email": "'
                    + values.email
                    + '", "password": "'
                    + values.password
                    + '"}';*/
                axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
                axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
                axios.post('http://localhost:8080/api/v1/registration', json)
                    .then(response => setValues({...values, postId: response.data.id}));
            } else if (!values.showReg) {
                json = JSON.stringify({
                    email: values.email,
                    password: values.password
                });
                axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
                axios.post('http://localhost:8080/api/v1/registration', json)
                    .then(response => setValues({...values, postId: response.data.id}));
            }
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <FormControl>
                    <InputLabel htmlFor="email">E-mail</InputLabel>
                    <Input
                        id="email"
                        value={values.email}
                        onChange={handleChange('email')}/>
                </FormControl>
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
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className='forAuth'>
                <Button id="login" variant="outlined" type="submit">Войти</Button>
            </div>
            <div className='forAuth'>
                <a id="toRegister" onClick={handleClickShowReg}>Зарегистрироваться</a>
            </div>
            <div className='forReg'>
                <FormControl>
                    <InputLabel htmlFor="confirmedPassword">Повторите пароль</InputLabel>
                    <Input
                        id="confirmedPassword"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.confirmedPassword}
                        onChange={handleChange('confirmedPassword')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
            <div className='forReg'>
                <Button id="register" variant="outlined" type="submit">Зарегистрироваться</Button>
            </div>
            <div className='forReg'>
                <a id="toAuth" onClick={handleClickShowReg}>Войти</a>
            </div>
        </form>
    );
};

export default Auth;


/*const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.email = React.createRef();
        this.password = React.createRef();
        this.confirmedPassword = React.createRef();
        this.showReg = false;
    }

    handleSubmit(event) {
        if (showReg) {
            console.log(this.email);
            console.log(this.password);
            console.log(this.confirmedPassword);
        } else {
            console.log(this.email);
            console.log(this.password);
        }
    }


    const [values, setValues] = React   .useState({
                 password: '',
                 confirmedPassword: '',
                 showPassword: false,
             });

    const
    handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const
    handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };
    /!*
        const [showForAuth, setShowForAuth] = React.useState(true)
        const [showForReg, setShowForReg] = React.useState(false)
        const showReg = () => {
            setShowForReg(true);
            setShowForAuth(false);
        }
        const hideReg = () => {
            setShowForReg(false);
            setShowForAuth(true);
        }*!/

    /!*const
    ForAuth = function () {
        return (
            <div/>
        )
    }

    const
    ForReg = function () {
        return (
            <div/>
        );
    }*!/

    function

    formJson(e) {
        e.preventDefault();
        console.log('Отправлена форма');
    }


    /!* const formJson = function () {
         const firstName = "Коля"
         const lastName = "Саня"
         const login = this.props.email
         const password = this.props.password
     }*!/

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="email">E-mail</InputLabel>
                        <Input id="email"/>
                    </FormControl>
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
                                        {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <Button id="login" variant="outlined" onClick={formJson}>Войти</Button>
                </div>
                <div className='forAuth'>
                    <a id="toRegister">Зарегистрироваться</a>
                </div>
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
                                        {values.showPassword ? <Visibility/> : <VisibilityOff/>}
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
                    <a id="toAuth">Войти</a>
                </div>
            </form>
        );
    }
}
/!*
    Auth
.
    propTypes = {};

    Auth
.
    defaultProps = {};

    export
    default
    Auth;*!/*/

