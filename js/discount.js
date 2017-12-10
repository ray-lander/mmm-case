

$(function(){

   console.log(Tools);

    //发送ajax请求
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getdiscountproduct",
        data: {
            productid: Tools.getParam("productid"),
        },
        success: function(data){
            console.log(data);
            $(".container").html(template("tpl", data));

            goTop();
        }
    })


})