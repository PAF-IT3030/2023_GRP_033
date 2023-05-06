import React, { Component } from 'react';
import "./Navbar.css"
import { Avatar, Grid } from '@mui/material';
import flogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";




class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>
                <Grid container className='navbar_main'>
                    <Grid item xs={3}>
                        <div className='navbar_leftbar'>
                            <img className='navbar_logo' src={flogo} width='60px' />
                            <input className='navbar_search' type="text" placeholder='search foodie'/>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className="navbar__container">
                            <div className="navbar__tabs active">
                                <img src={home} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={page} height="35px" width="35px" />
                            </div>
                            <div className="navbar__tabs">
                                <img src={watch} height="35px" width="35px" />
                            </div>
        
                            
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    <div className="navbar__right">
                        <Avatar src='https://scontent.fcmb3-2.fna.fbcdn.net/v/t1.6435-1/188613307_1245344929259694_7612591059878129185_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHNotVkrlQ2pUp3rDs2eurF-nA9afVhPtL6cD1p9WE-0gsUxToM9S_LdaHl2WcMfxmjaKjD1iA20wekrZsj01_g&_nc_ohc=DmXC70JdVM4AX9bf-2Q&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfACRcT9HagI9pS0T-D4O2-lRj_eMHQF2y1IPqbWzdPwxQ&oe=647D4EB1'/>
                        <div className="navbar__profilename">Ashen</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default NavBar;

