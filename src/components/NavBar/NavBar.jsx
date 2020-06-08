import React from "react";

import {Paper,TextField,Divider,IconButton} from "@material-ui/core";
import {Menu as MenuIcon ,Search as SearchIcon ,Directions as DirectionsIcon} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link} from "react-router-dom";
import "./navbar.css";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0 4px',
        display: 'flex',
        alignItems: 'center',
        width: 200,
        marginTop:"-10px",
        backgroundColor:"transparent",
    },
    input:{
           color:"white",
           "&::placeholder":{
               textOverflow: 'ellipsis !important',
               color: 'red'
           }
    },

    iconButton: {
        padding: 10,
        color:"white"
    },
    multilineColor:{
        color:"white",

    },


}));



export default props=>{
    const classes = useStyles();
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    const token = useSelector(store=>store.login.token);
    const [checked,setChecked] = React.useState(false);

    const checkedCheckbox = ()=>{
         setChecked(false);
    }

    return(
        <div className="navigation">

            <input type="checkbox"  checked={checked} className="navigation__checkbox" id="navi-toggle"
                   onChange={() => setChecked(!checked)}
            />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp; </span>

                </label>
                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                   <ul className={"navigation__topbar"}>
                       <li className={"navigation__topbar_list navigation__topbar_icon"}><Link onClick={checkedCheckbox} className={"a-white"} to={"/"}>Home</Link></li>
                       <li className={"navigation__topbar_list"}><Link className={"a-white"} onClick={checkedCheckbox} to={"/cart"}>Cart</Link></li>

                       {
                           !token ? (
                              <div style={{display:'flex'}}>
                                  <li className={"navigation__topbar_list"}><Link className={"a-white"} onClick={checkedCheckbox} to={"/auth"}>Login</Link></li>
                                  <li className={"navigation__topbar_list"}><Link className={"a-white"} onClick={checkedCheckbox} to={"/sign-up"}>Create An Account</Link></li>

                              </div>
                           ) : (   <div style={{display:'flex'}}>
                                   <li className={"navigation__topbar_list"}><Link className={"a-white"} onClick={checkedCheckbox} to={"/logout"}>Logout</Link></li>
                                   <li className={"navigation__topbar_list"}><Link className={"a-white"} onClick={checkedCheckbox} to={"/shipping-address"}>Shipping Address</Link></li>

                               </div>
                           )
                       }


                       <li className={"navigation__topbar_list"}>

                           <Paper  className={classes.root}>
                               <IconButton className={classes.iconButton} aria-label="menu">
                                   <SearchIcon />
                               </IconButton>


                               <Autocomplete
                                   value={value}
                                   onChange={(event, newValue) => {
                                       setValue(newValue);
                                   }}
                                   inputValue={inputValue}

                                   onInputChange={(event, newInputValue) => {
                                       setInputValue(newInputValue);
                                   }}
                                   id="controllable-states-demo"
                                   options={options}
                                   style={{ width: 300 }}


                                   classes={{inputRoot: classes.multilineColor}}
                                   renderInput={(params) => <TextField {...params}  />}
                               />


                               <IconButton type="submit" className={classes.iconButton} aria-label="search">

                               </IconButton>


                           </Paper>


                       </li>
                   </ul>

                    <ul className="navigation__list">
                        <li className="navigation__item"><a href={"#"} className="navigation__link">
                            <span>01</span>Gemstones</a></li>
                        <li className="navigation__item"><a href={"#"}  className="navigation__link">
                            <span>02</span>Rings</a></li>
                        <li className="navigation__item"><a href={"#"}  className="navigation__link">
                            <span>03</span>Neck</a></li>
                        <li className="navigation__item"><a href={"#"}  className="navigation__link">
                            <span>04</span>Ear</a>
                        </li>
                        <li className="navigation__item"><Link to={"/product-list"} onClick={checkedCheckbox} href={"#"}  className="navigation__link">
                            <span>05</span>All lists</Link>
                        </li>

                    </ul>
                </nav>
        </div>
    )
};


const options = ['Search', 'German','France', 'Italy'];

