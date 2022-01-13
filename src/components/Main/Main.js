import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardActions, CardContent, FormControl, Input, InputLabel, Typography} from "@material-ui/core";
import axios from "axios";


const Main = () => {
    const [values, setValues] = React.useState({
        vacancyName: "",
        vacancyDescription: "",
        vacancySalary: ""
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        let json = null;
        if (values.salary !== '' && values.vacancyName !== '' && values.vacancyDescription !== '') {
            json = JSON.stringify({
                vacancyName: values.vacancyName,
                vacancyDescription: values.vacancyDescription,
                vacancySalary: values.vacancySalary
            });
            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            axios.post('http://localhost:8080/api/v1/registration', json)
                .then(response => {
                    setValues({
                        ...values,
                        postId: response.data.id,
                        confirmationToken: response.data
                    });
                    sessionStorage.setItem("confirmationToken", response.data);
                });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="vacancyName">Название вакансии</InputLabel>
                        <Input
                            id="vacancyName"
                            value={values.vacancyName}
                            onChange={handleChange('vacancyName')}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="vacancyDescription">Описание вакансии</InputLabel>
                        <Input
                            id="vacancyDescription"
                            value={values.vacancyDescription}
                            onChange={handleChange('vacancyDescription')}/>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputLabel htmlFor="vacancySalary">Зарплата</InputLabel>
                        <Input
                            id="vacancySalary"
                            value={values.salary}
                            onChange={handleChange('vacancySalary')}/>
                    </FormControl>
                </div>
                <div className='createVacancy'>
                    <Button id="createVacancy" variant="outlined" type="submit">Создать вакансию</Button>
                </div>
                <div>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                20$
                            </Typography>
                            <Typography variant="h5" component="div">
                                1С-программист
                            </Typography>
                            <Typography variant="body2">
                                описание вакансии
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
