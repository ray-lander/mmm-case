
$(function(){
    
    

    //发送ajax请求渲染导航
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getindexmenu",
        success: function(data){
            // console.log(data);
            $(".nav-one").html(template("tpl", data));

            //发送ajax请求渲染商品列表
            $.ajax({
                type: "get",
                url: "http://localhost:9090/api/getmoneyctrl",
                success: function(data){
                    console.log(data);
                    $(".cate-item").html(template("tpl2", data));
                }
            })


           //导航栏动画
            $(".nav-one li").each(function(i, v){
                $(".list-more").on("click", function(){
                    // console.log(i);      
                    if(i > 7){                
                        $(".nav-one li").eq(i).toggleClass("qie");
                    }
                })
                
            });

            
        }
    })

})






