import {FormControl, Grid, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme=>({
    selectMenuItem:{
        border:"1px solid black",
        textAlign:"right",

        "&:hover":{
            outline:"none",
            textDecoration:"none"
        }
    },

}));


export default props=>{
    const classes = useStyles();
    return(
        <FormControl className={props.classes ? props.classes.formControl : undefined}  >
            <InputLabel  id="demo-simple-select-label">No Of Items</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.noOfItems}
                onChange={props.handleChange}
                style={props.style}
                className={classes.selectMenuItem}
               disableUnderline

            >
                <MenuItem value={1} selected>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
            </Select>
        </FormControl>
    )
}
