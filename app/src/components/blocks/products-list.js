var React = require('react');

var ProductsList = React.createClass({
    render : function(){
        return (
            <div className='products-list-view product-box'>
                <div className="box-01">
                    <div className="pic"><img src="images/product/hj-01.jpg" /></div>
                    <span>长城四星赤霞珠</span>
                </div>
            </div>
        );
    }
});

module.exports = ProductsList;

