import React from "react";
import ReactDOM from "react-dom";
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";

export default class MobileIndex extends React.Component {
  render(){
    return(
      <div>
        <MobileHeader />
        <MobileFooter />
      </div>
    );
  };
}
