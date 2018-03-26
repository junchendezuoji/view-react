import React from "react";
import {Row,Col} from "antd";
import {Router,Link,Route,browserHistory} from "react-router";

export default class MobileList extends React.Component {

  constructor(){
    super();
    this.state = {
      news:""
    };
  };//构造函数设置初值，里面的news用来接受json

  componentWillMount(){
    var myFetchOptions = {
      method:"GET"
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="
    +this.props.type+"&count="
    +this.props.count, myFetchOptions)
    .then(response => response.json()).then(json => this.setState({news: json}));
  };//生命周期函数用来请求数据，赋值

  render(){

    const {news} = this.state;//用一个对象接受上面的数据
    const newsList = news.length
    ?news.map((newsItem,index)=>(
      <section key={index} className="m_article list-item special-section clearfix">
        <Link to={`details/${newsItem.uniquekey}`}>
          <div className="m_article_img">
            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
          </div>
          <div className="m_article_info">
            <div className="m_article_title">
              <span>{newsItem.title}</span>
            </div>
          </div>
          <div className="m_article_desc clearfix">
            <div className="m_article_desc_l">
              <span className="m_article_channel">{newsItem.realtype}</span>
              <span className="m_article_time">{newsItem.date}</span>
            </div>
          </div>
        </Link>
      </section>
    ))
    :"没有加载到数据";//用map函数把下面卡片里的东西输出

    return(
      <div>
        <Row>
          <Col span={24}>{newsList}</Col>
        </Row>
      </div>
    );
  };
}
