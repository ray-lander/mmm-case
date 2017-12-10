
$(function(){

    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getsitenav",
        success: function(data){
            console.log(data);
            $(".site-main ul").html(template("tpl", data));
        }
    })

})