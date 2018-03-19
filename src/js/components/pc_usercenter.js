import React from "react";
import ReactDOM from "react-dom";
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import {Router, Route, Link, browserHistory} from 'react-router';
import {Row,Col,Menu,Icon,Tabs,Form,Input,Button,message,CheckBox,Modal,Card} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {
  render(){
    return(
      <div>
        <PCHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
          <Tabs>
            <TabPane tab="我的收藏列表" key="1">

            </TabPane>
            <TabPane tab="我的评论列表" key="2">

            </TabPane>
            <TabPane tab="我的头像设置" key="3">

            </TabPane>
          </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter />
      </div>
    );
  };
}
