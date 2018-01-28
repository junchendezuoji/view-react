import React from "react";
import ReactDOM from "react-dom";
import {Row,Col,Menu,Icon,Tabs,Form,Input,Button,message,CheckBox,Modal} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

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
  };//构造函数对state初始值设置

  setModelVisible(value){
    this.setState({modalVisible:value});
  };//改变登陆框状态的函数

  handleClick(e){
    if(e.key="register"){
      this.setState({current:'register'});
      this.setModelVisible(true);
    }
    else {
      {
        this.setState({current:e.key});
      }
    }
  };//导航栏点击哪一个就让谁高亮

  handleSubmit(e){
    //页面开始向 API 进行提交数据
  };

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
      </Menu.Item>;//三元表达式写的一个登录注册板块
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src="./src/images/logo.png" alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col> {/*logo*/}
          <Col span={16}>
            <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
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
            <Modal title="用户中心" wrapClassName="vertical-center-model" visible={this.state.modalVisible} onCancel={()=>this.setModelVisible(false)} onOk={()=>this.setModelVisible(false)} okText="关闭"> {/*里面的参数可去官网查看*/}
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem lable="账户">
                      <Input placeholder="请输入账户名" {...getFieldProps('r_userName')} />
                    </FormItem>
                    <FormItem lable="密码">
                      <Input type="password" placeholder="请设置密码" {...getFieldProps('r_password')} />
                    </FormItem>
                    <FormItem lable="确认密码">
                      <Input type="password" placeholder="确认密码" {...getFieldProps('r_confirmPassword')} />
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>{/*tab切换卡*/}
            </Modal>{/*弹出框*/}
          </Col>{/*导航栏板块*/}
          <Col span={2}></Col>
        </Row>
      </header>
    );
  };
}

export default PCHeader = Form.create({})(PCHeader);//form要求的二次封装
