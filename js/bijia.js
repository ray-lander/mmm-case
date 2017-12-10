
$(function(){


//获取id
var search = location.search;
search = decodeURI(search);
console.log(search);
var s = search.slice(1);
console.log(s);
var arr = s.split("=");
console.log(arr);
var id = arr[1];
console.log(id);

   $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getproduct",
        data: {
            productid: id,
        },
        success: function(data){
            console.log(data);
            var html = template("tpl", data);
            $(".set-box").html(template("tpl2", data));

            //发送ajax请求，渲染评价
            $.ajax({
                type: "get",
                url: "http://localhost:9090/api/getproductcom",
                data: {
                    productid: id,
                },
                success: function(data){
                    console.log(data);
                    $(".comm-list").html(template("tpl3", data));
                }
            })
            
            
        }
    })

})
