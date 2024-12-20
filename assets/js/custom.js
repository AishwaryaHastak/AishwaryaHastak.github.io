$(document).ready(function(){
	"use strict";
/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
6. Expand/Collapse Project Details
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel 

		//ii. recommendaitons (carousel)
		
		$('#recommendation').owlCarousel({
			items:1,
			loop:true,
			smartSpeed: 1000,
			autoplay:true,
			dots:true,
			autoplayHoverPause:true,
			responsive:{
					0:{
						items:1
					},
					415:{
						items:1
					},
					600:{
						items:1

					},
					1199:{
						items:1
					},
					1200:{
						items:1
					}
				}
			});
			
			
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[1000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})

    // 5. welcome animation support

        $(window).load(function(){
        	$(".header-text h2,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".header-text h2,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	// 6. Expand/Collapse Project Details
	$('.expand-btn').on('click', function () {
		const itemDetails = $(this).prev('.item-details');
		const isExpanded = $(this).hasClass('active');
		
		if (isExpanded) {
			itemDetails.css('max-height', '0');
			setTimeout(() => itemDetails.hide(), 300); // Match transition duration
			$(this).removeClass('active');
		} else {
			itemDetails.show().css('max-height', itemDetails.prop('scrollHeight') + 'px');
			$(this).addClass('active');
		}
	});

});	
	