import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SwaggerHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar className="toolbar">
                        <Typography variant="h4" noWrap>
                            {this.props.appName}
                        </Typography>
                        <Typography className="title" style={{flexGrow:"1"}}  ></Typography>
                        <Link style={{ color: "white"}} to="/SwaggerDemo" > <Button size="large"  color="inherit">Create User</Button> </Link>
                        <Link style={{ color: "white"}} to="/SwaggerDemo/GetUser"> <Button size="large" color="inherit" >Get User</Button></Link>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default SwaggerHeader;