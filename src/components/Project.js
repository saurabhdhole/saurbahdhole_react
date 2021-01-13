import { Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid item xs={12} justify="center">
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {this.props.project} <br></br>
                        {this.props.role} <br></br>
                        {this.props.tech} <br></br>
                        {this.props.desc} <br></br>
                    </Typography>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Project;