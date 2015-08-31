var React = require('react');

var Header = React.createClass({

    componentDidMount : function(){
        var $main_menu = $('.main_menu');
        var $menus = $('li',$main_menu);

        $menus.each(function(){
            $(this).bind('click',function(){
                $menus.removeClass('current_page_item');
                $(this).addClass('current_page_item');
            });
        });

        var location = window.location.hash.substr(2);
    },

    render : function(){
        return (
            <header className="header">
                <div className="container">
                    <div className="logos columns">
                        <h1 className="logo"><a href="index.html"><img src="images/logo.png" alt="EVOLVE" /></a></h1>
                    </div>
                    <nav className="main_menu">
                        <ul>
                            <li className="current_page_item">
                                <a href="#/">
                                    <span>首页</span>
                                    <div className="sub">
                                        <span>Home page</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#/about">
                                    <span>关于我们</span>
                                    <div className="sub">
                                        <span>About us</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#/products">
                                    <span>产品中心</span>
                                    <div className="sub">
                                        <span>Product center</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
});

module.exports = Header;
