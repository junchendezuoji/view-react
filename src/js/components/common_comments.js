import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory} from 'react-router';
import {Row,Col,Menu,Icon,Tabs,Form,Input,Button,message,CheckBox,Modal,Card} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class CommonComments extends React.Component {
  constructor(){
    super();
    this.state = {
      comments : ""
    };
  };//构造函数以后用来接收这篇文章的历史评论

  componentDidMount(){
    var myFetchOptions = {
      method:"GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="
    +this.props.uniquekey,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{this.setState({comments:json});
    })
  };//生命周期函数请求数据

  handleSubmit(e){
    e.preventDefault();
    var myFetchOptions = {
      method:"GET"
    };
    var formdata = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid="
    +localStorage+"&uniquekey="
    +this.props.uniquekey+"&commnet="
    +formdata.remark
    ,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{this.componentDidMount();
    })
  };//提交评论

  render(){
    let {getFieldProps} = this.props.form;
    const {comments} = this.state;
    const commnetList = comments.length
    ?comments.map((comment,index)=>(
      <Card key={index} title={comment.UserName} extra={<a href = "#"> 发布于 {comment.datetime} </a>}>
					<p>{comment.Comments}</p>
			</Card>
    ))
    :"没有加载到评论";

    return(
      <div className="comment">
        <Row>
          <Col span={24}>
          {commnetList}
            <Form onSubmit ={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="请提交评论" {...getFieldProps('remark',{initialValue: ''})}/>
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  };
}

export default CommonComments = Form.create({})(CommonComments);//form要求的二次封装
