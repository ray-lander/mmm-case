

$(function(){
    //发送ajax渲染标题
    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getcategorytitle",
        success: function(data){
            console.log(data);
            $(".m-family").html(template("tpl", data));
            //发送请求成功之后，注册点击下拉列表事件    
             //点击显示列表         
              
                $(".drop-list").click(function(){    

                    $(this).parent().next(".cate-list").toggle(".qie");

                    //获取当前存储的id
                    var id = $(this).data("id");  
                    console.log(id);
                    //发送ajax请求，渲染列表
                    $.ajax({
                        type:"get",
                        url: "http://localhost:9090/api/getcategory",
                        data: {
                            titleid: id,
                        },
                        success: function(data){
                            // console.log(data);
                            var html=template("tpl", data);
                            // console.log(html);
                            $(".qie2").each(function(i, e){

                                $(".qie2").html(template("tpl2",data));
                                console.log($(".qie2"));
                            })
                        }
                    })

                }) 

       
        }
    })            

})