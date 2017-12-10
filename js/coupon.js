
$(function(){

    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getcoupon",
        success: function(data){
            console.log(data);
            $(".main-box").html(template("tpl", data));
        }
    })


})











