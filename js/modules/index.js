/**
  项目JS主入口
  以依赖Layui的layer和form模块为例
**/  
layui.define(['layer', 'form'], function(exports) {
    var layer = layui.layer
    ,form = layui.form;

    layer.msg('欢迎使用');

    exports('index', {});
});
