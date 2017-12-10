

var Tools = {
    getParamObj: function () {
        var search = location.search;

        search = decodeURI(search);

        search = search.slice(1);

        var arr = search.split("&");
        //遍历数组，把值存在对象中
        var obj = {};
        arr.forEach(function (e) {
            var key = e.split("=")[0];
            var value = e.split("=")[1];
            obj[key] = value;
        });


        return obj;
    },
    getParam: function (key) {
        return this.getParamObj()[key];
    }
}


//点击回到顶部
function goTop(){
      //给返回顶部注册事件
        $(".m-back > ul > li:nth-child(3)").on("click", function(){            
            $(window).scrollTop(0);            
        })
}









