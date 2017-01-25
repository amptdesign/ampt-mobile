$(document).ready(function() {
    
    // INITIALIZE TOOLTIPS & IMAGE BOX
    $('a').tooltip();  
    $(".fancybox").fancybox({ padding : 0,
        helpers : { title: { type: 'inside', position: 'top' }, overlay: { css : { 'background':'rgba(0,0,0, 0.80)' } } }, 
        nextEffect: 'fade', prevEffect: 'fade'
    });
  
    function scrollDown(dist, speed) { $('html,body').animate({ scrollTop: dist }, speed); }
  
    // SCROLL TO TOP OF PAGE 
    scrollDown(0, 1400);

    function unveil(target, time, queue) {
        $(target).stop(true, true).fadeIn({ duration: time, queue: queue }).addClass('my-flip');
    }

  // ==================================================
  //
  //    COMPLETE WEBSITE DESIGN INFORMATION
  //    1) CLEAR EVERYTHING 2) SLOWLY DISPLAY TEXT 
  //    3) BRING IN GIRL ON ROCKET FROM RIGHT
  //
  // ==================================================

 
    $( ".learn-1" ).click(function(e) {

            e.preventDefault();

            // CLEAR HOME SCREEN
            $("#carousel").fadeOut(800);
            $(".our-services").fadeOut(800);

            scrollDown(120, 1200);
            
            setTimeout(function(){ unveil(".our-services-2", 800, false); setTimeout(act2, 800); }, 600);

            var act2 = function () {
                          unveil(".web2", 1800, false);
                          $('.color-circle').tween({ 
                              opacity: { start: 0,   stop: 50, time: 2, duration: 5, effect:'easeInOut' },
                              rotate:  { start: 451, stop: 339,time: 2, duration: 5, effect:'easeInOut' }
                           }); 
                          $.play(); setTimeout(act3, 600);
            }

            var act3 = function () {
                          $(".hottie-rocket").transition({
                                opacity: 1, x:'-2400px', duration: 1550, easing: 'easeInOutBack',
                                complete: function() { setTimeout(act4, 1000); }
                          });
            }
            
            var act4 = function () { unveil(".web3", 1000, false);          setTimeout(act5, 100); }
            var act5 = function () { unveil(".web4", 1000, false);          setTimeout(act6, 1000); }
            var act6 = function () { $("#win").show().addClass('my-flip');  setTimeout(act7, 1000); }
            var act7 = function () { $("#maybe-later").show().addClass('my-flip').fadeIn({ duration: 3000, queue: true }); } 
    });
  
  $("#learn-2").click(function(e) { e.preventDefault();
      $(".how-we-can-help").stop(true, true).fadeIn({ duration: 800, queue: false }).css('display', 'none').slideDown(900, "easeOutBounce");
  });
  
  $("#learn-3").click(function(e) { e.preventDefault();
      $(".how-we-can-help-2").stop(true, true).fadeIn({ duration: 800, queue: false }).css('display', 'none').slideDown(800, "easeOutBounce");
  });
  
  $("#learn-4").click(function(e) { e.preventDefault();
      $(".how-we-can-help-3").stop(true, true).fadeIn({ duration: 800, queue: false }).css('display', 'none').slideDown(800, "easeOutBounce");
  });
  
  $("#maybe-later").click(function(e) { 

      e.preventDefault();

      $(".our-services-2").hide();
      $(".color-circle").hide(); 

      scrollDown(0, 1400);
      $(".carousel").show();     
      $(".our-services").show();
      // $(".our-team").show(); 
      
  });
  
  $("#win").mouseenter(function() { $( ".color-circle" ).animate({ opacity: 0.9 }, 1300 ); });
  // $("#win").mouseleave(function() { $( ".color-circle" ).animate({ opacity: 0.5 }, 1300 ); });
  // window.team_wobbling = false;
  
  $( ".contact" ).click(function(e) {
    e.preventDefault();
    $("#carousel").hide();
    $(".our-services").hide(); 
    $(".our-services-2").hide(); 
    $(".our-team").hide(); 
    $("#contact-us").show().addClass("enter-left-bounce");
    $("#subject").val($(this).data("target"));
    scrollDown(120, 1200);


    setTimeout(function(){$("#contact-us").removeClass('enter-left-bounce')}, 1200);
  });
  $( "#email-cancel" ).click(function() {
        $("#contact-us").hide("fade", { direction: "right"}, 100);
        scrollDown(0,1000);
        $(".our-services").show(); 
        $(".our-team").show();
        $(".carousel").show(); 
  });

});