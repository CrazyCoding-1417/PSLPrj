import React, { Component } from "react";
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
  setLoggedInUser,
  setCheckedOutItems
} from "../../Redux/Actions";
import cartImage from "../../Images/LowesLogo_DT.svg";
import Auth from "../../Auth";
import { categories } from "../../Data";
import Person from "@material-ui/icons/PersonOutline";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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

const categoryOptions = categories.map(x => {
  return (
    <MenuItem key={x.name} value={x.name}>
      {x.name}
    </MenuItem>
  );
});

class ConnectedHeader extends Component {
  constructor(props){
    super(props);
    
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.props.dispatch(toggleMenu());
  }
state = {
      searchTerm: "",
      anchorEl: null,
      categoryFilter: categories[0].name
    };

  render() {
    let { anchorEl } = this.state;

    return ( 
      <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "#FAFAFB", height: 100}}
      >
        <div className="col-centered" style={{ backgroundColor:"#004890", color:"white", height: 30}}>
        {/* <a href="" margin="5" textAlign="center"/> */}
          <p style={{margin:5, textAlign:"center"}}>FREE SHIPPING ON THOUSANDS OF ITEMS WITH MYLOWE'S. SHOP NOW ></p>
        </div> 
        <Toolbar style={{ height: "100%" }} className="container">             
          <div className="left-part">            
            <img
              src={cartImage}
              alt={"Logo"}
              style={{ marginLeft: 10 }}
              width="150"
              height="150"
            />            
          </div>
          <div className="right-part">
            {!this.props.loggedInUser ? (
              <Button
                variant="outlined"
                style={{ marginRight: 20 }}
                color="primary"
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Log in
              </Button>
            ) : (
              <Avatar
                onClick={event => {
                  this.setState({ anchorEl: event.currentTarget });
                }}
                style={{ backgroundColor: "#3f51b5", marginLeft: 50 }}
              >
                <Person />
              </Avatar>
            )}
            <IconButton
              aria-label="Cart"
              style={{ position: "absolute", right: 0 }}
              onClick={() => {
                //this.props.dispatch(showCartDlg(true));
              }}
            >
              <Badge badgeContent={this.props.nrOfItemsInCard} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>            
          </div>             
        </Toolbar>        
      </AppBar>      
          <Toolbar style={{ backgroundColor:"#0471af", color:"white", height: 30}}>
            <div className="left-part left-part--search-menu-bar" >            
              < MenuButton onMouseEnter={this.toggleMenu}/>
            <div backgroundcolor="white" className=" search-input__container">
              <input type="text" placeholder="What are you looking for today?"
              // label="Search products"
              value={this.state.searchTerm}
              onChange={e => {
                this.setState({ searchTerm: e.target.value });
              }}
              // style={{ marginLeft: 20, width: 250, paddingBottom: 14, color:"white", backgroundColor: "white" }}
              style={{ width: 800, padding: 10, backgroundColor: "white"}}
            />
            {/* <Select
              style={{ maxWidth: 200, marginTop: 1, marginLeft: 20 }}
              value={this.state.categoryFilter}
              MenuProps={{
                style: { maxHeight: 300, color:"white"}
              }}
              onChange={e => {
                this.setState({ categoryFilter: e.target.value });
              }}
            >
              {categoryOptions}
            </Select> */}
            <Button
              /* style={{ padding: 10 }}  */
              height="20" width="20"
              style={{ backgroundColor: "white", border:"white", borderWidth:"10"}}
              // variant="outlined"
              // color="primary"
              onClick={() => {
                // Generate new URL to redirect user to
                this.props.history.push(
                  "/search/?category=" +
                    this.state.categoryFilter +
                    "&term=" +
                    this.state.searchTerm
                );
              }}
            >
            <img src = "/Images/SearchIcon.jpg" height="22" width="22"/>
            {/* {" "} Search */}
            </Button>
          </div> 
            </div>                 
        </Toolbar>     

      </div>
    );
  }
}

const Header = withRouter(connect(mapStateToProps)(ConnectedHeader));
export default Header;
