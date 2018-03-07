import React from "react";
import {Row,Col,Tabs,Carousel} from "antd";
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block"
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
  render(){

    const settings = {
      dots:true,
      infinite:true,
      speed:400,
      slidesToShow:1,
      autoplay:true
    };//轮播图参数设置

    return(
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="container">
          <div className="leftContainer">
            <div className="carousel">
              <Carousel {...settings}>
                <div><img src="./src/images/carousel_1.jpg" /></div>
                <div><img src="./src/images/carousel_2.jpg" /></div>
                <div><img src="./src/images/carousel_3.jpg" /></div>
                <div><img src="./src/images/carousel_4.jpg" /></div>
              </Carousel>
            </div>{/* 左边轮播图 */}
            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px" />
          </div>
          <Tabs className="tabs_news">
							<TabPane tab="头条新闻" key="1">
								<PCNewsBlock count={21} type="top" width="100%" bordered="false" />
							</TabPane>
              <TabPane tab="社会" key="2">
								<PCNewsBlock count={21} type="shehui" width="100%" bordered="false" />
							</TabPane>
              <TabPane tab="国内" key="3">
								<PCNewsBlock count={21} type="guonei" width="100%" bordered="false" />
							</TabPane>
              <TabPane tab="国际" key="4">
								<PCNewsBlock count={21} type="guoji" width="100%" bordered="false" />
							</TabPane>
					</Tabs>{/* 新闻列表 */}
          <div>
            <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px" />
            <PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
          </div>{/* 三行图片新闻 */}
        </Col>
        <Col span={2}></Col>
      </Row>
    );
  };
}
