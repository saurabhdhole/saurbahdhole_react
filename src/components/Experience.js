import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class Experience extends Component {
    render() {
        return (
            <React.Fragment>
                <br></br>
                <br></br>
                <Typography variant="h4" color="primary">Experience!</Typography>
                <br></br>
                <Grid container justify="center" spacing={4}>

                    <Grid item xs={5}>
                        <Card className="">
                            <CardActionArea>
                                <img src="https://www.csuohio.edu/sites/all/themes/csu/images/Seal-background.png" />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Cleveland State University
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Full Stack Developer
                                <br></br>
                                Feb-2018 - May 2020
                            </Typography>
                                    <br></br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Completed two project. One is iOS Application and another is website application. Respocible for creating, hosting the application from scratch.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={5}>
                        <Card className="">
                            <CardActionArea>
                                <img src="https://www.compsource.com//mscs_images/pics/logo2.jpg" />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        CompSource Inc
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Full Stack Developer
                                <br></br>
                                Jan-2020 - Sept 2020
                            </Typography>
                                    <br></br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Worked on converting the existing application to C# application.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={5}>
                        <Card className="">
                            <CardActionArea>
                                <img src="http://saurabhdhole.com/images/prototech-solutions.png" />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        ProtoTech Solutions Pvt Ltd
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Sr Software Developer
                                <br></br>
                                Jan-2016 - Jun 2018
                            </Typography>
                                    <br></br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        My role was to research and develope projects from scratch and implement core/complex modules. Responsible for providing optimal solution to client and every day challenges and training new members.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card className="">
                            <CardActionArea>
                                <img src="http://saurabhdhole.com/images/moremagic.png" style={{width:"240px"}} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        MoreMagic Solutions Pvt Ltd
                            </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Full Stack Developer
                                <br></br>
                                Sep-2015 - Dec 2015
                            </Typography>
                                    <br></br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Completed 3 months internship and worked on two projects with technologies involving Java, Spring and AngularJS.
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>

            </React.Fragment>
        );
    }
}

export default Experience;