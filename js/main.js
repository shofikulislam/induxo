/*

	Template Name: Induxo HTML Template
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Induxo HTML Template
	Version: 1.0
   =====================
   table of content 
   ====================
   1.   menu toogle
   2.   Hero Area
   3.   funfact
   4.   Testimonial Area
   5.   About Area
   6.   Features Area
   7.   partners Area
   8.   video popup
  
*/


jQuery(function ($) {



   /**-------------------------------------------------
    *Fixed HEader
    *----------------------------------------------------**/
   $(window).on('scroll', function () {

      /**Fixed header**/
      if ($(window).scrollTop() > 250) {
         $('.header').addClass('sticky fade_down_effect');
      } else {
         $('.header').removeClass('sticky fade_down_effect');
      }
   });

   /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
         $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });

   }
   /* ----------------------------------------------------------- */
   /*  Site search
    /* ----------------------------------------------------------- */

   $('.nav-search').on('click', function () {
      $('.search-block').fadeIn(350);
      $(this).fadeOut(350);
   });

   $('.search-close').on('click', function () {
      $('.search-block').fadeOut(350);
      $('.nav-search').fadeIn(350);
   });
   /* ---------------------------------------------
                     Hero Area
   ------------------------------------------------ */

   $(".hero-area").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      mouseDrag: false,
      smartSpeed: 1100,
      navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],

   });
   /* ---------------------------------------------
                     Testimonial Area
   ------------------------------------------------ */
   $(".testimonial-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      mouseDrag: false,
      smartSpeed: 1100,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

   });
   /* ---------------------------------------------
                     About Area
   ------------------------------------------------ */

   $(".ts-about-image-wrapper").owlCarousel({

      loop: false,
      autoplay: false,
      nav: true,
      margin: 0,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      items: 1,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 1,
            nav: false,
         },
         1000: {
            nav: true,
         }
      }

   });
   /* ---------------------------------------------
                     Features Area
   ------------------------------------------------ */

   $(".features-project").owlCarousel({

      loop: true,
      autoplay: false,
      autoplayHoverPause: true,
      nav: true,
      margin: 5,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      items: 4,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 2,
            nav: false,
         },
         1000: {
            nav: true,
         }
      }

   });

   /* ---------------------------------------------
                     Clients Area
   ------------------------------------------------ */

   $(".partners-carousel").owlCarousel({

      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      nav: false,
      margin: 100,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      smartSpeed: 900,
      items: 5,
      responsive: {
         0: {
            items: 1,
            nav: false,
         },
         600: {
            items: 2,
            nav: false,
         },
         1000: {
            nav: false,
            items: 5,
         }
      }

   });

   /*==========================================================
                           funfact 
     ======================================================================*/
   var skl = true;
   $('.ts-funfact').appear();

   $('.ts-funfact').on('appear', function () {
      if (skl) {
         $('.counterUp').each(function () {
            var $this = $(this);
            jQuery({
               Counter: 0
            }).animate({
               Counter: $this.attr('data-counter')
            }, {
               duration: 8000,
               easing: 'swing',
               step: function () {
                  var num = Math.ceil(this.Counter).toString();
                  if (Number(num) > 99999) {
                     while (/(\d+)(\d{3})/.test(num)) {
                        num = num.replace(/(\d+)(\d{3})/, '');
                     }
                  }
                  $this.html(num);
               }
            });
         });
         skl = false;
      }
   });





   /*=============================================================
   			video popup
   	=========================================================================*/

   $('.ts-video-popup').magnificPopup({
      type: 'iframe',
      closeOnContentClick: false,
      midClick: true,
      callbacks: {
         beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
         }
      },
      zoom: {
         enabled: true,
         duration: 500, // don't foget to change the duration also in CSS
      },
      mainClass: 'mfp-fade',
   });


   /*==========================================================
   wow animated
    ======================================================================*/
   var wow = new WOW({
      animateClass: 'animated',
      mobile: false
   });
   wow.init();


   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

   $(window).on('scroll', function () {
      if ($(window).scrollTop() > $(window).height()) {
         $(".BackTo").fadeIn('slow');
      } else {
         $(".BackTo").fadeOut('slow');
      }

   });
   $("body, html").on("click", ".BackTo", function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 0
      }, 800);
   });


});