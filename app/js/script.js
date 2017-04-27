$(document).ready(function(){

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
	$('.global').fullpage({
			scrollBar:true,
			paddingTop: 0,
		});

	var isViewer=1;

	var initViewer = function(){
		if ($(window).width() > 1440   ) {
			if (isViewer == 0) {
				$.fn.fullpage.reBuild();
				return isViewer = 1;
			}
		}
	}
	var destroyViewer = function(){
		if ($(window).width() < 1440 ) {
			if (isViewer == 1) {
				$.fn.fullpage.destroy();
				return isViewer = 0;
			}
		}
	}

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