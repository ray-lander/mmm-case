
$(function(){

    //发送ajax请求
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getinlanddiscount",
        success: function(data){
            console.log(data);
            $(".land-box").html(template("tpl", data));

            //返回顶部
            goTop();
        }
    })


})







