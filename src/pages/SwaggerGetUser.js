import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import SwaggerHeader from '../components/SwaggerHeader';
import axios from 'axios';

class SwaggerGetUser extends Component {

    constructor()
    {
        super();

        this.state = ({
            id:"",
            user: null,

        })
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    }

    getUser = (e) =>
    {
        e.preventDefault();
          debugger;
          const userName = this.state.id

          axios.get(`https://petstore.swagger.io/v2/user/`+ userName)
          .then(res => {
            const persons = res.data;
            this.setState({ user: res.data });
          }).catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }

    render() {
        return (
            <div>
                <SwaggerHeader appName="Swagger" />
                <Typography variant="h4" align="center">Get User</Typography>
                <br></br>
                <br></br>
                <Grid container justify="center">
                    <Grid item xs={8} >
                        <Paper style={{ padding: "12px" }}>
                            <Typography color="textSecondary">Please use username as string or saurabhdhole to fetch information.
                            <br></br>
                            </Typography>

                            <Grid item xs={12} align="left">
                            <TextField  name="id" id="id" label="Id" variant="outlined" value={this.state.id} onChange={(e) => this.handleChange(e)}  />
                                <Button variant="contained" color="primary" onClick={(e) => this.getUser(e)}>
                                    Get User
                                </Button>
                            </Grid>

                            <br></br>
                            <br></br>
                            {this.state.user && ( <Typography variant="h5">
                                User data: <br></br>
                                {this.state.user.id} <br></br>
                                {this.state.user.username} <br></br>
                                {this.state.user.firstName} <br></br>
                                {this.state.user.lastName} <br></br>
                            </Typography>)}
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default SwaggerGetUser;