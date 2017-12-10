

$(function(){

    //获取id
    var search = location.search;
    search = decodeURI(search);    
    var s = search.slice(1);   
    var arr = s.split("=");    
    var id = arr[1];
    console.log(id);

    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getmoneyctrlproduct",
        data: {
            productid: id,
        },
        success: function(data){
            console.log(data);
            $(".container").html(template("tpl", data));

            goTop();
        }
    })
})