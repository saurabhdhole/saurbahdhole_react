import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <React.Fragment>

                <Typography variant="h4" color="secondary" style={{ position: "absolute" }} >Full Stack Developer</Typography>
                <img style={{ width: "100%" }} src="http://saurabhdhole.com/images/saurabhdhole.jpg" alt="Saurabh Dhole Landing image" />
            </React.Fragment>
        );
    }
}

export default Home;