document.writeln(
    '<div class="layui-layout layui-layout-admin">'+
    '<div class="layui-header">'+
        '<div class="layui-logo">不存在的后台管理系统</div>'+
        '<ul class="layui-nav layui-layout-left">'+
            '<li class="layui-nav-item"><a href="./timeline.html">首页</a></li>'+
            '<li class="layui-nav-item"><a href="#">头部导航一</a></li>'+
            '<li class="layui-nav-item"><a href="#">头部导航二</a></li>'+
            '<li class="layui-nav-item">'+
                '<a href="#">职业</a>'+
                '<dl class="layui-nav-child">'+
                    '<dd><a>编辑</a></dd>'+
                    '<dd><a>记者</a></dd>'+
                    '<dd><a>程序员大人</a></dd>'+
                '</dl>'+
            '</li>'+
        '</ul>'+
        '<ul class="layui-nav layui-layout-right">'+
            '<li class="layui-nav-item">'+
                '<a><img src="./img/userIcon.jpg" class="layui-nav-img" alt="">邢看山</a>'+
                '<dl class="layui-nav-child">'+
                    '<dd><a>基本资料</a></dd>'+
                    '<dd><a>账户设置</a></dd>'+
                '</dl>'+
            '</li>'+
            '<li class="layui-nav-item"><a href="./login.html">退出</a></li>'+
        '</ul>'+
    '</div>'+
    '<div class="layui-side layui-bg-black">'+
    '<div class="layui-side-scroll">'+
        '<ul class="layui-nav layui-nav-tree" lay-filter="navTree">'+
            '<li class="layui-nav-item layui-nav-itemed">'+
                '<a>主要模块</a>'+
                '<dl class="layui-nav-child">'+
                    '<dd><a href="./table.html">表格<span class="layui-badge">new</span></a></dd>'+
                    '<dd><a href="./form.html">表单</a></dd>'+
                '</dl>'+
            '</li>'+
            '<li class="layui-nav-item layui-nav-itemed">'+
                '<a>工具</a>'+
                '<dl class="layui-nav-child">'+
                    '<dd><a href="./progress.html">进度条</a></dd>'+
                    '<dd><a href="./carousel.html">轮播图</a></dd>'+
                    '<dd><a href="./timeline.html">时间轴</a></dd>'+
                    '<dd><a href="./tree.html">树形菜单</a></dd>'+
                '</dl>'+
            '</li>'+
            '<li class="layui-nav-item"><a>帮助中心</a></li>'+
        '</ul>'+
    '</div>'+
'</div>'
);