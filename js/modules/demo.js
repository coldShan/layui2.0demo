layui.define(['layer'], function(exports) {
    var obj = {
        welcome: function(str) {
            layer.msg('welcome ' + (str || 'master'));
        }
    };
    exports('demo', obj);
})