import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMore from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

export default function MenuButton(...props) {
    return (
        <IconButton
            className="menu-button"
            disableRipple
            onMouseEnter={props[0].onMouseEnter}
        >
            <MenuIcon style={{ color: "white" }} className="menu-button__icon menu-button__icon--menu-icon" size="medium" />
            <p className="menu-button__text">Departments</p>
            <ExpandMore style={{ color: "white" }} className="menu-button__icon menu-button__expand-icon" size="medium" />
        </IconButton>
    );
};
