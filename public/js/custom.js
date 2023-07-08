$(document).ready(function(){
  new WOW().init();
  if($('.bounce').length>0) {
    $(".bounce").click(function () {
       $('html, body').animate({
          scrollTop: $(this).closest("section").next().offset().top
       }, "slow");
    });
 }
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
      $("body").toggleClass("open");
    });
   
    $(".team-slider").slick({
      slidesToShow: 1,
      infinite:false,
      slidesToScroll: 1,
       arrows: true, 
      
     });
    $(".steps-rnd").slick({
      slidesToShow: 4,
      infinite:false,
      slidesToScroll: 1,
       arrows: true, 
       responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerPadding: "0",
            }
          }
        ]
     });
    $(".related-product-slider").slick({
      slidesToShow: 3,
      infinite:true,
      slidesToScroll: 1,
       arrows: true, 
       responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerPadding: "0",
              arrows:false
            }
          }
        ]
     });
     $(".pdp-cat-slider,.mb-listing-slider").slick({
      slidesToShow: 4,
      infinite:true,
      slidesToScroll: 1,
        dots: false, 
       arrows: true, 
       responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
          }
        },
       
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              centerPadding: "0",
              arrows:false
            }
          }
        ]
     });
     $(".rpd-slider").slick({
      slidesToShow: 3,
      infinite:true,
      slidesToScroll: 1,
        dots: false, 
       arrows: true, 
       responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              centerPadding: "0",
              arrows:false
            }
          }
        ]
     });
    $(".industries-slider").slick({
      slidesToShow: 3,
      infinite:true,
      slidesToScroll: 2,
        dots: true, 
        variableWidth: true,
       arrows: false, 
       responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              centerPadding: "0",
              arrows:false
            }
          }
        ]
     });
    // $(".testimonial-slider").slick({
    //     slidesToShow: 1,
    //     infinite:true,
    //     slidesToScroll: 1,
    //       dots: true, 
    //      arrows: true, 
    //      centerMode: true,
    //      centerPadding: "30%",
    //      responsive: [
    //         {
    //           breakpoint: 991,
    //           settings: {
    //             centerPadding: "10%",
    //           }
    //         },
    //         {
    //           breakpoint: 767,
    //           settings: {
    //             slidesToShow: 1,
    //             centerPadding: "0",
    //             arrows:false
    //           }
    //         }
    //       ]
    //    });
       $('.logo-slider').slick({
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: false,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: true,
		initialSlide: 1,
		arrows: false,
		buttons: false
     });
       
  });
  
  /*scroll to top js start here*/
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('#scrolltotop').fadeIn();
  } else {
    $('#scrolltotop').fadeOut();
  }
});
$(document).ready(function() {
 
  $('#scrolltotop').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
 
  $('.tab-link').click(function(){
    $('.industries-slider').slick('refresh');
  });
  $('ul.tabs li').click(function(){
    
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
});
/*scroll to top js end here*/