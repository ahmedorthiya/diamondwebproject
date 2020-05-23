import React from "react";
import {Grid,Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import uniqueTansanite from "../../assets/images/Unique_Tansanite_14mm_++.jpg";
import {Link} from "react-router-dom";
import {ProductListHeader} from "../../components";
import dummyData from "./dummydata";

const useStyles = makeStyles(theme=>({
    container:{

          backgroundColor:theme.palette.common.bgColor,


    },
    diamondImg:{
         width:"250px",
         height:"250px",
        borderRadius:"50%",

    }
})
)

const redColors = ['#FF6961','#FF5C5C','#FF1C00','#FF0800','#FF0000','#E34234','#D73B3E','#CE1620','#CC0000','#B22222','#B31B1B','#A40000','#800000'];
// const yellowColors = ['#FDFD96','']

// h value of hsl  for red range 0 -30
// h  yellow  30-70
// h green 70-150
// h for light blue  150-200
// h for light dark   200-260
// h for light purple  260-284
// h for light pink  260-360
//







const ProductList = props=>{
   const classes = useStyles();
   const filters = {
       setFilter:false,
       color:{hsl:{h:-2}},
       size:"",
       gemstone:{id:-1},
       metal:{id:-1}
   };
    const [filterSettings,setFilterSettings] = React.useState(filters);


    const filterData =
        dummyData.filter(singleData=>
            (filterSettings.color.hsl.h >= singleData.colorHSLHLowLimit && filterSettings.color.hsl.h <= singleData.colorHSLHighLimit)
            || filterSettings.metal.id === singleData.metal.id
            || filterSettings.gemstone.id === singleData.gemstone.id
            || filterSettings.size=== singleData.size
        );


    const returnData = data=>(
        data.map(data=>( <Grid
                key={data.id}
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                component={Link}
                to={data.to}
                style={{marginBottom:"20px"}}
            >


                <img src={data.imgSrc} className={classes.diamondImg}/>

                <Typography color={"primary"} style={{display:"block"}} variant={"h6"}>
                    {data.name} | {data.metal.name} | {data.gemstone.name}
                </Typography>
                <Typography color={"secondary"} variant={"subtitle6"}>
                    {data.price} - size {data.size} - color {data.colorName}
                </Typography>

            </Grid>

        ))
    )

    return (
        <div className={classes.container}>

            <ProductListHeader filterSettings={filterSettings} setFilterSettings={setFilterSettings}
            filtersResetState={filters}/>



        <Grid container justify={"center"} style={{width:"80%",margin:"auto",  textAlign:"center",}} >
            {

                filterSettings.setFilter ? filterData.length === 0 ? (<Grid item>
                    <br/><br/>
                    <Typography variant={"h5"} color={"primary"}>
                        No result is found. Please set correct filters
                    </Typography>
                </Grid>) : (returnData(filterData)):returnData(dummyData)

            }













        </Grid>
        </div>
    )
};

export default ProductList;
