import { Paper, Typography } from '@material-ui/core';
import React, { Component } from 'react';


class Blogs extends Component {
    render() {
        return (
            <React.Fragment>
                
                <Paper className="bgBlack">
                    <br></br>
                    <br></br>
                    <Typography variant="h5" color="secondary" align="center">Blogs!</Typography>
                    <br></br>
                    <br></br>
                    <Typography variant="h6" color="secondary" align="center">Comming Soon...</Typography>
                    <br></br>
                </Paper>
            </React.Fragment>
        );
    }
}

export default Blogs;