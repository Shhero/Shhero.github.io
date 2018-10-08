
$(document).ready(function(){
	$("#movieTab").on('click','ul li',function(event){
		 var selected = $(this).attr('aria-selected');
		 if(selected === 'true'){
		 	return;
		 }else{
               $(this).addClass('active').siblings().removeClass('active');
				var index = $(this).data('index');
				var trans = `translate3d(${index * 22}vw,0vw,0vw)`;
				$('.tab-link-bar').css({
					transform:trans,
					width:'22vw'	
				})
				$('.tpp-tab-panel').toggleClass('hide');
			$(this).attr('aria-selected','true').siblings().attr('aria-selected','false');	
		 }

	})
  
	$('.tab-link-bar').css({
		  transform: 'translate3d(0vw, 0vw, 0vw)',
          width: '22vw'
	});

   //city-selector
	$('.city-c').on('click',function(event){
		$('.tpp-city-selector').removeClass('hide');
	});

	$('.btn-close').on('click',function(event){
		//event.stopPropagation();
		$('.tpp-city-selector').addClass('hide');
	});

	//cinema-search-container
	$('.search-selector').on('click',function(event){
		$('.cinema-search-container').removeClass('hide');
	});

	$('.cinema-search-cancel').on('click',function(event){
		$('.cinema-search-container').addClass('hide');
	})




})



$(document).ready(function(){
	$('#regionSelector').click(function(){
		$(this).toggleClass('down');
		$('.regionName').toggle();
	});

	// $('#sortSelector').click(function(){
	// 	$(this).toggleClass('down');
	// 	$('.sortType').toggle();
	// })
    
 //    $('#supportSelector').click(function(){
	// 	$(this).toggleClass('down');
	// 	$('.supportFilters').toggle();
	// })

})


// $(document).ready(function () {
//     $('#movieTab').on('click', 'ul li', function (event) {
//         var selected = $(this).attr('aria-selected');
//         if (selected === 'true') {
//             return;
//         } else {
//             $(this).addClass('active').siblings().removeClass('active');
//             var index = $(this).data('index');
          
//             var trans = `translate3d(${index * 22}vw, 0px, 0px)`;
//             $('.tab-link-bar').css({
//                 transform: trans,
//                 width: '22vw'
                
//             });
         
//             $('.tpp-tab-panel').toggleClass('hide');
//             $(this).attr('aria-selected', 'true').siblings().attr('aria-selected', 'false');
//         }
//     })
//     $('.tab-link-bar').css({
//         transform: 'translate3d(0px, 0px, 0px)',
//         width: '22vw'
//     })
// });


// banner
	TouchSlide({ 
					slideCell:"#tpp-banner",
					titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
					mainCell:".bd ul", 
					effect:"leftLoop", 
					autoPlay:true,//自动播放
					autoPage:true, //自动分页
					delayTime:400,//毫秒；切换效果持续时间（执行一次效果用多少毫秒）
					interTime:3000//毫秒；自动运行间隔（隔多少毫秒后执行下一个效果
					// switchLoad:"_src" //切换加载，真实图片路径为"_src" 
				});



	