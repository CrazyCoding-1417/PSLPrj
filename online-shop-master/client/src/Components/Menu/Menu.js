import React, { Component } from "react";
import "./Menu.css";
import { loadCSS } from "fg-loadcss/src/loadCSS";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { dataForRenderingMenu } from "../../Data";

import MenuMain from "./MenuMain";
import SubMenu from "./SubMenu";
import MenuModal from "./MenuModal";


import {
  toggleMenu,
} from "../../Redux/Actions";

const mapStateToProps = state => {
  return {
    showMenu: state.showMenu,
    checkedOutItems: state.checkedOutItems,
    loggedInUser: state.loggedInUser,
    showSubMenu: false,
    subMenu:[]
  };
};
 

class ConnectedMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems:dataForRenderingMenu,
      subMenu:[]
    };

      this.mouseHandler = this.mouseHandler.bind(this);
      this.toggleSubMenu = this.toggleSubMenu.bind(this);
  }

  componentDidMount() {
    loadCSS("https://use.fontawesome.com/releases/v5.1.0/css/all.css");
  }

  toggleSubMenu(...props){
    if(props[0].length > 0){
      this.setState({subMenu: props[0]})
      this.setState({showSubMenu: true});
    }else{
         this.setState({showSubMenu: false});
    }
  }

  mouseHandler(){
       this.setState({subMenu: [] });
       this.setState({showSubMenu: false});
       this.props.dispatch(toggleMenu());
  }

  render() {
    if (!this.props.showMenu) return null;
    return (
      <>
      <MenuMain  showMenu={this.props.showMenu} showSubMenu={this.state.showSubMenu} menuItems={this.state.menuItems} toggleSubMenu={this.toggleSubMenu} toggleMenu={this.toggleMenu} {...this.props}>
        <SubMenu showSubMenu={this.state.showSubMenu} subMenu={this.state.subMenu}/>
      </MenuMain>
      <MenuModal {...this.props} onMouseEnter={this.mouseHandler} showSubMenu={this.state.showSubMenu} />
    </>
    );
  }
}
const Menu = withRouter(connect(mapStateToProps)(ConnectedMenu));
export default Menu;