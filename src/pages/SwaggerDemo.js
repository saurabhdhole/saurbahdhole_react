import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import SwaggerHeader from '../components/SwaggerHeader';
import axios from 'axios';

class SwaggerDemo extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            userStatus: 0,
            showMsg: false,
            msg:""
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    }

    componentDidMount(){
        debugger;
        axios.get(`https://petstore.swagger.io/v2/user/login?username=string&password=string`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        }).catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }

    createUser = (e) =>{

        e.preventDefault();
        debugger;

        const data = {
            "id": this.state.id,
            "username": this.state.username,
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "phone": this.state.phone,
            "userStatus": 0
          }
      
          axios.post(`https://petstore.swagger.io/v2/user`, { data })
            .then(res => {
                if(res.data.code == 200)
                {
                    this.setState({
                         showMsg: true,
                         msg :"user created..."
                    })

                    //this.getUser("saurabhdhole");
                }
            })

    }

    render() {
        return (
            <React.Fragment>
                <SwaggerHeader appName="Swagger" />

                <Typography variant="h4" align="center">Create User</Typography>
                <br></br>
                <br></br>
                <Grid container justify="center">

                    <Grid item xs={8} >
                        <Paper style={{ padding: "12px" }}>
                            <Typography color="textSecondary" >
                            For this applicaiton used API offered by https://petstore.swagger.io 
                             
                            </Typography>
                            <br></br>
                            <br></br>
                            <Grid container spacing={4} align="center">
                                <Grid item xs={5}>
                                    <TextField type="number" name="id" id="id" label="Id" variant="outlined" value={this.state.id} onChange={(e) => this.handleChange(e)} fullWidth />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField name="username" id="username" label="User Name" variant="outlined" value={this.state.username} onChange={(e) => this.handleChange(e)} fullWidth />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField name="firstName" id="firstName" label="First Name" variant="outlined" value={this.state.firstName} onChange={(e) => this.handleChange(e)} fullWidth />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField name="lastName" id="lastName" label="lastName" variant="outlined" value={this.state.lastName} onChange={(e) => this.handleChange(e)} fullWidth />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField name="email" id="email" label="Email" variant="outlined" value={this.state.email} onChange={(e) => this.handleChange(e)} fullWidth />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField  name="password" id="password" label="Password" variant="outlined" value={this.state.password} onChange={(e) => this.handleChange(e)} fullWidth />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField name="phone" id="phone" label="Phone" variant="outlined" value={this.state.phone} onChange={(e) => this.handleChange(e)} fullWidth />
                                </Grid>
                                {/* <Grid item xs={5}>
                                    <TextField name="firstName" id="firstName" label="First Name" variant="outlined" value={this.state.firstName} onChange={(e) => this.onchangeHandler(e)} fullWidth />
                                </Grid> */}
                                <Grid item xs={12} align="left">
                                    <Button variant="contained" color="primary" onClick={(e)=>this.createUser(e)}>
                                        Create User
                                    </Button>
                                </Grid>

                                {this.state.showMsg &&(
                                    <Typography variant="h5" color="secondary">{this.state.msg}</Typography>
                                )}
                            </Grid>

                        </Paper>
                    </Grid>

                </Grid>

            </React.Fragment>
        );
    }
}

export default SwaggerDemo;