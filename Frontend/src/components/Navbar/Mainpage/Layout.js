import React, { Component } from 'react';

class  Layout extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div className="mainpage__container">
            <Grid container >
                <Grid item xs={3}>
                    <LeftSide />
                </Grid>
                <Grid item xs={6} className="middleContainer">

                    <StatusBar />
                    <UploadSection update={this.letUpdate} />
                    <PostContainer ref="child"/>
                </Grid>
                <Grid item xs={3}>
                    <RightSide />
                </Grid>
            </Grid>
        </div>

         );
    }
}
 
export default Layout;
