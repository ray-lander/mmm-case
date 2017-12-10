
$(function(){
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getbrand",
        data: {
            brandtitleid: Tools.getParam("brandtitleid"),
        },
        success: function(data){
            console.log(data);
            $(".brand-list ul").html(template("tpl", data));
        }
    })

    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getbrandproductlist",
        data: {
            brandtitleid: Tools.getParam("brandtitleid"),
            pagesize: 4, 
        },
        success: function(data){
            console.log(data);
            $(".set-item").html(template("tpl2", data));
        }
    })


     $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getproductcom",
        data: {
            productid: 1,
        },
        success: function(data){
            console.log(data);
            $(".brand-content").html(template("tpl3", data));
        }
        
    })

})

