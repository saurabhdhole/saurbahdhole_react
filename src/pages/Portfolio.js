import { Grid, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import AboutMe from '../components/AboutMe';
import Blogs from '../components/Blogs';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Project from '../components/Project';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class Portfolio extends Component {


    constructor(props) {
        super(props);
        this.state ={
           addSessionModal : false,
           projecId: "",
        }
    }

    handleClose = (event) => {
        this.setState({
          addSessionModal:false,
        })
    };

    openProjectMoodal=(projecId)=>
    {
        debugger;
        this.setState({
            addSessionModal:true,
            projecId: projecId
          })
    }

    render() {

        const theme = createMuiTheme({
            palette: {
              primary: { 
                // dark:'#ee9924',
                main:'#2d2d30',
                opacity: '0.9'
              },
              secondary: { 
                main: '#FFFFFF' 
              }
              // type: "dark"
            },
            typography: {
              useNextVariants: true,
              fontFamily: 'Raleway, Arial',
            },
          });

        return (
            <React.Fragment>
                    <MuiThemeProvider theme={theme}>
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

                    <Grid item xs={12}>
                        <Blogs />
                    </Grid>
                   
                    <Grid item xs={12}>
                        <Projects projectHandlor={this.openProjectMoodal} />
                    </Grid>

                    <Dialog
                            open={this.state.addSessionModal}
                            onClose={(e)=>this.handleClose(e)}
                            aria-labelledby="Add a Session"
                            aria-describedby="Add a Session"
                        >
                            <DialogTitle id="addSession" align="center"></DialogTitle>
                            <DialogContent>
                                <Project project="Project : 2D Drafting application" role="Role : Developer" tech="Technology : Vb.Net, Eyeshot" desc="Description : The lightweight library which provides AutoCAD OEM module with Eyeshot. Features like command line utility, drawing, Layer and editing features." />
                            </DialogContent>
                            <DialogActions>
                            {/* <Button onClick={(e)=>this.handleClose(e)} color="primary" autoFocus>
                                Agree
                            </Button> */}
                            </DialogActions>
                        </Dialog>


                </Grid>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

export default Portfolio;