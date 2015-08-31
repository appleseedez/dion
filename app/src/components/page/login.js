var React = require('react');

var Login = React.createClass({
    render : function(){
        return (
            <div className='login-view'>
                <div className="container one-page">
                    <div className="landing">
                        <span className="tit">登 录 系 统</span>
                        <span className="user">
                            <input type="text" name="user" placeholder="用户名" />
                        </span>
		                <span className="password">
                            <input type="password" name="password" placeholder="密码" />
                        </span>
                        <span className="remen">
                            <input type="checkbox" name="remen" checked="checked" />
                            <b>记住密码</b>
                        </span>
		                <a href="#/forget" style={{float:'right'}}>忘记密码？</a>
                        <div>
                            <input type="submit" value="登录" />
                        </div>
                        <a href="#/register">注册</a>
		            </div>
                </div>
	        </div>
        );
    }
});

module.exports = Login;
