var React = require('react');
var BreadCrumbs = require('../blocks/bread-crumbs.js');

var About = React.createClass({
    render : function(){
        return (
            <div className='about-view'>
                <div className="container">
                    <BreadCrumbs name={'关于我们'} />
                </div>
                <div className="container">
                    <ul className="ul-pic">
                        <li className="pic01"></li>
                        <li className="pic02"></li>
                        <li className="pic03"></li>
                        <li className="pic04"></li>
                        <li className="pic05"></li>
                        <li className="pic06"></li>
                    </ul>
                </div>
                <div className="container">
                    <p className="about-us">
                        XX红酒能拥有世界顶级的优秀品质，当然首先是XX庄园的土壤及所处地方微型气候得天独厚。XX庄园总面积90公顷，每公顷种植八千五百棵葡萄树。其中卡本妮苏维翁(Cabernet Sauvignon)占70%左右，梅洛(Merlot)占20%左右，其余为卡本妮弗朗克(Cabernet Franc)。平均树龄在四十年以上。每年的产量大约三万箱酒(每箱12支750ml算)。此产量居所有世界顶级名庄之冠。以此产量及其能维持的价格相比，XX庄的成就真是无人能及。XX庄的葡萄种植采用非常传统的方法，基本不使用化学药物和肥料，以小心的人工呵护法，让葡萄完全成熟才采摘。在采摘时熟练的工人会对葡萄进行树上采摘筛选，不好不采。葡萄采摘后送进压榨前会被更高级的技术工人进行二次筛选，确保被压榨的每粒葡萄都达高质要求。在XX每2至3棵葡萄树才能生产一瓶750ml的酒。

                        能拥有世界顶级的优秀品质，当然首先是XX庄园的土壤及所处地方微型气候（Micro Climate）得天独厚。其中卡本妮苏维翁（Cabernet Sauvignon）占70%左右，梅洛（Merlot）占20%左右，其余为卡本妮弗朗克（Cabernet Franc）。平均树龄在四十年以上，每年的产量大约三万箱酒（每箱12支750ml算）。确保被压榨的每粒葡萄都达到高质要求。在XX每2至3棵葡萄树才能生产一瓶750ml的酒。为了保护这些矜贵的葡萄树，如没有总公司的特约，XX庄一般是不允许别人参观的。除此之外，XX庄还是出名愿花重本雇用最顶级酿酒大师的名庄。XX酒的个性温柔婉细，较为内向，不像同产于菩依乐村的两大名庄拉图和武当王的刚强个性。XX的花香、果香突出，芳醇柔顺，所以很多葡萄酒爱好者称XX为葡萄酒王国中的“皇后”。

                        除XX外，罗斯柴尔德家族在波尔多、智利、意大利、葡萄牙以及希腊均拥有不少的优质名园和葡萄酒品牌。其中饮家较为熟知的波尔多名庄有宝物隆的“依云卓”L'Evangile “杜哈米雍”Ch. Duhart Milon，XX的副牌酒“小XX”Carruades de Lafite和都夏美隆副牌“杜哈磨坊”Moulin de Duhart，而希腊亚历山大干红“Alexander dry red wine”则是在希腊饮用最多的红酒。

                    </p>
                </div>
                <div className="container contact">
                    <div>联系方式</div>
                    <ul>
                        <li>某某某有限责任公司</li>
                        <li>地址：XX省XX市XX区XXX街道XXX号XX楼XX层XX号</li>
                        <li>联系电话：028-XXXXXXXX</li>
                        <li>传真：028-XXXXXXXX</li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = About;
