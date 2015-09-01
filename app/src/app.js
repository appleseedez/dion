var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./config/routes.js');

/*
React.render(
    <div><h1>哈哈哈哈哈哈哈哈呵呵呵呵呵呵呵呵额呵呵呵</h1></div>,
    $("#rootView")[0]
);
*/

// 将匹配的路由渲染到 DOM 中
ReactRouter.run(routes, function(Root){
    React.render(<Root />,$("#rootView")[0]);
});
