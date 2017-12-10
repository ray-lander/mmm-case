$(function () {
    //发送ajax
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getbaicaijiatitle",
        success: function (data) {
            // console.log(data);
            $(".main-tit ul").html(template("tpl", data));
            
            goTop();

            //发送ajax请求商品列表页面
           
            //遍历导航栏给导航栏注册点击事件
                    $(".main-tit ul li").each(function () {
                        $(this).click(function () {
                            //     var index =  $(this).next().index();
                            var id = $(this).children().data("id");
                            console.log(id);
                            location.href = "baicaijia.html?titleid=" + id;
                            // render(id);
                            // //获取id
                            // var search = location.search;
                            // console.log(search);

                            //发送ajax请求，重新攒渲染页面

                        })
                    })
        }
    })

    var id = Tools.getParam("titleid") || 0;
    console.log(id);
       render(id);

    function render(id) {
        $.ajax({
            type: "get",
            url: "http://localhost:9090/api/getbaicaijiaproduct",
            data: {
                titleid: id,
            },
            success: function (data) {
                console.log(data);

                $(".lis-item").html(template("tpl2", data));

            }
        })
    }


})