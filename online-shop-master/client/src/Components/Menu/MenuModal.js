import React, { Component } from "react";

export default function MenuModal(...props) {

  if(!props[0].showSubMenu) return null;

  return (
    <div className="menu-modal"
        onMouseEnter={props[0].onMouseEnter}
    ></div>
  );
};


