import React from "react";
import ReactDOM from "react-dom";
import {Row,Col,Menu,Icon,Tabs,Form,Input,Button,message,CheckBox} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

class PCHeader extends React.Component {
  constructor(){
    super();
    this.state={
      current:'toutiao',//导航栏默认选择
      modalVisible:false,//登陆框是否可视
      action:'login',//点击按钮默认登录
      hasLogined:false,//是否已经登录
      userNikeName:'',//用户登录昵称
      userid:0,
    };
  }
  render(){
    let {getFieldProps} = this.props.form;//接受form的参数
    const userShow = this.state.hasLogined
    ? <Menu.Item key="logout" class="register">
        <Button type="primary" htmlType="button">{this.state.userNikeName}</Button>//button的type可去官网看
        &nbsp;&nbsp;
        <Link target="_blank">
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button>
      </Menu.Item>//登录之后的导航栏显示
    : <Menu.Item key="register" class="register">
        <Icon type="appstore" />注册/登录
      </Menu.Item>;
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src="./src/images/logo.png" alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="toutiao"><Icon type="appstore" />头条</Menu.Item>
              <Menu.Item key="shehui"><Icon type="appstore" />社会</Menu.Item>
              <Menu.Item key="guonei"><Icon type="appstore" />国内</Menu.Item>
              <Menu.Item key="guoji"><Icon type="appstore" />国际</Menu.Item>
              <Menu.Item key="yule"><Icon type="appstore" />娱乐</Menu.Item>
              <Menu.Item key="tiyu"><Icon type="appstore" />体育</Menu.Item>
              <Menu.Item key="keji"><Icon type="appstore" />科技</Menu.Item>
              <Menu.Item key="shishang"><Icon type="appstore" />时尚</Menu.Item>
              {userShow}
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    );
  };
}

export default PCHeader = Form.create({})(PCHeader);//form要求的二次封装
