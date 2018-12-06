
import React, { Component } from 'react';
import '../App.css';
// import Boxing_gym from '../styles/Boxing-gym'


class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return(
            <div>
     <video id="video" loop autoPlay>
        <source src="http://muloux.com/wp-content/uploads/2018/05/Pexels-Videos-4858.mp4" type="video/mp4" />
        {/* <source src="http://muloux.com/wp-content/uploads/2018/05/Boxing_gym.mp4" type="video/mp4" /> */}
       {/* <source src="http://muloux.com/wp-content/uploads/2018/05/Boxing_gym.mp4" type="video/ogg" /> */}
       Your browser does not support the video tag.
     </video>
            </div>
        );
    }
}

export default Background;
