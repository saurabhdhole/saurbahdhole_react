import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';

class AboutMe extends Component {

    componentDidMount() {
        debugger;
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        document.body.appendChild(script);

    }

    render() {
        return (
            <React.Fragment>
                <br></br>
                <br></br>
                <Typography variant="h5" color="primary" align="center">About me!</Typography>
                <br></br>
                <Grid container >
                    <Grid item xs={6} align="center">
                        <a class="LI-simple-link" href='https://www.linkedin.com/in/saurabhdhole19?trk=profile-badge'>Saurabh Dhole</a>
                    </Grid>
                    <Grid item xs={5} align="center">
                        <Card align="center">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Saurabh Dhoie
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A Master's student in Computer Science at Cleveland State University actively seeking Full time opportunities. Experienced in the computer software industry. Skilled in C++, C#, PL/SQL, English, Java, Python.
                        </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary" component="p">
                                My goal is to work with passion and focus in a dynamic organization which challenge my skills and knowledge and gives me an opportunity to contribute positively towards the goal and growth of the organization.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </React.Fragment>
        );
    }
}

export default AboutMe;