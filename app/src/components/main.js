var React = require('react');
var ReactRouter = require('react-router');
var RouterHanlder = ReactRouter.RouteHandler;
var Header = require('./public/header.js');
var Footer = require('./public/footer.js');

var Main = React.createClass({
    render : function(){
        return (
            <div className='page-view' id='pageView'>
                <Header />
                <RouterHanlder />
                <Footer />
            </div>
        )
    }
});

module.exports = Main;