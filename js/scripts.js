// (function(){
//
//   var lastScrollTop = 0;
//
//   $(window).scroll(function(event){
//
//     var st = $(this).scrollTop();
//
//     /*
//     *
//     *   MENU
//     *
//     */
//
//     var menu_bottom_line_show = $('.footer').position().top - $(window).height()/4;
//
//     if(st  > menu_bottom_line_show){
//
//       $('#navbartitle').show();
//
//     }else{
//
//       if (st > lastScrollTop){
//         // downscroll code
//         $('#navbartitle').hide(500);
//       } else {
//         // upscroll code
//         $('#navbartitle').show(300);
//       }
//
//     }
//
//     /*
//      *  Always hide menu list on scroll
//      *
//      */
//
//     $('#navbar').hide(500);
//
//
//
//     lastScrollTop = st;
//
//
//
//
//
//
//   });
//   /*
//    *
//    *  Menu button
//    *
//    *
//    */
//
//   $('#navbartitle').click(function(e){
//     $('#navbar').show(500);
//     $('#navbartitle').hide(500);
//
//     var dotsOpacity = $('#dotsAnimate').css("opacity");
//
//     console.log(dotsOpacity);
//
//     if(dotsOpacity < 1) {
//       $('#dotsAnimate').css({opacity: 1})
//     }
//
//
//   });
//
//   /**
//    *
//    *
//    *
//    * chenge color menu* */
//   // $('.navigation').click(function () {
//   //   if ($(this).hasClass('changeColorText')) {
//   //     $(this).removeClass('changeColorText');
//   //   } else {
//   //     $('.navigation').removeClass('changeColorText');
//   //     $(this).addClass('changeColorText');
//   //
//   //   }
//   // });
// })();
//

var words = [
  'Ви зростаєте <br/> Ми втілюємо',
  'Ви відпочиваєте <br/> Ми працюємо',
  'Ви спите <br/> Ми ремонтуємо',
  'Ви радієте <br/> Ми будуємо'
];

$(function () {
  count = 0;
  setInterval(function () {
    count++;
    $("#changeWords").fadeOut(500, function () {
      $(this).html(words[count % words.length]).fadeIn(500);
    });
  }, 3000);
});

// $(document).ready(function(){
//
//   function freshDot(container){
//     this.obj = document.createElement("div");
//     this.obj.classList.add("box");
//     // var container = $('#dotsAnimate');
//
//     this.obj.style.top = (container.height() * Math.random()) + 'px';
//     this.obj.style.left = (container.width() * Math.random()) + 'px';
//
//     container.append(this.obj);
//   }
//
//   var controller = new ScrollMagic.Controller();
//   var arrow = new TimelineMax;
//   // pageYOffset
//
//   // header-text
//
//   var arrowStartHeight = ($('.header-text').height() - 40) +'px';
//   var arrowEndHeight = ($(window).height()-$('#dotsAnimate').height())+'px';
//   var arrowBlackEnd = $('.footer').position().top+'px';
//
//   // var arrowEndHeight = $(window).height()+'px';
//
//   // $('#logo .logo-animate').height(arrowStartHeight);
//
//   arrow
//     .from('.logo-animate', 0, {height:arrowStartHeight})
//     .to('.logo-animate', 1, {height:arrowEndHeight},0)
//     ;
//
//   var logoPinScene = new ScrollMagic.Scene({
//     // triggerElement:'#logo',
//     triggerHook:0,
//     offset:'20%',
//     // duration:arrowBlackEnd
//   })
//   .setTween(arrow)
//   .setPin('.logo-pos',{pushFollowers:false})
//   // .setClassToggle('#logo','fixed')
//   .addTo(controller)
//   .addIndicators()
//   // .on('update',function(event){
//   //   console.log(event);
//   // })
//   ;
//   // 130px
//   // logofooter
//
//   // var logofooter = new TimelineMax;
//   // logofooter
//     // .from('.logo-animate', 1, {backgroundColor:'white'})
//     // .to('.logo-animate', 1, {backgroundColor:'white'},0)
//     // ;
//   // backgroundColor:"#FF0000", ease:Power2.easeOut}
//   var logofooterScene = new ScrollMagic.Scene({
//     triggerElement:'.footer',
//     // triggerHook:130,
//     offset:'172',
//
//     duration:'20%'
//   })
//   // .setTween(logofooter)
//   .setPin('#logofooter',{pushFollowers:false})
//   // .setClassToggle('#logo','fixed')
//   .addTo(controller)
//   .addIndicators()
//   // .on('update',function(event){
//   //   console.log(event);
//   // })
//   ;
//
//
//   var menu_bottom_line_show = $('.footer').position().top - $(window).height();
//   //  - $(window).height()/4;
//   var navbartitle = new ScrollMagic.Scene({
//     triggerHook:0,
//     // triggerElement:'.header',
//     // triggerPosition:0,
//     // reverse:false,
//     offset:'20%',
//     duration:menu_bottom_line_show
//   })
//   // .setPin('.header', {pushFollowers: false})
//   .setClassToggle('.navbar','fade-out')
//   .addTo(controller)
//   .addIndicators()
//   .on('progress',function(event){
//
//
//     if($('.navbar').hasClass('fade-out') && event.scrollDirection == 'REVERSE'){
//       $('.navbar').toggleClass('fade-out');
//     }else if(!$('.navbar').hasClass('fade-out') && event.scrollDirection == 'FORWARD'){
//       $('.navbar').toggleClass('fade-out');
//     }
//
//     console.log(event.scrollDirection);
//   });
//
//       /*
//      *
//      *  Menu button
//      *
//      *
//      */
//
//     $('#navbartitle').click(function(e){
//       $('#navbar').show(500);
//       $('#navbartitle').hide(500);
//
//       var dotsOpacity = $('#dotsAnimate').css("opacity");
//
//       console.log(dotsOpacity);
//
//       if(dotsOpacity < 1) {
//         $('#dotsAnimate').css({opacity: 1})
//       }
//
//
//   });
//
//   /**
//    *
//    *
//    *
//    * chenge color menu* */
//   $('.navigation').click(function () {
//     if ($(this).hasClass('changeColorText')) {
//       $(this).removeClass('changeColorText');
//     } else {
//       $('.navigation').removeClass('changeColorText');
//       $(this).addClass('changeColorText');
//
//     }
//   });
//
//   // .on('update', e => {
//     // /
//   // });
//
//   // $(window).scroll(function(event){
//     // console.log(controller.info("scrollDirection"))
//   // });
//
//   // controller.on('update',function(){
//     // console.log('aaa');
//   // })
//
//
//   // "change update progress
//   // start end enter leave", callback);
//  // enter, start, progress - scrolling down
//  // progress, start, leave - scrolling up
//
//
//   window.addEventListener("resize", function(){
//
//       init();
//
//   });
//
//   init();
//
//
//   function init(){
//     menu_bottom_line_show = $('.footer').position().top - $(window).height();
//     //  - $(window).height()/4;
//     navbartitle.duration(menu_bottom_line_show);
//
//     console.log('dur!!',navbartitle.duration());
//
//     var dot = [];
//
//     var container = $('#dotsAnimate');
//     container.text('');
//
//     for(var i = 0 ; i < 9 ; i++ ){
//       dot.push(new freshDot(container));
//     }
//   }
// });

$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
    $(this).removeClass('is-active');
  });

});

// var smartgrid = require('smart-grid');
//
// /* It's principal settings in smart grid project */
// var settings = {
//   outputStyle: 'scss', /* less || scss || sass || styl */
//   columns: 12, /* number of grid columns */
//   offset: '30px', /* gutter width px || % */
//   container: {
//     maxWidth: '1600px', /* max-width оn very large screen */
//     fields: '18px' /* side fields */
//   },
//   breakPoints: {
//
//     xlg: {
//       width: '1920px',
//       fields: '18px'
//     },
//     lg: {
//       width: '1200px',
//       fields: '13px'
//     },
//     md: {
//       width: '992px',
//       fields: '15px'
//     },
//     sm: {
//       width: '768px',
//       fields: '15px'
//     },
//     xs: {
//       width: '480px',
//       fields: '15px'
//     },
//
//     xxs: {
//       width: '320px',
//       fields: '15px'
//     }
//
//   }
// };

// smartgrid('style/modules', settings);

//
// var smartgrid = require('smart-grid');
//
// /* It's principal settings in smart grid project */
// var settings = {
//   outputStyle: 'scss', /* less || scss || sass || styl */
//   columns: 12, /* number of grid columns */
//   offset: '30px', /* gutter width px || % */
//   mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
//   container: {
//     maxWidth: '1600px', /* max-width оn very large screen */
//     fields: '30px' /* side fields */
//   },
//   breakPoints: {
//     xxlg: {
//       width: '1920px',
//       offset: '30px'
//     },
//     xlg: {
//       width: '1440px',
//       offset: '30px'
//     },
//     lg: {
//       width: '1280px',
//       offset: '27px'
//     },
//     md: {
//       width: '992px',
//       offset: '27px'
//     },
//     sm: {
//       width: '768px',
//       offset: '16px'
//     },
//     xs: {
//       width: '480px',
//       offset: '10px'
//
//     },
//     xxs: {
//       width: '320px',
//       offset: '10px'
//
//     }
//   }
// };
// smartgrid('style/modules', settings);



$(document).ready(function(){


  var owl = $('.owl-carousel'),
      prev = $("#left"),
      next = $("#right");

  owl.owlCarousel({
        items : 2,
        stagePadding: '60',
        touchDrag  : false,
        mouseDrag  : false,
        smartSpeed: 20,
        animateOut: 'bringOut',
        animateIn: 'bringIn',
        dots: false,
        lazyLoad: true,
        lazyContent: true,
        loop: false,
        margin: 30,
        nav:true,
        navText:['<div id="left">Попередній<br>проект</div>','<div id="right">Наступний<br>проект</div>'],
        responsive: {
            0:{
                items:1,
                stagePadding: '25',
                margin: 10
            },
            768:{
                items:1,
                stagePadding: '40',
                margin: 20

            },
            1280:{
                items:1
            },
            1920:{
                items:1
            }
        }
    });

  owl.on('change.owl.carousel', function(event) {

    var $currentItem = $('.owl-item').eq(event.item.index);
    var $itemToShow = $('.owl-item').eq(event.property.value);

    if(event.item.index < event.property.value){
      $itemToShow.addClass('animated owl-animated-in fadeNext');
    }

    if(event.item.index > event.property.value){
      $currentItem.addClass('animated owl-animated-in fadePrev');
      $($itemToShow).css({left:'0'});
    }


  });

  owl.on('translated.owl.carousel', function(event) {

    $('.owl-item').removeClass('animated fadePrev fadeNext bringOut bringIn owl-animated-out owl-animated-in');
    $('.owl-item.active').css({left:'0'});
  });


});






