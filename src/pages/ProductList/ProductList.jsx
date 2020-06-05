import React, {useEffect,useCallback} from "react";
import {Grid,Typography,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import uniqueTansanite from "../../assets/images/Unique_Tansanite_14mm_++.jpg";
import {Link} from "react-router-dom";
import {ProductListHeader} from "../../components";
import dummyData from "./dummydata";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../store/actions/product";
import {priceResult,singleMedia as media} from "../../assets/selectFirstItemFromList";


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
   window.axios = axios;
    const [filterSettings,setFilterSettings] = React.useState(filters);
    const dispatch = useDispatch();
    const products = useSelector(store=>store.products.items);
    const includedData = useSelector(store=>store.products.includedData);


  const retrieveProducts = useCallback(async ()=>{
      await dispatch(addProducts());
  },[dispatch]);



    useEffect(()=>{

        retrieveProducts();

    },[retrieveProducts]);




    const filterData =
        dummyData.filter(singleData=>
            (filterSettings.color.hsl.h >= singleData.colorHSLHLowLimit && filterSettings.color.hsl.h <= singleData.colorHSLHighLimit)
            || filterSettings.metal.id === singleData.metal.id
            || filterSettings.gemstone.id === singleData.gemstone.id
            || filterSettings.size=== singleData.size
        );










    const returnData = data=>(
        products.map(data=>( <Grid
                key={data.id}
                item
                lg={4}
                sm={6}
                xl={4}
                xs={12}
                component={Link}
                to={'/product-details/'+data.id}
                style={{marginBottom:"20px"}}
            >



                {
                    includedData.map((dataItem,i)=>(
                        media(data,dataItem) ?
                        <img key={i} src={   media(data,dataItem).includes("https://") ? media(data,dataItem) : "http://127.0.0.1:8000/"+media(data,dataItem)}  className={classes.diamondImg}/>
                        : ""

                    ))
                }


                <Typography color={"primary"} style={{display:"block"}} variant={"h6"}>
                    {data.attributes['product.label']}
                    {/*| {data.metal.name} | {data.gemstone.name}*/}
                </Typography>
                <Typography color={"secondary"} variant={"subtitle6"}>
                    {/*{data.price} - size {data.size} - color {data.colorName}*/}
                    {



                        includedData.map((dataItem,i)=>(
                            <div key={i}>{
                             priceResult(data,dataItem)


                            }</div>

                        ))
                    }
                </Typography>

            </Grid>

        ))
    )



    return (
        <div className={classes.container} style={{height:products.length > 2 ? undefined : "100vh"}}>

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
           <div style={{marginLeft:"auto",marginRight:"auto",textAlign:"center"}}>
               <Button > Load More</Button>
           </div>
        </div>
    )
};

export default ProductList;
