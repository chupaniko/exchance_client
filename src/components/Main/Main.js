import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardActions, CardContent, FormControl, Input, InputLabel, Typography} from "@material-ui/core";
import axios from "axios";


const Main = () => {
    const [values, setValues] = React.useState({
        projectName: "",
        projectDescription: "",
        projectField: "",
        postId: ""
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    };

    function publishProject(json) {
        //работает без return
        /*axios.post('http://localhost:8080/api/v1/projectconstructor/publishproject', json, {headers})
            .then(response => {
                console.log("внутри");
                setValues({
                    ...values,
                    postId: response.data.id
                });
                console.log(response.data);
            });*/
        return axios.post('http://localhost:8080/api/v1/projectconstructor/publishproject', json, {headers});
    }

    function getLastProject(json) {
        return axios.post('http://localhost:8080/api/v1/projectconstructor/getLastProject', json, {headers});
            /*.then(response => {
                console.log(response.data);
            });*/
    }

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        let json = null;
        if (values.projectName !== '' && values.projectDescription !== '' && values.projectField !== '') {
            json = JSON.stringify({
                token: sessionStorage.getItem("userToken"),
                projectName: values.projectName,
                projectDescription: values.projectDescription,
                projectField: values.projectField
            });
            console.log(values.projectName, values.projectDescription, values.projectField);
            Promise.all([publishProject(json), getLastProject(json)]).then(r => {
                console.log(r[0].data);
                console.log(r[1].data);
            });
            //publishProject(json);
            //getLastProject(json);
            /*axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            //axios.defaults.headers.post['Access-Control-Allow-Origin-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
            axios.post('http://localhost:8080/api/v1/projectconstructor/publishproject', json)
                .then(response => {
                    console.log("внутри");
                    setValues({
                        ...values,
                        postId: response.data.id
                    });
                    console.log(response.data);
                });*/
            /*axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';*/
            /*axios.get('http://localhost:8080/api/v1/projectconstructor/getLastProject').then(response => {
                console.log("внутри");
                setValues({
                    ...values,
                    postId: response.data.id
                });
                console.log(response.data);
            });*/
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    {sessionStorage.getItem("userToken") !== "" && sessionStorage.getItem("userToken") !== null ?
                        <p>Привет! Ваш токен: {sessionStorage.getItem("userToken")}</p> :
                        <p> Привет! У Вас нет токена</p>}
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="projectName">Название проекта</InputLabel>
                        <Input
                            id="projectName"
                            value={values.projectName}
                            onChange={handleChange('projectName')}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="projectDescription">Описание проекта</InputLabel>
                        <Input
                            id="projectDescription"
                            value={values.projectDescription}
                            onChange={handleChange('projectDescription')}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="projectField">Сфера</InputLabel>
                        <Input
                            id="projectField"
                            value={values.projectField}
                            onChange={handleChange('projectField')}/>
                    </FormControl>
                </div>
                <div className='createProject'>
                    <Button id="createProject" variant="outlined" type="submit">Создать проект</Button>
                </div>
                <div>
                    <Card sx={{minWidth: 275}}>
                        <CardContent>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom id="field">
                                Производство товаров и услуг
                            </Typography>
                            <Typography variant="h5" component="div" id="name">
                                Организация персональных турситических туров
                            </Typography>
                            <Typography variant="body2" id="description">
                                Персональные туры
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Удалить</Button>
                            <Button size="small">Изменить</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </form>
    );
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
