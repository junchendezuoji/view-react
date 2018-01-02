import React from "react";
import ReactDOM from "react-dom";

export default class MobileHeader extends React.Component {
  render(){
    return(
      <div id="mobileheader">
        <header>
          <img src="./src/images/logo.png" alt="logo" />
          <span>ReactNews</span>
        </header>
      </div>
    );
  };
}
