

$(function(){

//获取id
    var search = location.search;
    search = decodeURI(search);
    // console.log(search);
    var s = search.slice(1);
    // console.log(s);
    var arr = s.split("=");
    // console.log(arr);
    var id = arr[1];
    // console.log(id);

    //发送ajax请求，渲染三级菜单
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getcategorybyid",
        data: {
            categoryid: id,
        },
        success: function(data){
            console.log(data);
            var html = template("tpl", data);
            $(".list-tit").html(html);
            
            goTop();
        }
    });
    //发送ajax请求渲染列表
    //获取参数
   
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getproductlist",
        data: {
            categoryid: id,
            pageid: 1,
        },
        success: function(data){
            // console.log(data);
            var html = template("tpl2", data);
            // console.log(html);
            $(".set-item").html(template("tpl2", data)); 

             //获取总页数
            var page = Math.ceil(data.totalCount/data.pagesize);
            // console.log(page);

             $(".page-sel select").html(template("tpl3", {list:page}));
           
           //给切换页面注册点击事件
            $(".page-sel select").on("change",  function(){           
                //获取当前页面的id
                var page = $(".page-sel select").val();
                // console.log(page);
                //发送ajax请求
                $.ajax({
                    type: "get",
                    url: "http://localhost:9090/api/getproductlist",
                    data: {
                        categoryid: id,
                        pageid: page,
                    },
                    success: function(data){
                        // console.log(data);
                        $(".set-item").html(template("tpl2", data)); 
                        
                    }
                });
            });
            //给下一页注册点击事件
                $(".page-next").on("click", function(){
                    //获取option当前的value值
                    var page = parseInt($(".page-sel select").val());
                    page = page + 1;
                    console.log(page);

                     //判断翻页的最大值
                     max = Math.ceil(data.totalCount/data.pagesize);
                    //  console.log(max); 
                    if (page >= max ){
                        page = max;
                        $(".page-sel select").val(page);

                    }      

                    //发送ajax请求渲染页面
                    $.ajax({
                        type: "get",
                        url: "http://localhost:9090/api/getproductlist",
                        data: {
                            categoryid: id,
                            pageid: page,
                        },
                        success: function(data){
                            console.log(data);
                            $(".set-item").html(template("tpl2", data));                            
                            $(".page-sel select").val(page); 

                           
                        }
                    })
                });
                //给上一页注册点击事件
                $(".page-prve").on("click", function(){
                    var page = parseInt($(".page-sel select").val());
                    console.log(page);
                    page = page - 1;
                    //发送ajax请求
                    $.ajax({
                        type: "get",
                        url: "http://localhost:9090/api/getproductlist",
                        data: {
                            categoryid: id,
                            pageid: page,
                        },
                        success: function(data){
                            console.log(data);
                            $(".set-item").html(template("tpl2", data));
                            $(".page-sel select").val(page);

                        }
                    })
                })
        }
    })          


})