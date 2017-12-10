
//发送ajax请求

$.ajax({
    type: "get",
    url: "http://localhost:9090/api/getmoneyctrl",
    data: {
        page: 1,
    },
    success: function(data){
        console.log(data);
        $(".set-item").html(template("tpl", data));

      //点击回到顶部
        goTop();
    }
})


