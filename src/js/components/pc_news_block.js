import React from "react";
import {Card} from "antd";
import {Router,Link,Route,browserHistory} from "react-router";

export default class PCNewsBlock extends React.Component {

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

    const {news} = this.state;//用一个对象接受上面的数据
    const newsList = news.length
    ?news.map((newsItem,index)=>(
      <li key={index}>
        <Link to={`details/${newsItem.uniquekey}`} target="_blank">
          {newsItem.title}
        </Link>
      </li>
    ))
    :"没有加载到数据";//用map函数把下面卡片里的东西输出

    return(
      <div className="topNewsList">
        <Card>
          <ul>
            {newsList}
          </ul>
        </Card>
      </div>
    );
  };
}
