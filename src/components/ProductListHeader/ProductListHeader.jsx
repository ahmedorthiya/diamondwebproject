import React from "react";
import {Grid, Typography,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import FilterListIcon from '@material-ui/icons/FilterList';
import {HuePicker} from "react-color";

const useStyles = makeStyles(theme=>({
   headerContainer:{
       width:"70%",
       paddingTop:"30px",
       paddingBottom:"30px",
       marginLeft:"auto",
       marginRight:"auto",

   },
   item:{padding:"0 15px 0 0 ",cursor:"pointer"}
}));


const sizeData = [32,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];
const gemstones = [
    {id:1,name:"Amethyst"}
    ,{id:4,name:"Aquamarin"}
    ,{id:7,name:"Bergkristall"},
    {id:10,name:"Citrin"},
    {id:13,name:"Cognac Quarz"}
    ,{id:2,name:"Feueropal"},
    {id:5,name:"Goldberyll"},
    {id:8,name:"Goshenite"},
    {id:11,name:"Granat"},
    {id:14,name:"Lolith"},
    {id:16,name:"Kunzite"},
    {id:18,name:"Malaya Granat"},
    {id:20,name:"Topas"},
    {id:3,name:"Morganit"},
    {id:6,name:"Peridot"},
    {id:9,name:"Prasiolith"},
    {id:12,name:"Rodolith Garnet"},
    {id:15,name:"Swiss Smoky Quarz"},
    {id:17,name:"Rosenquarz"},
    {id:19,name:"Spessartite Garnet"},
    {id:21,name:"Tansanit"},
    {id:22,name:"Turnalin"},
    {id:23,name:"Zirkon"},
    {id:24,name:"Spinal"},
    {id:25,name:"Smaragd"}
];
const metals = [{id:1,name:"Platinum"},{id:2,name:"Rose gold  "},{id:3,name:"Red gold  "},{id:4,name:"Gold"},{id:5,name:"Silver"}];


export default props=>{
  const classes = useStyles();
  const {filterSettings,setFilterSettings} = props;


  const setFilters = ()=>{

       setFilterSettings(filter=>({
           ...filter,
           setFilter:!filter.setFilter
       }))
  }

  const applyFilters = (value)=>{
      setFilterSettings(filter=>({
          ...filter,
          ...value,
      }))


  }

    return(
        <Grid container direction={"column"} className={classes.headerContainer}>
           <Grid item container style={{cursor:"pointer"}} onClick={setFilters}>
               <Grid item style={{marginRight:"auto"}}>
                   <Typography variant={"h5"}>
                       Set Filters
                   </Typography>
               </Grid>
               <Grid item>
                   <FilterListIcon style={{fontSize:"30px"}}/>
               </Grid>
           </Grid>
            {
                !filterSettings.setFilter ? "":(
            <Grid item container direction={"column"}>
            <Grid item  >
              <Typography variant={"h6"}>COLOR</Typography>
            </Grid>
            <Grid item>
                     <HuePicker

                         color={ filterSettings.color }
                         onChangeComplete={ (color)=>{setFilterSettings(filter=>{

                             return{
                                 ...filter,
                                 color
                             }
                         })} }

                         style={{width:"100%"}}
                     />
            </Grid>
            <br/>
            <Grid item  >
                <Typography variant={"h6"}>Size</Typography>
            </Grid>
            <Grid item>
                {
                    sizeData.map((size,i)=>(
                        <Typography key={i} onClick={()=>applyFilters({size})} variant={"subtitle6"} color={filterSettings.size === size? "primary" : "secondary"} className={classes.item}>
                            {
                                size
                            }
                        </Typography>
                    ))
                }
            </Grid>

            <br/>

            <Grid item  >
                <Typography variant={"h6"}>Gemstones</Typography>
            </Grid>

            <Grid item>
                {
                    gemstones.map((gemstone)=>(
                        <Typography key={gemstone.id} onClick={()=>applyFilters({gemstone})} variant={ "subtitle6"} color={filterSettings.gemstone.id === gemstone.id ? "primary" :"secondary"} className={classes.item}>
                            {
                                gemstone.name
                            }
                        </Typography>
                    ))
                }
            </Grid>


            <br/>
            <Grid item  >
                <Typography variant={"h6"}>Metals</Typography>
            </Grid>

            <Grid item>
                {
                    metals.map((metal)=>(
                        <Typography onClick={()=>applyFilters({metal})} key={metal.id} variant={"subtitle6"} color={filterSettings.metal.id === metal.id ? "primary":"secondary"} className={classes.item}>
                            {
                                metal.name
                            }
                        </Typography>
                    ))
                }
            </Grid>
                <Grid item>
                    <br/>
                    <Button variant={"contained"} onClick={()=>setFilterSettings(props.filtersResetState)} color={"primary"}>Reset Filters</Button>
                </Grid>

            </Grid>)
            }


        </Grid>


    )
};
