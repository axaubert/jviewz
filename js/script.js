document.createElement('video');document.createElement('audio');document.createElement('track');
/*$( window ).load(function() {
	videojs($("#videohome"));
});
*/

$(document).ready(function(){

	$(window).load(function(){

		TweenMax.to($('.loader'), 2, {borderWidth:"0", ease:Power3.easeOut,
			onComplete: function(){
				$(".loader").fadeOut("normal", function() {
			        $(this).remove();
			        audioplayer.play();
			 });
		}});
	});


	var audioplayer = document.getElementById("homeAudio");
   
	$("a").click(function(){
	  $(this).animate({
	     backgroundColor:'white',color:'black'
	  }, 200).animate({
	     backgroundColor:'black',color:'white'
	  }, 500);
	});

	$("a.ajax").click(function() {
	   $.ajax({
	         type:"GET",
	         url:$(this).attr("href"),
	         success: function(retour){
	        $("#content").empty().append(retour);
	         }
	     });
	     return false;
	});



	var window_width = $(window).width();
	var window_height = $(window).height();
	var img1_width = $('.bg .img1').width();
	var img1_height = $('.bg .img1').height();

	var img1_new_width = $('.bg .img1').width();
	var img1_new_height = img1_new_width * img1_height / img1_width;
	//console.log(img1_new_width/$('.bg .img1').height());

	var img1_width = window_width *3;
	console.log($('.img1').parent());
	//$('.img1').css('width')



	/* Swiper
	************************************ */
    var bg = document.querySelector('.bg');

	var myMainSwiper = new Swiper('.swiper-container-horiz',{
		mode : 'horizontal',
		pagination: '.pagination',
		paginationClickable: true,
		keyboardControl : true,
		touchRatio :1.4,
		paginationAsRange:true,
		speed:1000,
		progress: true,
		mousewheelControl: true,

		//mousewheelControl : true,
		//speed:600,


		onSwiperCreated : function(swiper){
			// var window_w = $(window).width()/2;
			// var swiper_pagination = $('.swiper-pagination-switch').width()/2;
			// //var swiper_pagination_active = $('.swiper-active-switch').position().left;
			// var pagination_left = window_w-swiper_pagination;
			// console.log('la');
			// console.log($('.swiper-pagination-switch'));
			
			// .bg width
			var nb_slide = $('.swiper-container-horiz .swiper-wrapper').children().length;
			var window_w = $(window).width()
			var bg_w_px = nb_slide*window_w;
			var bg_w_pourc = bg_w_px*100/window_w;
			$('.bg').css('width',bg_w_pourc+'%');


			var img_w_px = bg_w_px/nb_slide;

			// .img1 width
			var img1_w_px = img_w_px+(img_w_px*8.342/100);
			var img1_w_pourc = img1_w_px*100/bg_w_px;
			$('.img1').css('width', img1_w_pourc+'%');
			
			$('.img2').css('left', img1_w_pourc+'%');

			// .img2 width
			var img2_w_px = img_w_px+(2*(img_w_px*8.342/100));
			var img2_w_pourc = img2_w_px*100/bg_w_px;
			$('.img2').css('width',img2_w_pourc+'%');
		
			var img3_left = 2030+img2_w_px;
			$('.img3').css('left', img3_left+'px');

			// .img2 width
			var img3_w_px = img_w_px+(2*(img_w_px*8.342/100));
			var img3_w_pourc = img3_w_px*100/bg_w_px;
			$('.img3').css('width',img3_w_pourc+'%');
		},

		onSlideNext : function(swiper) {
			$('.arrowsr').css('opacity', '1')
		},

		onSlidePrev : function(swiper) {
			$('.arrowsl').css('opacity', '1')
		},

		onSlideChangeEnd : function(swiper) {
			$('.arrowsl').css('opacity', '0.3');
			$('.arrowsr').css('opacity', '0.3')
		},

		onSlideChangeStart : function(swiper) {
			//Do something when you touch the slide
			//console.log(myMainSwiper.activeIndex);
			paginationLeft();
			$('#date_active').animate({left:$('.swiper-container-horiz .swiper-visible-switch').position().left}).html($('.swiper-container-horiz .swiper-visible-switch').html());
			

			var nb_slide = $('.swiper-container-horiz .swiper-wrapper').children().length;
			var window_w = $(window).width()
			var bg_w_px = nb_slide*window_w;
			var bg_w_pourc = bg_w_px*100/window_w;
			$('.bg').css('width',bg_w_pourc+'%');

			var img_w_px = bg_w_px/nb_slide;
			var img2_w_px = img_w_px+(2*(img_w_px*8.342/100));
			var img3_left = 2030+img2_w_px;


			if(myMainSwiper.activeIndex == 0 || myMainSwiper.activeIndex == 1){

				// .img1 width
				var img1_w_px = img_w_px+(img_w_px*8.342/100);
				var img1_w_pourc = img1_w_px*100/bg_w_px;

				$('.img1').animate({
					'opacity':1,
					},600);


				$('.img2').animate({
					'left': img1_w_pourc+'%',
					'opacity':0.5,
					},600);
		
				$('.img3').animate({
					'left': img3_left+'px',
					'opacity':0,
					},600);
			}

			if(myMainSwiper.activeIndex == 2 || myMainSwiper.activeIndex == 3 || myMainSwiper.activeIndex == 4){

				$('.bg .img1').animate({
					'opacity':0.5,
					},600);

				TweenMax.to($('.bg .img2'), 0.6, {left:"230px", ease:Power3.easeOut});
				
				$('.bg .img2').animate({
					'left': '230px',
					'opacity':1,
					},600);

				$('.bg .img3').animate({
					'opacity':05,
					'left': img3_left+'px',
					},600);
			}

			if(myMainSwiper.activeIndex == 5 || myMainSwiper.activeIndex == 6){

				$('.bg .img1').animate({
					'opacity':0.5,
					},600);
				

				$('.bg .img3').animate({
					'left': '570px',
					'opacity':1,
					},600);
			
				$('.bg .img2').animate({
					'opacity':0.5,
					},600);
			 }
	    },

	    onProgressChange: function(swiper) {
	      	for (var i = 0; i < swiper.slides.length; i++) {
	        	var slide = swiper.slides[i];
	        	var progress = slide.progress;


	        	var tt = slide.querySelector('.tt');
        		tt.style.opacity = 1-Math.min(Math.abs(progress),1);
        	}
			swiper.setTranslate(bg, {x: (-swiper.progress*800)})
			console.log(swiper.progress);
	    },



    	onTouchStart:function(swiper){
        	for (var i=0; i<document.querySelectorAll('.swiper-slide .tt').length; i++) {
            	swiper.setTransition(document.querySelectorAll('.swiper-slide .tt')[i], 0);
        	} 
        	swiper.setTransition(bg, 0)
      	},
      	
      	onSetWrapperTransition: function(swiper) {
        	for (var i=0; i<document.querySelectorAll('.swiper-slide .tt').length; i++) {
            	swiper.setTransition(document.querySelectorAll('.swiper-slide .tt')[i], swiper.params.speed);
        	} 
        	swiper.setTransition(bg, swiper.params.speed);
      	}


	});


	/* Animation navigation */


	var home = $('#home'),
		timeline = $('#timeline'),
		dnaPage = $('.dnaPage'),
		pageMain = $('.paginationMain'),
		homeactive = true,
		Dnaactive = false;

	function LeaveHome() {
		$("#home").removeClass('homeactive');
			fadeVolume(audioplayer.volume);
	    setTimeout(function(){
	       $('#home').css('display','none');
	       homeactive = false;      
	    }, 2500);
		TweenMax.to(home, 2.5, {rotationX:"80",opacity:"0", ease:Power3.easeOut});
		TweenMax.to(home, 2, {top:"-100%", ease:Power3.easeOut});
		TweenMax.to(timeline, 2, {top:"0", ease:Power3.easeOut});
		TweenMax.to(dnaPage, 2, {top:"93%", ease:Power3.easeOut});
	};
	function goHome() {
		TweenMax.to(home, 2.5, {rotationX:"0",opacity:"1", ease:Power3.easeOut});
		TweenMax.to(home, 2, {top:"0%", ease:Power3.easeOut});
		TweenMax.to(timeline, 2, {top:"100%", ease:Power3.easeOut});
		TweenMax.to(dnaPage, 2, {top:"193%", ease:Power3.easeOut});
	};
	function goDna() {
		TweenMax.to(timeline, 2, {top:"-95%", ease:Power3.easeOut});
		TweenMax.to(dnaPage, 2, {top:"5%", ease:Power3.easeOut});
		TweenMax.to(pageMain, 2, {bottom:"0%", ease:Power3.easeOut});
		Dnaactive = true;
	};

		// DETECT HOME SCROLL

	var onMouseWheel = function(e) {
    e = e.originalEvent;
    var delta = e.wheelDelta>0||e.detail<0?1:-1;
	    if(delta<0 & homeactive) {
	    	LeaveHome();
	    }
	}
	$("#home").bind("mousewheel DOMMouseScroll", onMouseWheel);
	
	$('#home').on('click', function(){
		if (!homeactive) return;
		LeaveHome();
	});

	$(".titre h1").click(function() {
		 if (homeactive) return;
		 homeactive = true;  
         goHome();
        $('#home').css('display','block');
        //UpVolume(audioplayer.volume);
    });

    $(".dnaPage").click(function() {
        goDna();
    });



	/* date
	************************************ */

	var date = ['12/09','20/09','28/09','04/09', '20/10', '23/10', '18/11', '20/11'];
 	dateBloc(date);

 	$('#btn_dna').on('click', function(){
 		
 		$(this).toggleClass("dna-open");
 		$("#dna").toggleClass("swiper-no-swiping");
 		$("#dna").toggleClass("swiper-slide");
 			//$('#home').removeClass('swiper-slide').addClass('swiper-no-swiping');
		mySwiper.reInit();
 		
 		$('.swiper-container-horiz').css('overflow','visible');
 		$('.pagination').animate({bottom:'-30px'});
 		$('#date_active').css({
 			'background-position':'center 0',
 			'padding-top':'20px',
 			height:'30px',
 		});
 		$('#date_active').animate({bottom:'-62px'});
 		 		mySwiper.swipeTo(2, 600);

 		//mySwiper.reInit();
 	});


 	/* *********************************************************************************
    ************************************** RESIZE **************************************
    ********************************************************************************* */

	$(window).resize(function (event) {

		paginationLeft();
		$('#date_active').css('left',$('.swiper-container-horiz .swiper-visible-switch').position().left);
			

	});





 	/* *********************************************************************************
    ************************************* FONCTIONS ************************************
    ********************************************************************************* */
	
	function dateBloc(date){;
		$('.swiper-container-horiz .pagination').css('left','49%');

		//$('.swiper-pagination-switch').css('width', '35px');	
		var nb_slide = $('.swiper-wrapper').children().length;
		var pos_date = 0;
		
		var date_width = $('.swiper-container-horiz .swiper-pagination-switch').width()+50;
		
		for (var i = 0; i < nb_slide; i++) {	
			$('.swiper-container-horiz .pagination').children().eq(i).html(date[i]).addClass('date date'+i);
			$('.date'+i).css({
				'position' : 'absolute',
				'bottom' : '0px',
				'left' : pos_date+'px',
			});	
			pos_date += date_width;
		}

		/* date active */
		$('.swiper-container-horiz .pagination').append('<span id="date_active">lalazlefoizela</span>');
		$('#date_active').html($('.swiper-container-horiz .swiper-visible-switch').html());

	}
	/* position left de la pagination */
	function paginationLeft(){
		var window_w = $(window).width()/2;
		var swiper_pagination = $('.swiper-pagination-switch').width()/2;
		var swiper_pagination_active = $('.swiper-active-switch').position().left;
		var pagination_left = (window_w-swiper_pagination-swiper_pagination_active)*100/$(window).width();
		$('.swiper-container-horiz .pagination').animate({left:pagination_left+'%'});		
	};

		/* Video Js home
	************************************ */
	
	var min_w = 300; // minimum video width allowed
	var vid_w_orig;  // original video dimensions
	var vid_h_orig;

	    
	    vid_w_orig = parseInt($('video').attr('width'));
	    vid_h_orig = parseInt($('video').attr('height'));
	    
	    $(window).resize(function () { resizeToCover(); });
	    $(window).trigger('resize');


	function resizeToCover() {
	    
	    // set the video viewport to the window size
	    $('#videohome').width($(window).width());
	    $('#videohome').height($(window).height());

	    // use largest scale factor of horizontal/vertical
	    var scale_h = $(window).width() / vid_w_orig;
	    var scale_v = $(window).height() / vid_h_orig;
	    var scale = scale_h > scale_v ? scale_h : scale_v;

	    // don't allow scaled width < minimum video width
	    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

	    // now scale the video
	    $('video').width(scale * vid_w_orig);
	    $('video').height(scale * vid_h_orig);
	    // and center it by scrolling the video viewport
	    $('#videohome').scrollLeft(($('video').width() - $(window).width()) / 2);
	    $('#videohome').scrollTop(($('video').height() - $(window).height()) / 2);
	};

//////// MENU HOVER

var Menuanimes1 = $('.shop'), 
	Menuanimes2 = $('.about'), 
	Menuanimes3 = $('.contact'), 
	Menuanimes4 = $('.socialIcons'),
	MenuOpem = false;

	$( ".navigation" ).hover(
	 
	  function openMenu() {
	  	TweenMax.killDelayedCallsTo(openMenu);
		    TweenMax.staggerTo([Menuanimes1,Menuanimes2,Menuanimes3,Menuanimes4], 0.4, 
		                   {rotationX:"0deg",opacity:'1', ease:Power4.easeOut, overwrite:"all"}, 0.2);
	  }, function CloseMenu() {
	        TweenMax.staggerTo([Menuanimes4,Menuanimes3,Menuanimes2,Menuanimes1], 0.4, 
	        {rotationX:"-90deg",opacity:'0', ease:Power4.easeIn, overwrite:"all"}, 0.2);
	        $( this ).removeClass( "hover" );
	  }
	);

//////// Audio

	  function fadeVolume(volume){
	    var factor  = 0.01,
	        speed   = 50;
	    if (volume > factor)
	    {
	        setTimeout(function(){
	            fadeVolume((audioplayer.volume -= factor));         
	        }, speed);
	    } else {
	        console.log('volumeDown');
	        audioplayer.pause();
	    }
	};


//////// LOGIN

	$("#login").click(function(){
		$(".login").css({'display':'block'});
		TweenMax.to($(".login"), 0.6, {opacity:"1", ease:Power3.easeOut});
		TweenMax.to($(".Logcontent"), 0.5, {scale:"1", ease:Back.easeOut});
	});

	$('.login').click(function() {
		TweenMax.to($(".Logcontent"), 0.5, {scale:"0", ease:Back.easeIn});
		TweenMax.to($(".login"), 0.6, {opacity:"0", ease:Power3.easeIn,
		onComplete: function(){
			$(".login").css({'display':'none'});
		}});
	});

	$('.Logcontent').click(function(event){
	    event.stopPropagation();
	});

});



