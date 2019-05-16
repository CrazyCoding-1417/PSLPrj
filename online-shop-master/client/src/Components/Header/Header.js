import React, { useState, useReducer } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";

import Badge from "@material-ui/core/Badge";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
    showCartDlg,
    toggleMenu,
} from "../../Redux/Actions";
import cartImage from "../../Images/LowesLogo_DT.svg";
import Auth from "../../Auth";
import { categories } from "../../Data";
import Person from "@material-ui/icons/PersonOutline";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import MenuButton from "../Menu/MenuButton";

const mapStateToProps = state => {
    return {
        nrOfItemsInCard: state.cartItems.length,
        loggedInUser: state.loggedInUser,
        showMenu: state.showMenu
    };
};

const ConnectedHeader = props => {
  function showMenu() {
    props.dispatch(toggleMenu());
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(categories[0].name);

  return (
      <div>
    <AppBar
      position="static"
      style={{ backgroundColor: "#FAFAFB", height: 100}}
    >
      <div className="col-centered" style={{ backgroundColor:"#004890", color:"white", height: 30}}>
        <p style={{margin:5, textAlign:"center"}}>FREE SHIPPING ON THOUSANDS OF ITEMS WITH MYLOWE'S. SHOP NOW ></p>
      </div> 
      <Toolbar style={{ height: "100%" }} className="container">
        <div className="left-part">
          <a href="/">
            <img
              src={cartImage}
              alt={"Logo"}
              style={{ marginLeft: 10 }}
              width="150"
              height="150"
            />
          </a>
        </div>
        <div className="right-part">
          {!props.loggedInUser ? (
            <Button
              variant="outlined"
              style={{ marginRight: 20 }}
              color="primary"
              onClick={() => {
                props.history.push("/login");
              }}
            >
              Log in
            </Button>
          ) : (
            <Avatar
              onClick={(e) => setAnchorEl(e.currentTarget)}
              style={{ backgroundColor: "#3f51b5", marginLeft: 50 }}
            >
              <Person />
            </Avatar>
          )}
          <IconButton
            aria-label="Cart"
            style={{ position: "absolute", right: 0 }}
            onClick={() => {
              props.dispatch(showCartDlg(true));
            }}
          >
            <Badge badgeContent={props.nrOfItemsInCard} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
        <Toolbar style={{ backgroundColor:"#0471af", color:"white", height: 30}}>
          <div className="left-part left-part--search-menu-bar" >
            <MenuButton onMouseEnter={showMenu}/>
              <div backgroundcolor="white" className=" search-input__container">
                <input type="text" placeholder="What are you looking for today?"
                value={searchTerm}
                onChange={e => {
                  this.setState({ searchTerm: e.target.value });
                }}
                style={{ width: 800, padding: 10, backgroundColor: "white"}}
              />
              <Button
                height="20" width="20"
                style={{ backgroundColor: "white", border:"white", borderWidth:"10"}}
                onClick={() => {
                  // Generate new URL to redirect user to
                  props.history.push(
                    "/search/?category=" +
                      this.state.categoryFilter +
                      "&term=" +
                      this.state.searchTerm
                  );
                }}
              >
              <img src = "/Images/SearchIcon.jpg" height="22" width="22" alt="search icon" />
              </Button>
            </div>
          </div>
      </Toolbar>
    </div>
  );
}

const Header = withRouter(connect(mapStateToProps)(ConnectedHeader));
export default Header;