import React from "react";
import Slide from '@material-ui/core/Slide';
import { NavLink } from "react-router-dom";

export default function SubMenu(props) {

  if(!props.showSubMenu) return null;
  
  const subMenu = props.subMenu;

  return (
    <Slide in={props.showSubMenu} direction="right">
      <div className="menu-subcategory menu-list slide">
      {subMenu.map((x, i) => {
        return (
          <NavLink
            to={x.name}
            style={{
              textDecoration: "none",
              color: "rgb(32, 32, 34)",
              marginLeft: 10
            }}
            title={x.name}
            key={x.name}
            activeStyle={{
              color: "#4282ad"
            }}
          >
            <div className="menuItem" >{x.name}</div>
          </NavLink>
        )
      })}
      </div>
    </Slide>
  );
};


