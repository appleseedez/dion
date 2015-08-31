var React = require('react');

var Home = React.createClass({
    render : function(){
        return (
            <div className='home-view'>
                <div id="slider_home" className="container slider-box-1-js">
                    <ul className="slider">
                        <li className="item transition-opacity-1">
                            <img src='./assets/img/photo.jpg' />
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div className="index-box" style={{marginRight:'50px'}}>
                        <div>
                            <span className="tit">关于我们</span>
                            <span className="tit2">ABOUT US</span>
                            <a href="about-us.html"><span className="more">更多 >></span></a>
                        </div>
                        <div className="about">XX红酒能拥有世界顶级的优秀品质，当然首先是XX庄园的土壤及所处地方微型气候得天独厚。XX庄园总面积90公顷，每公顷种植八千五百棵葡萄树。其中卡本妮苏维翁占70%左右，梅洛占20%左右，其余为卡本妮弗朗克。平均树龄在四十年以上。每年的产量大约三万箱酒...
                        </div>
                    </div>
                    <div style={{marginRight:'50px'}} className="index-box">
                        <div>
                            <span className="tit">推荐产品</span>
                            <span className="tit2">NEW PRODUCT</span>
                        </div>
                        <div className="details">
                            <span>梦诺骑士干红</span>
                            <ul>
                                <li>产区：西班牙 拉曼查</li>
                                <li>葡萄品种：添帕尼优</li>
                                <li>等级：DO</li>
                                <li>年份：2008</li>
                                <li>酒精度：12%VOL</li>
                                <li>规格：750 ML</li>
                            </ul>
                        </div>
                    </div>
                    <div className="index-box">
                        <div>
                            <span className="tit">企业视频</span>
                            <span className="tit2">VIDEO</span>

                        </div>
                        <div className="video">
                            <div className="filter"><span></span></div>
                        </div>
                    </div>

                </div>

                <div className="clearfix"></div>
            </div>
        );
    }
});

module.exports = Home;
