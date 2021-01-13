import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

class Projects extends Component {

    openProject (id) 
    {
        this.props.projectHandlor(id);
    }

    render() {
        return (
            <React.Fragment>
                
                <br></br>
                <br></br>
                <Typography variant="h4" color="primary" align="center">Projects!</Typography>
                <br></br>
                <Grid container justify="center" spacing={4}>

                    <Grid item xs={3
                    }>
                        <Card className="" >
                            <CardActionArea >
                                <img src="http://saurabhdhole.com/images/2dDrafting.jpg" onClick={(e)=>this.openProject("1")} />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        2D Drafting Application
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card className="">
                            <CardActionArea>
                                <img src="http://saurabhdhole.com/images/2dDrafting.jpg" />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        2D Drafting Application
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card className="">
                            <CardActionArea>
                                <img src="http://saurabhdhole.com/images/2dDrafting.jpg" />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        2D Drafting Application
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Projects;