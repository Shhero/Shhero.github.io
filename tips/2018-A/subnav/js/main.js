	(function(){
			
			var $subblock = $(".subpage"), $head=$subblock.find('h2'), $ul = $("#proinfo"), $lis = $ul.find("li");
			
			$lis.hover(function(){
				if(!$(this).hasClass('nochild')){
					$(this).addClass("prosahover");
					$(this).find(".prosmore").removeClass('hide');
				}
			},function(){
				if(!$(this).hasClass('nochild')){
					if($(this).hasClass("prosahover")){
						$(this).removeClass("prosahover");
					}
					$(this).find(".prosmore").addClass('hide');
				}
			});
			
		})();
        

		$(".banner").slide(
			{
				titCell:".hd ul",
				mainCell:".bd ul",
				effect:"leftLoop",
				vis:"auto",
				scroll:1,
				autoPlay:true,
				autoPage:true,
				trigger:"click"
			}
		);























     