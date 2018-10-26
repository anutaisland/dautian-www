// JavaScript Document
$(function(){
	//返回顶部
	$(window).on('scroll',function(){
		if($(window).scrollTop()>50){
			$('#backtop').show();
		}else{
			$('#backtop').hide();
		};
	});
});