import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar className="toolbar">
                        <Typography variant="h4" noWrap>
                            {this.props.appName}
                        </Typography>
                        <Typography className="title" style={{flexGrow:"1"}}  ></Typography>
                        <Button size="large"  color="inherit" to="/">Home</Button>
                        <Button size="large" color="inherit" to="/">About Me!</Button>
                        <Button size="large" color="inherit" to="/" >Skills</Button>
                        <Button size="large" color="inherit" to="/" >Experience</Button>
                        {/* <Button size="large" color="inherit" to="/" >Timeline</Button> */}
                        <Button size="large" color="inherit" to="/" >Blogs</Button>
                        <Button size="large" color="inherit" to="/" >Projects</Button>
                        <Button size="large" color="inherit" to="/" >Contact</Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default Header;