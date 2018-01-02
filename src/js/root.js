import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';

export default class Root extends React.Component{
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>{/*当前屏幕最小为1224px时，为pc端*/}
          <PCIndex />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>{/*当前屏幕最大为1224px时，为mobile端*/}
          <MobileIndex />
        </MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
