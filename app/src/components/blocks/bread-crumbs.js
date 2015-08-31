var React = require('react');

var BreadCrumbs = React.createClass({
    componentDidMount : function(){},
    render : function(){
        return (
            <div className="bread-crumbs-view sixteen columns page-title">
                <div style={{marginLeft:'0px'}} className="eight columns omega">
                    <nav className="breadcrumbs">
                        <ul style={{float:'left'}}>
                            <li>
                                <a href="#/">首页</a>
                            </li>
                            <li><b>-</b><span>{this.props.name}</span></li>
                        </ul>
                    </nav>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
});

module.exports = BreadCrumbs;