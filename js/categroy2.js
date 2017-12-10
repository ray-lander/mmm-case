
$(function(){

    $.ajax({
        type: "get",
        url: "http://localhost:9090/api/getcategorytitle",
        success: function(data){
            console.log(data);
            $(".m-family").html(template("tpl", data));
            //遍历
                var id = $(this).data("id");
                console.log(id);
   $('.m-family .family-tit').one('click',function(){
       var id=$(this).data('id');
       var $this=$(this);
                  $.ajax({
                    type: "get",
                    url: "http://localhost:9090/api/getcategory",
                    data: {
                        titleid: id,
                    },
                    success: function(data){
                        console.log(data);
                       $this.next().html(template('tpl2',data));
                    }
                });
   })  
   //注册点击事件
   $(".m-family .family-tit").on("click", function(){
       $(this).next().toggleClass("qie");
       var id = $(this).data("id");
   })

           
           
            
                
           


        }
    })


})



