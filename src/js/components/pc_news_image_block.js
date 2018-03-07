import React from "react";
import {Card} from "antd";
import {Router,Link,Route,browserHistory} from "react-router";

export default class PCNewsImageBlock extends React.Component {

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
    +this.props.type+"&count="+this.props.count, myFetchOptions)
    .then(response => response.json()).then(json => this.setState({news: json}));
  };//生命周期函数用来请求数据，赋值

  render(){
    const styleImage = {
      display:"block",
      width:this.props.imageWidth,
      height:"90px"
    };//下面的样式定义
    const styeH3 = {
      width:this.props.imageWidth,
      whiteSpace:"nowrap",
      overflow:"hidden",
      textOverflow:"ellipsis"
    };//下面的样式定义
    const {news} = this.state;//用一个对象接受上面的数据
    const newsList = news.length
    ?news.map((newsItem,index)=>(
      <div key={index} className="imageblock">
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
          <div className="custom-image">
            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s} />
          </div>
          <div className="custom-card">
            <h3 style={styeH3}>{newsItem.title}</h3>
            <p>{newsItem.author_name}</p>
          </div>
        </Link>
      </div>
    ))
    :"没有加载到数据";//用map函数把下面卡片里的东西输出

    return(
      <div className="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
          {newsList}
        </Card>
      </div>
    );
  };
}
