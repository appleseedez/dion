var React = require('react');

var Register = React.createClass({
    render : function(){
        return (
            <div className='register-view container'>
                <div className="register">
                    <div className="text">
                        <span>
                            <b>推荐码:</b>
                            <input type="text" name="recom-num" />
                        </span>
                        <span>
                            <b>用户名:</b>
                            <input type="text" name="id" />
                        </span>
                        <span>
                            <b>密码:</b>
                            <input type="password" name="pass-num" />
                        </span>
                        <span>
                            <b>姓名:</b>
                            <input type="text" name="name" />
                        </span>
                        <span style={{marginRigth:'40px'}}>
                            <b>性别:</b>
                            <label><input type="radio" name="sex" value="male" /><b>男</b></label>
                            <label><input type="radio" name="sex" value="male" /><b>女</b></label>
                            <label><input type="radio" name="sex" value="secrecy" /><b>保密</b></label>
                        </span>
                        <span>
                            <b>所在地:</b>
                            <select>
                                <option>四川</option>
                                <option>天津</option>
                                <option>北京</option>
                                <option>上海</option>
                                <option>湖南</option>
                                <option>湖北</option>
                                <option>重庆</option>
                            </select>
                        </span>
                        <span>
                            <b>手机号码:</b>
                            <input type="text" name="tel-num" />
                        </span>
                        <span>
                            <b>备用号码:</b>
                            <input type="text" name="tel-num-2" />
                        </span>
                        <span>
                            <b>身份证号码:</b>
                            <input type="text" name="id-num" />
                        </span>
                        <span style={{height:'56px'}}>
                            <b>详细地址:</b>
                            <textarea name="a" style={{width:'210px',height:'50px'}}></textarea>
                        </span>
                        <span classNam="yzm">
                            <b>验证码:</b>
                            <input type="text" name="yzm" /><div></div>
                            <img src="" width="80" height="26"/>
                        </span>
                        <span>
                            <input type="checkbox" name="bike"  checked="checked" />
                            <b>同意</b><a href="#">注册协议</a>
                        </span>
                    </div>
                    <div className="remind float-01">这是提示啊提示!</div>
                    <div className="remind float-02">这是提示啊提示!</div>
                    <div className="remind float-03">这是提示啊提示!</div>
                    <div className="remind float-04">这是提示啊提示!</div>
                    <div className="remind float-05">这是提示啊提示!</div>
                    <div className="remind float-06">这是提示啊提示!</div>
                    <div className="remind float-07">这是提示啊提示!</div>
                    <div className="remind float-08">这是提示啊提示!</div>
                    <div><input type="submit" value="注册" /></div>
			    </div>
            </div>
        );
    }
});

module.exports = Register;
