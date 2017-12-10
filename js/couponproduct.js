

$(function(){

    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getcouponproduct",
        data: {
            couponid: Tools.getParam("couponid"),
        },
        success: function(data){
            console.log(data);
            $(".cou-item").html(template("tpl", data));

            goTop();
        }
    })


})