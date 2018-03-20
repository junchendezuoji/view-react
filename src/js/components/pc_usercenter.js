import React from "react";
import ReactDOM from "react-dom";
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import {Router, Route, Link, browserHistory} from 'react-router';
import {Row,Col,Menu,Icon,Tabs,Form,Input,Button,message,CheckBox,Modal,Card,Upload} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

export default class PCUserCenter extends React.Component {

  constructor(){
    super();
  	this.state = {
  		previewImage: '',
  		previewVisible: false
  	};
  };//构造函数设置初值

  render(){

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
          <Col span={2}></Col>
        </Row>
        <PCFooter />
      </div>
    );
  };
}
