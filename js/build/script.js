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

	/* Swiper
	************************************ */

	var myMainSwiper = new Swiper('.swiper-container-horiz',{
		mode : 'horizontal',
		pagination: '.pagination',
		paginationClickable: true,
		keyboardControl : true,
		touchRatio :1.4,
		paginationAsRange:true,
		speed:1000,

		//mousewheelControl : true,
		//speed:600,
		//onFirstInit : function(){
			// var window_w = $(window).width()/2;
			// var swiper_pagination = $('.swiper-pagination-switch').width()/2;
			// //var swiper_pagination_active = $('.swiper-active-switch').position().left;
			// var pagination_left = window_w-swiper_pagination;
			// console.log('la');
			// console.log($('.swiper-pagination-switch'));
			

		//},
		onSlideChangeStart : function() {
			//Do something when you touch the slide
			//console.log(mySwiper.activeIndex);
			paginationLeft();
			$('#date_active').animate({left:$('.swiper-container-horiz .swiper-visible-switch').position().left}).html($('.swiper-container-horiz .swiper-visible-switch').html());
	    }

	});

	var home = $('#home'),
		timeline = $('#timeline'),
		dnaPage = $('.dnaPage');

	function LeaveHome() {
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
		TweenMax.to(timeline, 2, {top:"-100%", ease:Power3.easeOut});
		TweenMax.to(dnaPage, 2, {top:"0%", ease:Power3.easeOut});
	};

	/* out home */
	$('#home').on('click', function(){
		LeaveHome();
		$(this).removeClass('homeactive');
		fadeVolume(audioplayer.volume);
	    setTimeout(function(){
	       $('#home').css('display','none');       
	    }, 2500);
	});

	$(".titre h1").click(function() {
        goHome();
        $('#home').css('display','block');
        UpVolume(audioplayer.volume);
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
	
	function dateBloc(date){
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
	}

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
	 
	  function() {
	  	if (!MenuOpem){
		    TweenMax.staggerTo([Menuanimes1,Menuanimes2,Menuanimes3,Menuanimes4], 0.4, 
		                   {rotationX:"0deg",opacity:'1', ease:Power4.easeOut, onComplete: function(){MenuOpem = true}}, 0.2);
		    $( this ).addClass( "hover" );
		    console.log(MenuOpem);
		};
	  }, function() {
	  	if (MenuOpem){
	        TweenMax.staggerTo([Menuanimes4,Menuanimes3,Menuanimes2,Menuanimes1], 0.4, 
	        {rotationX:"-90deg",opacity:'0', ease:Power4.easeIn,onComplete: function(){MenuOpem = false}}, 0.2);
	        $( this ).removeClass( "hover" );
	        console.log(MenuOpem);
	      };
	  }
	);

//////// Audio

	var audioplayer = document.getElementById("homeAudio");

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

/*    UpVolume = function UpVolume(volume callback){
	    audioplayer.play();
	    audioplayer.volume = 0.5;
	    console.log('volumeUp');
	}*/

});
