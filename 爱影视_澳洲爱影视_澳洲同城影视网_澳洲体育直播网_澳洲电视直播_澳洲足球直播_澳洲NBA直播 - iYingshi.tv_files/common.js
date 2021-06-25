$(function(){
	

    $(".tabmenu .lk").hover(function(){
    
        $(this).addClass("cur").siblings().removeClass("cur");
        
        var index=$(this).parent('.tabmenu').children('.lk').index(this);    
        
        $(this).parents(".tabmenu").siblings(".tabwrap").find(".module").eq(index).show().siblings().hide();
        
    });
    
    $(".tab_menu .lk").click(function(){
    
        $(this).addClass("cur").siblings().removeClass("cur");
        
        var index=$(this).parent('.tab_menu').children('.lk').index(this);    
        
        $(this).parents(".tab_menu").siblings(".tab_wrap").find(".module").eq(index).show().siblings().hide();
        
    });
    
	$('.sx_para .lk').click(function(){
		$(this).addClass('this').siblings().removeClass('this');
	});
	
	$('.zb_line .bq').click(function(){
		$(this).addClass('this').siblings().removeClass('this');
	});
	
	$('.zb_ymsbox .ym').click(function(){
		$(this).addClass('this').siblings().removeClass('this');
	});
	
	$(".pd_ban .item").hover(function(){
    
        $(this).addClass("cur").siblings().removeClass("cur");
        
        var index=$(this).parent('.list').children('.item').index(this);    
        
        $(this).parents(".listwrap").siblings(".tabwrap").find(".module").eq(index).show().siblings().hide();
        
    });
	
	
	$(".pub_tit .smmenu .lk").click(function(){
    
        $(this).addClass("cur").siblings().removeClass("cur");
        
        var index=$(this).parent('.smmenu').children('.lk').index(this);    
        
        $(this).parents(".pub_tit").siblings(".tabwrap").find(".module").eq(index).show().siblings().hide();
        
    });
	
	
	$(window).scroll(function(){
        if ($(window).scrollTop()>1){
            $(".head").addClass('scroll');
        }
        else
        {
            $(".head").removeClass('scroll');
        }
    });
	
	
    
});
//document.oncontextmenu = new Function("return false;");
//     document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
//      var e = event || window.event || arguments.callee.caller.arguments[0];
//      if (e && (e.keyCode == 123 || e.keyCode == 116)) {
//              e.returnValue = false;
//              return (false);
//      }
//  }  