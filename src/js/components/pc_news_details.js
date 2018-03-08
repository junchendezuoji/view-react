import React from "react";
import PCHeader from "./pc_header";
import PCFooter from "./pc_footer";
import PCNewsImageBlock from "./pc_news_image_block";
import {Row,Col} from "antd";

export default class PCNewsDetails extends React.Component {

  constructor(){
    super();
    this.state = {
      newsItem: ''
    };
  };//构造函数设置初值，里面的news用来接受json

  createMarkup(){
    return {__html:this.state.newsItem.pagecontent};
  };//接受到的html数据

  componentDidMount(){
    var myFetchOptions = {
      method:"GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="
    +this.props.params.uniquekey,myFetchOptions)
    .then(response=>response.json())
    .then(json=>{this.setState({newsItem:json});
    document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台"
    })
  };//生命周期函数请求数据

  render(){
    return(
      <div>
        <PCHeader/>
        <Row>
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
          </Col>
          <Col span={6}>
            <PCNewsImageBlock count={40} type="top" width="100%" cartTitle="相关新闻" imageWidth="150px" />
          </Col>
          <Col span={2}></Col>
        </Row>
        <PCFooter/>
      </div>
    );
  };
}
