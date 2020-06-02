import React from "react";

import {TextField, Grid, Typography,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {btnTransition} from "../../theme/ButtonStyle";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme=>({

     inputBoxStyle:{
         margin:"0 10px",
     },
    btnStyle:{
         ...btnTransition
    }
}));


const ShippingAddress = props=>{
    const classes = useStyles();

    const [showSaveBtn,setSaveBtn] = React.useState(false);
    const [addresses,setAddresses] = React.useState([{
        id:1,
        username1:"",
        zip1:"",
        street1:"",
        city1:"",
        country1:"",
        houseno1:"",
        companyName1:"",

    }]); // "1" mean first address


    const removeAddress = (id)=>{
       const newArray =  addresses.filter(item=>item.id !== id);
       setAddresses(newArray);
    }


    const addNewAddress = ()=>{
        const newAddress = {};

        const newAddressState = addresses[addresses.length-1].id+1;

        newAddress["id"] = newAddressState;
        newAddress[`username${newAddressState}`] = "";
        newAddress[`zip${newAddressState}`] = "";
        newAddress[`houseno${newAddressState}`] = "";
        newAddress[`street${newAddressState}`] = "";
        newAddress[`city${newAddressState}`] = "";
        newAddress[`country${newAddressState}`] = "";



        const newArray = [...addresses];
        newArray.push(newAddress);
       setAddresses([...newArray]);

    }


    const address = item=>(<Grid container justify={"center"}>



        <Grid item>

            <TextField className={classes.inputBoxStyle} label={"Username"} />
        </Grid>
        <Grid item>
            <TextField className={classes.inputBoxStyle} label={"Street"} />
        </Grid>

        <Grid item>
            <TextField className={classes.inputBoxStyle} label={"Zip"} />
        </Grid>

        <Grid item>
            <TextField className={classes.inputBoxStyle} label={"Country"} />
        </Grid>
        <Grid item>
            <ClearIcon className={classes.inputBoxStyle} onClick={()=>removeAddress(item.id)} style={{marginTop:15}}/>
        </Grid>

    </Grid>);


    const saveAddress = item=>(
        <Grid container direction={"column"} justify={"center"} alignItems={"center"}>
            <Grid item>

                <TextField className={classes.inputBoxStyle} label={"Company Name"} />
            </Grid>
            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"First And Last Name"} />
            </Grid>

            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"Street"} />
            </Grid>

            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"House No"} />
            </Grid>

            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"Zip"} />
            </Grid>
            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"City"} />
            </Grid>

            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"Country"} />
            </Grid>
        </Grid>
    )

    return(
        <Grid container style={{height:!showSaveBtn ? "100vh": undefined, margin:showSaveBtn ? "97px 0" : undefined}} direction={"column"} className={classes.root} justify={"center"} alignItems={"center"}>
            <Grid item >
                <Typography variant={"h5"} align={"center"}>Shipping Address</Typography>
            </Grid>


            <br/><br/>

            {
                addresses.map(item=>(
                    <Grid item>
                        {
                            address(item)
                        }
                        <br/>
                    </Grid>
                ))
            }

            <Grid item>
                <Button className={classes.btnStyle} onClick={addNewAddress}>Add New Address </Button>
            </Grid>


            <Grid item>
                {
                    showSaveBtn ? (
                        addresses.map(item=>(
                            <Grid item>
                                {
                                    saveAddress(item)
                                }
                                <br/>
                            </Grid>
                        ))
                    ): ""
                }
            </Grid>


            {
                showSaveBtn ? (
                    <Grid item>
                        <Button className={classes.btnStyle} >Save Addresses</Button>
                    </Grid>
                ) : (<Grid item>
                    <Button className={classes.btnStyle} onClick={()=>setSaveBtn(true)}>Continue</Button>
                </Grid>)
            }



        </Grid>
    )
}

export default ShippingAddress;
