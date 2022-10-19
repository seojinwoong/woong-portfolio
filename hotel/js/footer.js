$(function(){
	// 최상단 가기
	function goTop(){
		var scrollToggle = 0;
		if($(window).scrollTop()>=200){
			if(scrollToggle==0){
				$(".go-top").stop().fadeIn(500);
				scrollToggle = 1;
			}
		}else{
			$(".go-top").stop().fadeOut(500);
			scrollToggle = 0;
		}
	}
	$(window).scroll(function(){
		goTop();
	});
	goTop();

	$(".go-top").on({
		click : function(e){
			e.preventDefault();
			$('html,body').stop().animate({scrollTop:0},600);
		}
	});

	$("#siteMap").on({
		change : function(){
			if($(this).val()=="none"){
				return false;
			}else if($(this).val()=="walkerhill"){
				window.open("https://www.walkerhill.com/Index.wh");
			}else if($(this).val()=="grandwarkerhillseoul"){
				window.open("https://www.walkerhill.com/grandwalkerhillseoul/");
			}else if($(this).val()=="skspeedMate"){
				window.open("https://www.speedmate.com/main.do");
			}
		}
	});

});