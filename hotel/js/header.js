$(function(){
	// 네비 호버시 서브메뉴 슬라이드 다운이벤트
	// 데스크탑 버전
	$("#header #nav .nav-menu>li").on({
		mouseenter : function(){
			$(this).find("ul.nav-sub-menu").stop().slideDown(300);
			$(this).find("i.arrow").addClass("hoverClass");
		},
		mouseleave : function(){
			$(this).find("ul.nav-sub-menu").stop().slideUp(300);
			$(this).find("i.arrow").removeClass("hoverClass");
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>=200){
			$("#header h1.logo").css({height:"89px"});
		}else{
			$("#header h1.logo").css({height:"116px"});
		}
	});

	// 태블릿, 반응형 버전
	$("#header-mobile .ham-btn").on({
		click : function(e){
			e.preventDefault();
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).find("span").removeClass("active");
				$("#header-mobile .mobile-menu").removeClass("on");
				$("#nav-mobile .nav-menu>li>a").removeClass("open");
				$("#nav-mobile .nav-sub-menu").stop().slideUp(0);
				$(".shadow").stop().fadeOut(300);
				$("html").css({"overflow-y":"scroll"});
				$("#header-mobile").css({"overflow-y":"hidden","height":"auto"});
			}else{
				$(this).addClass("active");
				$(this).find("span").addClass("active");
				$("#header-mobile .mobile-menu").addClass("on");
				$(".shadow").stop().fadeIn(300);
				$("html").css({"overflow-y":"hidden"});
				$("#header-mobile").css({"overflow-y":"scroll","height":"100%"});
			}
		}
	});

	$("#nav-mobile .nav-menu>li>a").on({
		click : function(e){
			e.preventDefault();
			$("#nav-mobile .nav-sub-menu").stop().slideUp(300);
			$(this).next("ul").stop().slideToggle(300);
			if(!$(this).hasClass("open")){
				$("#nav-mobile .nav-menu>li>a").removeClass("open");
				$(this).addClass("open");
			}else{
				$(this).removeClass("open");	
			}
		}
	});

	$(window).resize(function(){
		var winW = $(window).innerWidth();
		if(winW>=1025){
			$("#header-mobile .ham-btn").removeClass("active");
			$("#header-mobile .ham-btn").find("span").removeClass("active");
			$("#header-mobile .mobile-menu").removeClass("on");
			$("#nav-mobile .nav-menu>li>a").removeClass("open");
			$("#nav-mobile .nav-sub-menu").stop().slideUp(0);
			$(".shadow").stop().fadeOut(0);
			$("html").css({"overflow-y":"scroll"});
			$("#header-mobile").css({"overflow-y":"scroll","height":"100%"});
		}else{
			if(!$("#header-mobile .ham-btn").hasClass("active")){
				$("#header-mobile").css({"overflow-y":"hidden","height":"auto"});
			}
		}
	});

	
});