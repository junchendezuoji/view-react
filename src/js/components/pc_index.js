import React from "react";
import ReactDOM from "react-dom";
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";

export default class PCIndex extends React.Component {
  render(){
    return(
      <div>
        <PCHeader/>
        <PCFooter/>
      </div>
    );
  };
}
