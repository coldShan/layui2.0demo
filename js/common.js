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
            sessionStorage.password = password;
            layer.msg('欢迎您，管理员大人', {
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

    //检查登录状态
    $(function () {
        checkRight(); // 检查登录状态
        
    })
    function checkRight() {
        var addr = location.href.split("/");
        console.log(addr[addr.length-1]);
        if(addr[addr.length-1] !== "login2.html" && addr[addr.length-1] !== "login.html") {
            if (sessionStorage.password !== password) {
                location.href = "./login2.html";
            } else {
                return;
            }
        }
    }
});

//自动登录
//写cookies函数
function SetCookie(name, value) //两个参数，一个是cookie的名子，一个是值
{
    var Days = 15;
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //此 cookie 将被保存 15天
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
//取cookies函数
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}
//删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
}


