import React, { Component } from 'react';
import "./Navbar.css"
import { Grid } from '@mui/material';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            <Grid item xs={3}>
                Left
            </Grid>
            <Grid item xs={6}>
                Middle 
            </Grid>
            <Grid item xs={3}>
                Right
            </Grid>
        </div>
         );
    }
}
 
export default NavBar;