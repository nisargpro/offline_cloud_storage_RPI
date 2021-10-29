$(document).ready(function()
{
   skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   $("a[href*='#intro']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#intro').offset().top-50 }, 600, 'easeInQuad');
   });
   $("a[href*='#about']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#about').offset().top-50 }, 600, 'easeInQuad');
   });
   var Carousel1Opts =
   {
      delay: 3000,
      duration: 500,
      easing: 'linear',
      mode: 'forward-circular',
      direction: '',
      scalemode: 1,
      pagination: true,
      pagination_img_default: 'images/page_default.png',
      pagination_img_active: 'images/page_active.png',
      start: 0
   };
   $("#Carousel1").on('beforeActivate', function(event, index)
   {
      switch(index)
      {
         case 0:
            AnimateCss('wb_Title1', 'transform-scale-in', 600, 600);
            AnimateCss('wb_Description1', 'transform-lightspeed-in', 600, 800);
            backgroundZoom('Carousel1', 'frame-1');;
            break;
         case 1:
            AnimateCss('wb_Title2', 'transform-scale-in', 600, 600);
            AnimateCss('wb_Description2', 'transform-lightspeed-in', 600, 800);
            backgroundZoom('Carousel1', 'frame-2');;
            break;
         case 2:
            AnimateCss('wb_Title3', 'transform-scale-in', 600, 600);
            AnimateCss('wb_Description3', 'transform-lightspeed-in', 600, 800);
            backgroundZoom('Carousel1', 'frame-3');;
            break;
      }
   });
   $("#Carousel1").carousel(Carousel1Opts);
   $("#Carousel1_back a").click(function()
   {
      $('#Carousel1').carousel('prev');
   });
   $("#Carousel1_next a").click(function()
   {
      $('#Carousel1').carousel('next');
   });
   function Text1Scroll()
   {
      var $obj = $("#wb_Text1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text1', 'transform-tada', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text1').inViewPort(true))
   {
      $('#wb_Text1').addClass("in-viewport");
   }
   Text1Scroll();
   $(window).scroll(function(event)
   {
      Text1Scroll();
   });
   function Text2Scroll()
   {
      var $obj = $("#wb_Text2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text2', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text2').inViewPort(true))
   {
      $('#wb_Text2').addClass("in-viewport");
   }
   Text2Scroll();
   $(window).scroll(function(event)
   {
      Text2Scroll();
   });
   function Text5Scroll()
   {
      var $obj = $("#wb_Text5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text5').inViewPort(true))
   {
      $('#wb_Text5').addClass("in-viewport");
   }
   Text5Scroll();
   $(window).scroll(function(event)
   {
      Text5Scroll();
   });
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-80 }, 600, 'linear');
   });
   $('#wb_services').parallax();
   function Table5Scroll()
   {
      var $obj = $("#Table5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('Table5', 'transform-scale-in', 100, 2000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('Table5', 'animate-fade-out', 100, 2000);
      }
   }
   if (!$('#Table5').inViewPort(true))
   {
      $('#Table5').addClass("in-viewport");
   }
   Table5Scroll();
   $(window).scroll(function(event)
   {
      Table5Scroll();
   });
   function Table4Scroll()
   {
      var $obj = $("#Table4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('Table4', 'transform-bounce-in-left', 100, 2000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('Table4', 'animate-rotate-out-left', 100, 2000);
      }
   }
   if (!$('#Table4').inViewPort(true))
   {
      $('#Table4').addClass("in-viewport");
   }
   Table4Scroll();
   $(window).scroll(function(event)
   {
      Table4Scroll();
   });
   function Table6Scroll()
   {
      var $obj = $("#Table6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('Table6', 'transform-bounce-in-right', 100, 2000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('Table6', 'animate-fade-out', 100, 2000);
      }
   }
   if (!$('#Table6').inViewPort(true))
   {
      $('#Table6').addClass("in-viewport");
   }
   Table6Scroll();
   $(window).scroll(function(event)
   {
      Table6Scroll();
   });
   $("a[href*='#team']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#team').offset().top-50 }, 600, 'easeInQuad');
   });
   function Team1Scroll()
   {
      var $obj = $("#wb_Team1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team1', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Team1').inViewPort(true))
   {
      $('#wb_Team1').addClass("in-viewport");
   }
   Team1Scroll();
   $(window).scroll(function(event)
   {
      Team1Scroll();
   });
   function Team2Scroll()
   {
      var $obj = $("#wb_Team2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team2', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Team2').inViewPort(true))
   {
      $('#wb_Team2').addClass("in-viewport");
   }
   Team2Scroll();
   $(window).scroll(function(event)
   {
      Team2Scroll();
   });
   function Team3Scroll()
   {
      var $obj = $("#wb_Team3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Team3', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Team3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Team3').inViewPort(true))
   {
      $('#wb_Team3').addClass("in-viewport");
   }
   Team3Scroll();
   $(window).scroll(function(event)
   {
      Team3Scroll();
   });
   function Name1Scroll()
   {
      var $obj = $("#wb_Name1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name1').inViewPort(true))
   {
      $('#wb_Name1').addClass("in-viewport");
   }
   Name1Scroll();
   $(window).scroll(function(event)
   {
      Name1Scroll();
   });
   function Name2Scroll()
   {
      var $obj = $("#wb_Name2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name2', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name2').inViewPort(true))
   {
      $('#wb_Name2').addClass("in-viewport");
   }
   Name2Scroll();
   $(window).scroll(function(event)
   {
      Name2Scroll();
   });
   function Name3Scroll()
   {
      var $obj = $("#wb_Name3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Name3', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Name3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Name3').inViewPort(true))
   {
      $('#wb_Name3').addClass("in-viewport");
   }
   Name3Scroll();
   $(window).scroll(function(event)
   {
      Name3Scroll();
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-50 }, 600, 'easeInQuad');
   });
   function Text6Scroll()
   {
      var $obj = $("#wb_Text6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text6', 'transform-tada', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text6', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text6').inViewPort(true))
   {
      $('#wb_Text6').addClass("in-viewport");
   }
   Text6Scroll();
   $(window).scroll(function(event)
   {
      Text6Scroll();
   });
   function Text7Scroll()
   {
      var $obj = $("#wb_Text7");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Text7', 'transform-bounce-in-down', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Text7', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text7').inViewPort(true))
   {
      $('#wb_Text7').addClass("in-viewport");
   }
   Text7Scroll();
   $(window).scroll(function(event)
   {
      Text7Scroll();
   });
   function Heading5Scroll()
   {
      var $obj = $("#wb_Heading5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading5', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading5').inViewPort(true))
   {
      $('#wb_Heading5').addClass("in-viewport");
   }
   Heading5Scroll();
   $(window).scroll(function(event)
   {
      Heading5Scroll();
   });
   function FontAwesomeIcon27Scroll()
   {
      var $obj = $("#wb_FontAwesomeIcon27");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon27', 'transform-spring', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon27', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_FontAwesomeIcon27').inViewPort(true))
   {
      $('#wb_FontAwesomeIcon27').addClass("in-viewport");
   }
   FontAwesomeIcon27Scroll();
   $(window).scroll(function(event)
   {
      FontAwesomeIcon27Scroll();
   });
   function Heading1Scroll()
   {
      var $obj = $("#wb_Heading1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading1', 'transform-scale-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading1').inViewPort(true))
   {
      $('#wb_Heading1').addClass("in-viewport");
   }
   Heading1Scroll();
   $(window).scroll(function(event)
   {
      Heading1Scroll();
   });
});
function backgroundZoom(id, frame)
{
   var backgroundProps = ["background-image", "background-position", "background-repeat", "background-size"];
   var props = $('#' + id + ' .' + frame).css(backgroundProps);
   $('#background-zoom').remove();
   var $obj = $('<div id="background-zoom" style="width:100%;height:110%"></div>');
   $obj.css(props);
   $('#' + id + ' .' + frame).prepend($obj);
   AnimateCss('background-zoom', 'background-zoom', 0, 10000);
}
