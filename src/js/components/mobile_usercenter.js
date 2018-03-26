import React from "react";
import ReactDOM from "react-dom";
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import {Router, Route, Link, browserHistory} from 'react-router';
import {Row,Col,Menu,Icon,Tabs,Form,Input,Button,message,CheckBox,Modal,Card,Upload} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class MobileUserCenter extends React.Component {

  constructor(){
    super();
  	this.state = {
      usercollection:'',
      usercommments:'',
  		previewImage: '',
  		previewVisible: false
  	};
  };//构造函数设置初值

  componentDidMount(){
    var myFetchOptions = {
      method : "GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid="+localStorage.userid,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({
        usercollection:json
      });
    });
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid="+localStorage.userid,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{
      this.setState({
        usercommments:json
      });
    });
  };//组件加载完成的时候请求到信息

  render(){

    const {usercollection,usercommments} = this.state;
    const usercollectionList = usercollection.length
    ?usercollection.map((uc,index)=>(
      <Card key={index} title={uc.uniqueky} extra={<a href={'/#/details/${uc.uniqueky}'}>查看</a>} >
        <p>{uc.Title}</p>
      </Card>
    ))
    :'您还没有收藏新闻!';//收藏列表展示

    const usercommmentsList = usercommments.length
    ?usercommments.map((comment,index)=>(
      <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniqueky}`} extra={<a href={'/#/details/${comment.uniqueky}'}>查看</a>} >
        <p>{comment.Comments}</p>
      </Card>
    ))
    :'您还没有评论!';//评论列表展示

    const props = {
      action: 'http://newsapi.gugujiankong.com/handler.ashx',
      headers:{
        "Access-Control-Allow-Origin":"*"
      },
      listType: 'picture-card',
      defaultFileList:[
        {
          uid:-1,
          name:'xxx.png',
          state:'done',
          url:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
			    thumbUrl:'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        }
      ],
      onPreview: (file)=>{
		      this.setState({previewImage:file.url,previewVisible:true});
	    }
    };//上传图片的组件参数设置

    return(
      <div>
        <MobileHeader />
        <Row>
          <Col span={24}>
          <Tabs>
            <TabPane tab="我的收藏列表" key="1">
              <div className="commet">
                <Row>
                  <Col span={24}>{usercollectionList}</Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="我的评论列表" key="2">
              <div className="commet">
                <Row>
                  <Col span={24}>{usercommmentsList}</Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="我的头像设置" key="3">
              <div className="clearfix">
                <Upload {...props}>
                  <Icon type="plus"/>
                  <div className="ant-upload-text">上传照片</div>
                </Upload>
                <Modal visible ={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="预览" src={this.state.previewImage}/>
                </Modal>
              </div>
            </TabPane>
          </Tabs>
          </Col>
        </Row>
        <MobileFooter />
      </div>
    );
  };
}
