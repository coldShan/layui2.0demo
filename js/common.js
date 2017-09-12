; var username = 'admin'; // 用户名
var password = 'admin123'; // 密码
layui.use(['form', 'layer', 'jquery'], function () {
    var layer = layui.layer;
    var form = layui.form;
    var $ = layui.$;

    $("#username").val('admin');
    $("#password").val('admin123');
    layer.tips('用户名：admin', '#username', {
        tipsMore: true,
        time: 0
    });
    layer.tips('密码：admin123', '#password', {
        tipsMore: true,
        time: 0
    });
    // 登录
    form.on('submit(login-btn)', function (data) {
        if (data.field.username === username && data.field.password === password) {
            // login
            layer.msg('欢迎您，管理员大人',{
                time: 800,
                icon: 6
            },
                function () {
                    location.href = './table.html';
                }
            );
        } else {
            layer.msg('用户名或密码有误，请重新输入');
        }
        return false;
    });
    $("#password").keyup(function (event) {
        if (event.keyCode === 13) {
            $(".login-btn").click();
        }
    });

})