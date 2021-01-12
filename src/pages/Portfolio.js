import { Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Home from '../components/Home';
import Skills from '../components/Skills';

class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Header appName="Saurabh Dhole" />
                    </Grid>                    
                    <Grid item xs={12}>
                        <Home />
                    </Grid>
                    <Grid item xs={12}>
                        <AboutMe />
                    </Grid>

                    <Grid item xs={12}>
                        <Skills />
                    </Grid>
                   
                    <Grid item xs={8} align="center">
                        <Experience />
                    </Grid>




                </Grid>
            </React.Fragment>
        );
    }
}

export default Portfolio;