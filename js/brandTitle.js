

$(function(){
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getbrandtitle",
        success: function(data){
            console.log(data);
            $(".brand-list ul").html(template("tpl", data));
        }
    })
})