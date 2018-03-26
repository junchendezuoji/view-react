import React from "react";
import MobileHeader from "./mobile_header";
import MobileFooter from "./mobile_footer";
import CommonComments from "./common_comments";
import {Row,Col} from "antd";

export default class MobileNewsDetails extends React.Component {

  constructor(){
    super();
    this.state = {
      newsItem: ''
    };
  };//构造函数设置初值，里面的news用来接受json

  createMarkup(){
    return {__html: this.state.newsItem.pagecontent};
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
      <div id="mobileDetailsContainer">
        <MobileHeader/>
          <div className="ucmobileList">
            <Row>
              <Col span={24} className="container">
                <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                <hr/>
                <CommonComments />
              </Col>
            </Row>
          </div>
        <MobileFooter/>
      </div>
    );
  };
}
