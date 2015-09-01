var React = require('react');

var Footer = React.createClass({
    render : function(){
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer-bottom clearfix">
                        <span>Copyright &copy; 2014</span><span>版权说明</span>  <span>服务条款</span> <span><a href="#/login">加盟合作</a></span>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;