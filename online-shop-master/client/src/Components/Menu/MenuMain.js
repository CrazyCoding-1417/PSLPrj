import React from "react";
import Grow from '@material-ui/core/Grow'
import { NavLink } from "react-router-dom";
import queryString from "query-string";

export default function MenuMain(...props) {
    return (
       <Grow in={props[0].showMenu}>
      <div
        className="menuMain__container"
        onMouseLeave={()=>{
        if(props[0].showSubMenu){
          return false
        }
        //props[0].toggleMenu();
      }}>
       <div className="menuMain">
        {props[0].menuItems
          .filter(y => {
            // If needed, filter some menu items first.
            //if (y.parentID && !this.state.expandedItems[y.parentID]) return false;
            //if (y.protected && !this.props.loggedInUser) return false;
            return true;
          })
          .map((x, i) => {
            if (x.type === "item") {
              return (

                <NavLink
                  to={x.url}
                  exact
                  isActive={(_, location) => {

                    // If there is a query string, we have some manual way to decide which menu item is active.
                    if (location.search) {
                      let categoryFromQS = queryString.parse(location.search)
                        .category;
                      let isDirectClick =
                        queryString.parse(location.search).term === undefined;
                      return isDirectClick && x.name === categoryFromQS;
                    }

                    return x.url === location.pathname;
                  }}
                  style={{
                    textDecoration: "none",
                    color: "rgb(32, 32, 34)",
                    marginLeft: 10
                  }}
                  title={x.name}
                  key={x.id}
                  activeStyle={{
                    color: "#4282ad"
                  }}
                >
                  <div className="menuItem"
                  onMouseEnter={(event)=>{
                    const cat = event.currentTarget.parentElement.title;
                    const m = props[0].menuItems.filter((x)=>{
                        if(x.name === cat){
                          return x.subCategory
                        }
                    });
                    props[0].toggleSubMenu(m[0].subCategory);

                  }}
                  >
                    {x.name}
                  </div>

                </NavLink>
             );
            }

            return null;
          })}

      </div>
      {props[0].children}
      </div>
      </Grow>
    );
};
