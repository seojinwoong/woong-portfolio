$("#banner .banner-img").hide(0);
$("#banner .banner-img").eq(0).show(0);
$(function(){
	// 슬라이드배너 start
	$("#banner .banner-img1").addClass("on");
	function bannerSet(bn,dir){
		if(dir=='right'){
			$('.slide-btn a.on').removeClass('on');
			$('.slide-btn a').eq(bn).addClass('on');
			$('.banner-img-wrap>li.on').stop().animate({left:"-100%"},800,'easeOutQuad',function(){
				$(this).hide().removeClass('on');
			});
			$('.banner-img-wrap>li').eq(bn).show(0).css({left:"100%"});
			$('.banner-img-wrap>li').eq(bn).stop().animate({left:0},800,'easeOutQuad',function(){
				$(this).addClass('on');
			});
		}else{
			$('.slide-btn a.on').removeClass('on');
			$('.slide-btn a').eq(bn).addClass('on');
			$('.banner-img-wrap>li.on').stop().animate({left:"100%"},800,'easeOutQuad',function(){
				$(this).hide().removeClass('on');
			});
			$('.banner-img-wrap>li').eq(bn).show(0).css({left:"-100%"});
			$('.banner-img-wrap>li').eq(bn).stop().animate({left:0},800,'easeOutQuad',function(){
				$(this).addClass('on');
			});
		}
	}
	var st=num=currentNum=0;
	$('.slide-btn a').on({
		click : function(){
			if($('.banner-img-wrap>li.on').is(':animated')==false){
				num = $(this).parent().index();
				currentNum = $('.slide-btn a.on').parent().index();
				if(num>currentNum){
					bannerSet(num,'right');
				}else if(num<currentNum){
					bannerSet(num,'left');
				}
				playSlide();
			}
		}
	});
	$('#banner .prev').on({
		click : function(){
			if($('.banner-img-wrap>li.on').is(':animated')==false){
				currentNum = $('.slide-btn-wrap a.on').parent().index();
				num = currentNum-1;
				if(num<0){
					num = $('.slide-btn a').length-1;
				}
				bannerSet(num,'left');
				playSlide();
			}
		}
	});
	$('#banner .next').on({
		click : function(){
			if($('.banner-img-wrap>li.on').is(':animated')==false){
				clearInterval(st);
				currentNum = $('.slide-btn-wrap a.on').parent().index();
				num = currentNum+1;
				if(num>$('.slide-btn a').length-1){
					num = 0;
				}
				bannerSet(num,'right');
				playSlide();
			}
		}
	});
	
	function playSlide(){
		$("#banner .play-btn").addClass("on");
		$("#banner .pause-btn").removeClass("on");
		clearInterval(st);
		st=setInterval(autoSlide,5000);
	}
	$("#banner .play-btn").on({
		click : function(){
			playSlide();
		}
	});
	$("#banner .pause-btn").on({
		click : function(){
			$(this).addClass("on");
			$("#banner .play-btn").removeClass("on");
			clearInterval(st);
		}
	});

	st=setInterval(autoSlide,5000);
	function autoSlide(){
		$('#banner .next').trigger('click');
	}
	// 슬라이드배너 end

	// 스페셜 오퍼 start
	var contW = 0;
	function resizeF(){
		contW = $(".content-ul>li").innerWidth();
		for(var i=0; i<7; i++){
			$("#special-offers .content-ul li").eq(i).css({left:contW*i});
		}
	}
	resizeF();
	$(window).resize(function(){
		resizeF();
	});

	$('.arrow-btn-wrap .left').on({
		click : function(){
			if($('#special-offers .content-ul>li').is(':animated')==false){
				j=-2;
				for(var i=0; i<7; i++){
					j++;
					$(".content-ul>li").eq(j).stop().animate({left:contW*j},0).animate({left:contW*i},600);
				}
				$(".content-ul").prepend($(".content-ul>li:last"));
			}
		}
	});
	$('.arrow-btn-wrap .right').on({
		click : function(){
			if($('#special-offers .content-ul>li').is(':animated')==false){
				j=-2;
				for(var i=0; i<7; i++){
					j++;
					$(".content-ul>li").eq(i).stop().animate({left:contW*i},0).animate({left:contW*j},600);
				}
				$(".content-ul").append($(".content-ul>li:first"));
			}
		}
	});
	// 스페셜 오퍼 end

	// 레스토랑 start
	var sliderNum = 1;
	$("#restaurant .right").on({
		click : function(e){
			e.preventDefault();
			sliderNum++;
			if(sliderNum>$("#restaurant .slider-img").length){
				sliderNum = 1;
			}
			$("#restaurant .numbering .current").text(sliderNum);
			$("#restaurant .slider-img:visible, #restaurant .slider-context:visible").stop().fadeOut(800);
			$("#restaurant .slider-img").eq(sliderNum-1).stop().fadeIn(800);
			$("#restaurant .slider-context").eq(sliderNum-1).stop().fadeIn(800);
		}
	});
	$("#restaurant .left").on({
		click : function(e){
			e.preventDefault();
			sliderNum--;
			if(sliderNum<1){
				sliderNum = $("#restaurant .slider-img").length;
			}
			$("#restaurant .numbering .current").text(sliderNum);
			$("#restaurant .slider-img:visible, #restaurant .slider-context:visible").stop().fadeOut(800);
			$("#restaurant .slider-img").eq(sliderNum-1).stop().fadeIn(800);
			$("#restaurant .slider-context").eq(sliderNum-1).stop().fadeIn(800);
		}
	});
	// 레스토랑 end

	// 왓츠 뉴 start
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		for(var i=1; i<=4; i++){
			if(scrollTop>=$(".new-cont-"+i).offset().top-300){
				$("#whats-new .new-cont").eq(i-1).addClass("scrollActive");
			}
		}
		if(scrollTop==0){
			$("#whats-new .new-cont").removeClass("scrollActive");
		}
	});
	// 왓츠 뉴 end

	// 비스타-맵 start
	var mapH = 0;
	function mapHResize(){
		if($(window).innerWidth()>=1025){
			mapH = 440;
		}else{
			mapH = $(".vista-map-context img").innerHeight();
		}
		$("#vista-map .vista-map-context").css({height:mapH});
	}
	$(window).resize(function(){
		mapHResize();
	});
	mapHResize();
	// 비스타-맵 end
});