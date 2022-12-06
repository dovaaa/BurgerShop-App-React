import Aux from "../../hoc/auxil";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import React from "react";
class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  };
  SideDrawerClosedhandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = ()=>{
    this.setState(
        (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        }
    );
  }
  
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedhandler}></SideDrawer>
        <main className={"Content"}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
