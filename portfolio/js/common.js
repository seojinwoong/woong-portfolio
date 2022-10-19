$(window).on('load', function(){
    $('.loading').delay(1000).fadeOut(400, function(){
        $("#banner .slide-content li:first").stop().fadeIn(800,function(){
            $(this).addClass("on");
        });
    });
});

$(function(){
    var scrollTop = 0; 

    // 헤더 
    // 스크롤 시 백그라운드 효과
    function headerChange(){
		scrollTop = $(window).scrollTop();

		if(scrollTop>=100){
			$("#header").addClass("on");
		}else{
			$("#header").removeClass("on");
        }
        
        if(scrollTop>=$("#profile").offset().top-180){
            $("#profile .con-title, #profile .profile-box").addClass("on");
        }else if(scrollTop == 0){
            $("#profile .con-title, #profile .profile-box").removeClass("on");
        }
	}
	
	headerChange();

	$(window).scroll(function(){
        headerChange();

        // 콘텐츠 위치에 따른 nav 색상 변경
        $(".section").each(function(index){
            if(scrollTop >= $(".section").eq(index).offset().top-180){
                $("#header .nav a").removeClass("on");
                $("#header .nav a").eq(index).addClass("on");
            }else{
                $("#header .nav a").eq(index).removeClass("on");
            }
        });
    });
    
    $("#header .nav a").each(function(index){
        $(this).on({
            click : function(e){
                e.preventDefault();
                $("html,body").stop().animate({scrollTop:$(".section").eq(index).offset().top-180},600);
            }
        });
    });

   

    // 메인
    // 배너 start
	var sliderNum = 1;
	$("#banner .right").on({
		click : function(e){
            e.preventDefault();
            if($("#banner .slide-content li").is(":animated")==false){
                sliderNum++;
                if(sliderNum>$("#banner .slide-content li").length){
                    sliderNum = 1;
                }
                $("#banner .slide-content li.on").stop().fadeOut(800,function(){
                    $(this).removeClass("on");
                });
                $("#banner .slide-content li").eq(sliderNum-1).stop().fadeIn(800,function(){
                    $(this).addClass("on");
                });
            }
		}
	});
	$("#banner .left").on({
		click : function(e){
            e.preventDefault();
            if($("#banner .slide-content li").is(":animated")==false){
                sliderNum--;
                if(sliderNum<1){
                    sliderNum = $("#banner .slide-content li").length
                }
                $("#banner .slide-content li.on").stop().fadeOut(800,function(){
                    $(this).removeClass("on");
                });
                $("#banner .slide-content li").eq(sliderNum-1).stop().fadeIn(800,function(){
                    $(this).addClass("on");
                });
            }
		}
	});
    // 배너 end
    
    // 포트폴리오 인트로 클릭시 해당 포트폴리오로 이동 start
    $("#banner .view-more").each(function(index){
        $(this).on({
            click : function(e){
                e.preventDefault();
                $("html,body").stop().animate({scrollTop:$("#portfolio-list .port-list li").eq(index).offset().top-180},600);
            }
        })
    });
    // 포트폴리오 인트로 클릭시 해당 포트폴리오로 이동 end
});
