$(document).ready(function(){


	//slide table row height
	$('.table-body-el-name').click(function(){
		$(this).parent().toggleClass('table-body-row--full');
	})
	//scoll
		$(".table-body").mCustomScrollbar({
		  autoDraggerLength: false // size druger
		});

	//slider
	$(".wrap-slider").owlCarousel({
	 items : 4,
		responsive : {
		 		0:{
				 	items : 2
			 	},
		 	 	786:{
		 		 	items : 4
		 	 	},
			 	1200:{
				 	items : 4
			 	},
		 	 	1440:{
		 		 	items : 4
		 	 	},
		 	 	1460:{
		 		 	items : 4
		 	 	}
		  },
	 autoHeight : true,
	 dots: false,
	 nav:true,
	 navText:[
			'<svg class="slider-control"><use xlink:href="#arrow-left"></use></svg>',
			'<svg class="slider-control"><use xlink:href="#arrow-right"></use></svg>'
	 ]
	 }
	);
	//toggle tab
	$('.section-princip-tab-title').click(function() {
		$('.section-princip-tab-title').not(this).parent().find('.section-princip-tab-list').slideUp();
		$(this).parent().find('.section-princip-tab-list').slideToggle();
	});


	//right menu
	$('.menu-toggle').click(function(){
			$('.menu').toggle();
			$('.menu-right').toggleClass('menu-right-open');
			$('.global-filter').toggleClass('global-filter-open');
		})
	//right menu-mobile
	
	$('.header-menu-togl').click(function(){
			$('.menu-right').toggleClass('menu-right-open');
		})
	$('.menu-mobile-cont .icon').click(function(){
			$('.menu-right').toggleClass('menu-right-open');
	})
	//animate elemnts
	new WOW().init();

	//scroll section
	
	var viewer = function() {
		$('.global').fullpage({
				scrollBar:true,
				scrollOverflow:true,
				scrollingSpeed: 1700,
			});
	}

	var isViewer=1;
	var initViewer = function(){
		if ($(window).width() > 1440   ) {
			if (isViewer == 0) {
				viewer();
				console.log('init');
				return isViewer = 1;
			}
		}
	}

	var destroyViewer = function(){
		if ($(window).width() < 1440 ) {
			if (isViewer == 1) {
				$.fn.fullpage.destroy('all');
				console.log('destroy');
				return isViewer = 0;
			}
		}
	}

	viewer();
	destroyViewer();
	initViewer();

	$(window).resize(function(){
		destroyViewer();
		initViewer();
		console.log(isViewer);
	})
	/* ###### For only ies  ######*/
	//if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
	//	//code
	//}

	//message for old IE
	function isIE () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	if (isIE() < 10 &&  isIE()) {
		$('body').empty();
		$('body').prepend('<div class="old-browser"><div class="old-browser-text"> Браузер не поддерживается =(</div></div>');
	}

	//for init SVG 
	svg4everybody();
	
	/* ###### For SlideToggle Elements  ######*/
	/*var hideToggle = function(targetClick,toggleEl) {
		$(targetClick).click(function(event){
				event.stopPropagation();
				$(toggleEl).slideToggle("fast");
		});
		$(toggleEl).on("click", function (event) {
			event.stopPropagation();
		});
		$(document).on("click", function () {
				$(toggleEl).hide();
		});
	}
	hideToggle('.icon-bars','.top-menu_link');*/


	/* ###### init RangeSLider  ######*/
	/* ###### bower i --save-dev nouislider  ######*/
	/* ###### https://gist.github.com/fantazer/2bdc4e6a63708e143718ffa7c32eae17  ######*/

	/*var slider = document.getElementById('rangeSlider'); //Элемент

	noUiSlider.create(slider, {
		start: [0, 100],
		connect: true,
		step: 10,
		range: {
			'min': 0,
			'max': 100,
		},
		pips: { // Show a scale with the slider
			mode: 'steps',
			density: 4
		}
	});*/

	
})

//cash SVG

;( function( window, document )
{
	'use strict';

	var file  = 'img/pack.html',
		revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
		request,
		data,
		insertIT = function()
		{
			document.body.insertAdjacentHTML( 'afterbegin', data );
		},
		insert = function()
		{
			if( document.body ) insertIT();
			else document.addEventListener( 'DOMContentLoaded', insertIT );
		};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );