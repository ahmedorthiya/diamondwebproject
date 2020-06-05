import React from "react";
import {Grid} from "@material-ui/core"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import bg1 from "../../assets/images/testbg1.jpg";
import bg2 from "../../assets/images/testbg2.jpg";




export default props=>{
    return(
        <AwesomeSlider>
            <div>


                <img src={bg1} stye={{ flex: 1,
                    resizeMode: 'cover'}}/>
            </div>
            <div>


                <img src={bg2} stye={{ flex: 1,
                    resizeMode: 'cover'}}/>
            </div>

            <div  style={{color:"white"}}>4</div>
        </AwesomeSlider>

    )
}
