import React from "react";

import {TextField, Grid, Typography,Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {btnTransition} from "../../theme/ButtonStyle";
import ClearIcon from '@material-ui/icons/Clear';
import {useDispatch, useSelector} from "react-redux";
import {updateAddress} from "../../store/actions/address";

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
    const dispatch = useDispatch();
    const token = useSelector(store=>store.login.token);

    const user  = useSelector(store=>store.login.currentUser);


    const [msg,setMsg] = React.useState('');
    const [permanentAddress,setPermanentAddress]  = React.useState({
        companyName:user ? user.company : "",
        zip:user ? user.postal : "",
        country:user ? user.countryid : "",
        state:user ? user.state : "",
    });
    const [addresses,setAddresses] = React.useState([{
        id:1,
        username1:'',
        street1:"",
        city1:"",
        houseno1:"",


    }]); // "1" mean first address


    const removeAddress = (id)=>{
       if(addresses.length > 1) {
           const newArray = addresses.filter(item => item.id !== id);
           setAddresses(newArray);
       }
    }


    const addNewAddress = ()=>{
        const newAddress = {};
      //  console.log("check = ",addresses[addresses.length-1]);

        const newAddressState = addresses[addresses.length-1].id+1;

        newAddress["id"] = newAddressState;
      //  newAddress[`state${newAddressState}`] = "";
    //    newAddress[`zip${newAddressState}`] = "";
        newAddress[`houseno${newAddressState}`] = "";
        newAddress[`street${newAddressState}`] = "";
        newAddress[`city${newAddressState}`] = "";
        newAddress[`username${newAddressState}`] = "";
        //newAddress[`country${newAddressState}`] = "";
        //newAddress[`companyName${newAddressState}`] = "";



        const newArray = [...addresses];
        newArray.push(newAddress);
       setAddresses([...newArray]);

    }


    const submitAddress = async ()=>{
        setMsg("Please wait...");
      try {
          const data = await dispatch(updateAddress({
              addresses,
              permanentAddress,
          }, token));
          props.history.push("/product-list");
      }catch(e){
          setMsg("Please Fill Up All Of The Fields");
      }
    }

    const onChange = (e,id,i)=>{
        const object = addresses[i];
        object[e.target.name] = e.target.value;
        setAddresses([...addresses]);
    }



    const address = (item,i)=>{



        return(<Grid key={item.id} container justify={"center"}>



        <Grid item>

            <TextField className={classes.inputBoxStyle}  label={"username"} value={addresses[i]['username'+item.id]}    name={'username'+item.id} onChange={e=>onChange(e,item.id,i)} />
        </Grid>
        <Grid item>
            <TextField className={classes.inputBoxStyle} label={"Street"} value={addresses[i]['street'+item.id]}  name={'street'+item.id} onChange={e=>onChange(e,item.id,i)}   />
        </Grid>



        <Grid item>
            <TextField className={classes.inputBoxStyle} label={"City"} value={addresses[i]['city'+item.id]}  name={'city'+item.id} onChange={e=>onChange(e,item.id,i)}   />
        </Grid>

            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"House No"} value={addresses[i]['houseno'+item.id]}  name={'houseno'+item.id} onChange={e=>onChange(e,item.id,i)}   />
            </Grid>

        <Grid item>
            <ClearIcon className={classes.inputBoxStyle} onClick={()=>removeAddress(item.id)} style={{marginTop:15}}/>
        </Grid>

    </Grid>)
    };




    const saveAddress = (
        <Grid  container direction={"column"} justify={"center"} alignItems={"center"}>
            <Grid item>

                <TextField className={classes.inputBoxStyle}  value={permanentAddress.companyName}  name={'companyName'} onChange={e=>setPermanentAddress({...permanentAddress,companyName: e.target.value})}   label={"Company Name"}  />
            </Grid>
            <Grid item>
                <TextField className={classes.inputBoxStyle}   value={permanentAddress.zip} name={'zip'}  onChange={e=>setPermanentAddress({...permanentAddress,zip:e.target.value})}   label={"Zip"} />
            </Grid>
            <Grid item>
                <TextField className={classes.inputBoxStyle}   value={permanentAddress.state} name={'state'}  onChange={e=>setPermanentAddress({...permanentAddress,state:e.target.value})}   label={"State"} />
            </Grid>

            <Grid item>
                <TextField className={classes.inputBoxStyle} label={"Country"}   value={permanentAddress.country} name={'country'}  onChange={e=>setPermanentAddress({...permanentAddress,country:e.target.value})}  />
            </Grid>
        </Grid>
    )

    return(
        <Grid container style={{height:!showSaveBtn && !user.address3 ? "100vh": undefined, margin:showSaveBtn ? "97px 0" : undefined}} direction={"column"} className={classes.root} justify={"center"} alignItems={"center"}>
            <Grid item >
                <Typography variant={"h5"} align={"center"}>Shipping Address</Typography>
            </Grid>

            { user.address1 ? (
            <Grid item container justify={"center"} alignItems={"center"} direction={"column"}>

                     <Grid item >
                        <Typography variant={"h5"}>
                        Old Address 1
                        </Typography>
                    </Grid>

                <Grid item >
                    <Typography variant={"subtitle6"}>
                        {user.address1}
                    </Typography>
                </Grid>




            </Grid>) : ""
            }

            { user.address2 ? (
                <Grid item container direction={"column"}>

                    <Grid item >
                        <Typography variant={"h5"}>
                            Old Address 2
                        </Typography>
                    </Grid>

                    <Grid item >
                        <Typography variant={"subtitle6"}>
                            {user.address2}
                        </Typography>
                    </Grid>




                </Grid>) : ""
            }


            { user.address3 ? (
                <Grid item container direction={"column"}>

                    <Grid item >
                        <Typography variant={"h5"}>
                            Old Address 3
                        </Typography>
                    </Grid>

                    <Grid item >
                        <Typography variant={"subtitle6"}>
                            {user.address3}
                        </Typography>
                    </Grid>




                </Grid>) : ""
            }


            <br/><br/>

            {
                addresses.map((item,i)=>(
                    <Grid item>
                        {
                            address(item,i)
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
                        saveAddress
                    ): ""
                }
            </Grid>


            {
                showSaveBtn ? (
                    <Grid item>
                        <Button className={classes.btnStyle} onClick={submitAddress}>Save Addresses</Button>
                    </Grid>
                ) : (<Grid item>
                    <Button className={classes.btnStyle} onClick={()=>setSaveBtn(true)}>Continue</Button>
                </Grid>)
            }

            {
                msg ? msg : ""
            }



        </Grid>
    )
}

export default ShippingAddress;


