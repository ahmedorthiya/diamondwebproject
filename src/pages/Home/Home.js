import React from "react";
import {Typography} from "@material-ui/core"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg1 from "../../assets/images/testbg1.jpg";
import bg2 from "../../assets/images/testbg2.jpg";
import {makeStyles} from "@material-ui/styles";
import TextTransition, { presets } from "react-text-transition";
import {Link} from "react-router-dom";


const TEXTS = [
    "Buy Your Favourite Diamonds",
    "Different Types Of Diamonds Are Available",

];

const useStyles = makeStyles(theme=>({
    text:{
        position:'absolute',
        zIndex:100000,
        color:"white",
        width:'100%',
        height:'100vh',
        textAlign:"center",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer',
        flexDirection:'column',
        top:0
    },

}));

const Home  = props =>{
    const classes = useStyles();
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 1),
            3000 // every 3 seconds
        );
    },[]);

    const textContent = (
        <div className={classes.text}>
            <Typography    variant={"h5"}>
                <div style={{width:"50vw",margin:'0 auto'}}>
                    <TextTransition


                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                </div>

            </Typography>



            <Typography component={Link} className={"a-white"} to={"/product-list"}    variant={"h5"}>
                All Diamonds List
            </Typography>
        </div>
    )

   return (
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}
            interval={5000}>
                <div style={{position:'relative'}}>
                    <div className="imgDiv" >
                        <img src={bg1} alt="" style={{flex:1,}}/>
                    </div>
                    {
                        textContent
                    }

                </div>
                <div>
                    <div style={{position:'relative'}}>
                        <div className="imgDiv" >
                            <img src={bg2} alt="" style={{flex:1,}}/>
                        </div>
                        {
                            textContent
                        }

                    </div>
                </div>

            </Carousel>
        );

}




export default Home;


{/*// <Slider>*/}
{/*//     {content.map((article, index) => <div key={index}>*/}
{/*//         <h2>{article.title}</h2>*/}
{/*//         <div>{article.description}</div>*/}
{/*//     </div>)}*/}
{/*// </Slider>*/}

// <div >
//                     <div className="imgDiv" >
//                         <img src={bg1} alt="" style={{flex:1,}}/>
//                     </div>
//                     <div style={{marginBottom:300,zIndex:100000,
//                         backgroundColor:"red",color:"green",width:300,height:300,top:0,left:0,}}>
//                         lkjsdflkjdf
//                     </div>
//                 </div>

// <Carousel>
//             <div style={{position:'relative'}}>
//                 <div className="imgDiv" >
//                     <img src={bg1} alt="" style={{flex:1,}}/>
//                 </div>
//                 <div style={{position:'absolute',marginBottom:300,zIndex:100000,
//                     backgroundColor:"red",color:"green",width:'100%',textAlign:"center",height:300,top:0,}}>
//                     lkjsdflkjdf
//                 </div>
//             </div>
//             <div>
//                 <img src={bg2} />
//                 <p className="legend">Legend 2</p>
//             </div>
//
//         </Carousel>
