import React from "react";
import "./navbar.css";


export default props=>{

    return(
        <div className="navigation">

            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp; </span>

                </label>
                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                   <ul className={"navigation__topbar"}>
                       <li className={"navigation__topbar_list navigation__topbar_icon"}><a>Icon</a></li>
                       <li className={"navigation__topbar_list"}><a>Login</a></li>
                       <li className={"navigation__topbar_list"}><a>Create An Account</a></li>
                       <li className={"navigation__topbar_list"}><a>Search</a></li>
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

                    </ul>
                </nav>
        </div>
    )
};


