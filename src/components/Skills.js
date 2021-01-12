import { Grid, Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import '../App.css';

class Skills extends Component {
    render() {
        return (
            <React.Fragment >
                <Paper className="bgBlack">
                <br></br>
                <br></br>
                <Typography variant="h5" color="secondary" align="center">Skills!</Typography>
                <br></br>
                <Grid container justify="center">
                    <Grid item xs={5} align="center">
                    <Typography color="secondary" variant="h4">Programming Languages</Typography>
                    <br></br>
                    <Typography color="secondary">C, C++, C#, Android, PL/SQL, Python, Core Java, J2EE, Go, Swift, Objective C</Typography>
                    <br></br>
                    <Typography color="secondary"></Typography>
                    <br></br>
                    <Typography color="secondary" variant="h4">Web Development</Typography>
                    <br></br>
                    <Typography color="secondary">HTML, JavaScript, XML, jQuery, CSS, Bootstrap, RESTful services, AJAX</Typography>
                    <br></br>
                    <Typography color="secondary"></Typography>
                    <br></br>
                    <Typography color="secondary" variant="h4">Tools & Frameworks</Typography>
                    <br></br>
                    <Typography color="secondary">ASP.NET MVC, Spring, Git, Subversion, Maven</Typography>
                    <br></br>
                    <Typography color="secondary"></Typography>
                    <br></br>
                    <Typography color="secondary" variant="h4">Databases & Platforms</Typography>
                    <br></br>
                    <Typography color="secondary">MySQL, Oracle, SQL Server, Windows, LINUX, UNIX</Typography>
                    <br></br>
                    <Typography color="secondary"></Typography>
                    <br></br>
                    </Grid>

                </Grid>
                </Paper>
               
            </React.Fragment>
        );
    }
}

export default Skills;