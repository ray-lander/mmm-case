

$(function(){

//请求标题
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getgsshop",        
        success: function(data){
            // console.log(data);
            $(".tit-one").html(template("tpl", data));
        }

    })
//请求列表
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getgsshoparea",
        success: function(data){
            // console.log(data);
            $(".tit-two").html(template("tpl2", data));
        }
    })

    var id = $(".tit-one li").data("id");

    var aid = $(".tit-two li").data("id");

    console.log(id);
    console.log(aid);
    //  请求商品列表
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getgsproduct",
        data: {
            shopid: 0,
            areaid: 0, 
        },
        success: function(data){
            // console.log(data);
            $(".box-item").html(template("tpl3", data));
            
        }
    })

    //遍历标题导航，注册点事件
    $(".gs-tit ul li").each(function(i,e){
        $(e).on("click", function(){
            var index = $(this).index();
            var dataid = $(".tit-slide ul").eq(index).data("index");
            // console.log(dataid);
            $(".tit-slide ul").eq(index).toggleClass("qie").siblings().removeClass("qie");    

        })
        
    })
    //遍历菜单，注册点击事件
    $(".tit-one").on("click", "li> a", function(){
       
        $(".gs-tit ul .lic-one a").text($(this).text());
        $(".tit-slide").toggleClass("qie");
    })

    $(".tit-two").on("click", "li> a", function(){
       var nav = $(this).text();
       nav = nav.slice(0, 2);
    //    console.log(nav);
        $(".gs-tit ul .lic-two a").text(nav);
        $(".tit-slide").toggleClass("qie");
        
    })

})