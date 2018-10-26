function isPhone(phone) {
    var status = false;
    if (/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(phone)) {
        status = true;
    }
    return status;
}
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
//解决  先点击输入框 再点击下拉框时  下拉框得不到焦点问题
$(document).ready(function(){
    //解决输入框获取焦点时，光标应该在右边的问题，方便删除
    $(".caculatorinner li input").click(function(){
        var val = $(this).val();
        $(this).focus();
        $(this).val("");
        $(this).val(val);
    });
    //解决手机hover的问题
    document.body.addEventListener('touchstart', function(){ });
        //数据加载完毕，加载提示消失
       //解决选择框后，输入框无法获得焦点问题
    $(".selfpushinner select").bind("click",function(){
        $(this)[0].focus();
    //自主发布，输入框交互优化
    });
    $(".userinfoinner input").bind("click",function(){
        $(this)[0].focus();
    });
   $(".autopushinner input,.autopushinner select").bind("click",function(){
     $(this)[0].focus();
     });
    //时间插件不可获取焦点
    $(".datebuy").bind("click",function(){
        $(this)[0].blur();
    });
    $(".dateok").bind("click",function(){
        $(this)[0].blur();
    });
    $(".logtime").bind("click",function(){
        $(this)[0].blur();
    });
    $(".closetime").bind("click",function(){
        $(this)[0].blur();
    });
    $(".daterant").bind("click",function(){
        $(this)[0].blur();
    });
    $(".registerinner #city-picker").bind('click',function(){
       $(this)[0].focus();
    });
    /*$("#date").bind("click",function(){
     $(this)[0].blur();
     });*/
    //返回顶部
    $(window).on('scroll',function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop>400){
            $(".totop").fadeIn(200);
        }
        else{
            $(".totop").fadeOut(200);
        }
    });
    //列表页，是inner内滚动，特别定制
    $(".inner").on('scroll',function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop>400){
            $(".totop").fadeIn(100);
        }
        else{
            $(".totop").fadeOut(100);
        }
    });
    $(".totop").click(function(){
        $("html,body,.inner").animate({scrollTop:0}, 300);
    });
    //城市选择交互优化
    $("body > *").on("click", ".citysinner td a,.citysinner .citybox a", function() {
        $.showLoading("切换城市...");
    });
    //checkbox
    $(".checkbox").click(function(){
        if($(this).hasClass("checkboxnotcheck")){
            $(this).removeClass("checkboxnotcheck");
        }
        else{
            $(this).addClass("checkboxnotcheck");
        }
    });
    //资产详情页模块最后一个div宽度为100%
    var num = $(".detailwepushinner .box .basic div").length;
    if(num%2==0){
    }
    else{
        $(".detailwepushinner .box .basic div:last-child").css("width","100%")
    }
    var number = $(".detailwepushinner .box .own div").length;
    if(number%2==0){
    }
    else{
        $(".detailwepushinner .box .own div:last-child").css("width","100%")
    };
    $.hideLoading();
 })

