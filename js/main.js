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
      margin: 5,
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
            items: 3,
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


   /*==========================================================
   timeline
    ======================================================================*/

   jQuery(document).ready(function ($) {
      var timelines = $('.cd-horizontal-timeline'),
         eventsMinDistance = 90;

      (timelines.length > 0) && initTimeline(timelines);

      function initTimeline(timelines) {
         timelines.each(function () {
            var timeline = $(this),
               timelineComponents = {};
            //cache timeline components 
            timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
            timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
            timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
            timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
            timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
            timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
            timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
            timelineComponents['eventsContent'] = timeline.children('.events-content');

            //assign a left postion to the single events along the timeline
            setDatePosition(timelineComponents, eventsMinDistance);
            //assign a width to the timeline
            var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
            //the timeline has been initialize - show it
            timeline.addClass('loaded');

            //detect click on the next arrow
            // timelineComponents['timelineNavigation'].on('click', '.next', function(event){
            //    event.preventDefault();
            //    updateSlide(timelineComponents, timelineTotWidth, 'next');
            // });
            //detect click on the prev arrow
            // timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
            //    event.preventDefault();
            //    updateSlide(timelineComponents, timelineTotWidth, 'prev');
            // });
            //detect click on the a single event - show new event content
            timelineComponents['eventsWrapper'].on('click', 'a', function (event) {
               event.preventDefault();
               timelineComponents['timelineEvents'].removeClass('selected');
               $(this).addClass('selected');
               updateOlderEvents($(this));
               updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
               updateVisibleContent($(this), timelineComponents['eventsContent']);
            });

            //on swipe, show next/prev event content
            timelineComponents['eventsContent'].on('swipeleft', function () {
               var mq = checkMQ();
               (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
            });
            timelineComponents['eventsContent'].on('swiperight', function () {
               var mq = checkMQ();
               (mq == 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
            });

            //keyboard navigation
            $(document).keyup(function (event) {
               if (event.which == '37' && elementInViewport(timeline.get(0))) {
                  showNewContent(timelineComponents, timelineTotWidth, 'prev');
               } else if (event.which == '39' && elementInViewport(timeline.get(0))) {
                  showNewContent(timelineComponents, timelineTotWidth, 'next');
               }
            });
         });
      }

      function updateSlide(timelineComponents, timelineTotWidth, string) {
         //retrieve translateX value of timelineComponents['eventsWrapper']
         var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
            wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
         //translate the timeline to the left('next')/right('prev') 
         (string == 'next') ?
         translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth): translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
      }

      // function showNewContent(timelineComponents, timelineTotWidth, string) {
      //    //go from one event to the next/previous one
      //    var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
      //       newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

      //    if ( newContent.length > 0 ) { //if there's a next/prev event - show it
      //       var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
      //          newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

      //       updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
      //       updateVisibleContent(newEvent, timelineComponents['eventsContent']);
      //       newEvent.addClass('selected');
      //       selectedDate.removeClass('selected');
      //       updateOlderEvents(newEvent);
      //       updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
      //    }
      // }

      // function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
      //    //translate timeline to the left/right according to the position of the selected event
      //    var eventStyle = window.getComputedStyle(event.get(0), null),
      //       eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
      //       timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
      //       timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
      //    var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

      //      if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
      //         translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
      //      }
      // }

      // function translateTimeline(timelineComponents, value, totWidth) {
      //    var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
      //    value = (value > 0) ? 0 : value; //only negative translate value
      //    value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
      //    setTransformValue(eventsWrapper, 'translateX', value+'px');
      //    //update navigation arrows visibility
      //    (value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
      //    (value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
      // }

      function updateFilling(selectedEvent, filling, totWidth) {
         //change .filling-line length according to the selected event
         var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
            eventLeft = eventStyle.getPropertyValue("left"),
            eventWidth = eventStyle.getPropertyValue("width");
         eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
         var scaleValue = eventLeft / totWidth;
         setTransformValue(filling.get(0), 'scaleX', scaleValue);
      }

      function setDatePosition(timelineComponents, min) {
         for (i = 0; i < timelineComponents['timelineDates'].length; i++) {
            var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
               distanceNorm = Math.round(distance / timelineComponents['eventsMinLapse']) + 2;
            timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm * min + 'px');
         }
      }

      function setTimelineWidth(timelineComponents, width) {
         var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
            timeSpanNorm = timeSpan / timelineComponents['eventsMinLapse'],
            timeSpanNorm = Math.round(timeSpanNorm) + 20,
            totalWidth = timeSpanNorm * width;
         timelineComponents['eventsWrapper'].css('width', totalWidth + 'px');
         updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);

         return totalWidth;
      }

      function updateVisibleContent(event, eventsContent) {
         var eventDate = event.data('date'),
            visibleContent = eventsContent.find('.selected'),
            selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
            selectedContentHeight = selectedContent.height();

         if (selectedContent.index() > visibleContent.index()) {
            var classEnetering = 'selected enter-right',
               classLeaving = 'leave-left';
         } else {
            var classEnetering = 'selected enter-left',
               classLeaving = 'leave-right';
         }

         selectedContent.attr('class', classEnetering);
         visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
            visibleContent.removeClass('leave-right leave-left');
            selectedContent.removeClass('enter-left enter-right');
         });
         eventsContent.css('height', selectedContentHeight + 'px');
      }

      function updateOlderEvents(event) {
         event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
      }

      function getTranslateValue(timeline) {
         var timelineStyle = window.getComputedStyle(timeline.get(0), null),
            timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
            timelineStyle.getPropertyValue("-moz-transform") ||
            timelineStyle.getPropertyValue("-ms-transform") ||
            timelineStyle.getPropertyValue("-o-transform") ||
            timelineStyle.getPropertyValue("transform");

         if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslate = timelineTranslate.split('(')[1];
            timelineTranslate = timelineTranslate.split(')')[0];
            timelineTranslate = timelineTranslate.split(',');
            var translateValue = timelineTranslate[4];
         } else {
            var translateValue = 0;
         }

         return Number(translateValue);
      }

      function setTransformValue(element, property, value) {
         element.style["-webkit-transform"] = property + "(" + value + ")";
         element.style["-moz-transform"] = property + "(" + value + ")";
         element.style["-ms-transform"] = property + "(" + value + ")";
         element.style["-o-transform"] = property + "(" + value + ")";
         element.style["transform"] = property + "(" + value + ")";
      }

      //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
      function parseDate(events) {
         var dateArrays = [];
         events.each(function () {
            var dateComp = $(this).data('date').split('/'),
               newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
            dateArrays.push(newDate);
         });
         return dateArrays;
      }

      function parseDate2(events) {
         var dateArrays = [];
         events.each(function () {
            var singleDate = $(this),
               dateComp = singleDate.data('date').split('T');
            if (dateComp.length > 1) { //both DD/MM/YEAR and time are provided
               var dayComp = dateComp[0].split('/'),
                  timeComp = dateComp[1].split(':');
            } else if (dateComp[0].indexOf(':') >= 0) { //only time is provide
               var dayComp = ["2000", "0", "0"],
                  timeComp = dateComp[0].split(':');
            } else { //only DD/MM/YEAR
               var dayComp = dateComp[0].split('/'),
                  timeComp = ["0", "0"];
            }
            var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
            dateArrays.push(newDate);
         });
         return dateArrays;
      }

      function daydiff(first, second) {
         return Math.round((second - first));
      }

      function minLapse(dates) {
         //determine the minimum distance among events
         var dateDistances = [];
         for (i = 1; i < dates.length; i++) {
            var distance = daydiff(dates[i - 1], dates[i]);
            dateDistances.push(distance);
         }
         return Math.min.apply(null, dateDistances);
      }

      /*
         How to tell if a DOM element is visible in the current viewport?
         http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      */
      function elementInViewport(el) {
         var top = el.offsetTop;
         var left = el.offsetLeft;
         var width = el.offsetWidth;
         var height = el.offsetHeight;

         while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
         }

         return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
         );
      }

      function checkMQ() {
         //check if mobile or desktop device
         return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
      }
   });
   /* ----------------------------------------------------------- */
   /*  tooltip
   /* ----------------------------------------------------------- */
   $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
   });
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