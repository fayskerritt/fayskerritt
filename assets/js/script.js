$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.name').fadeOut();
     }
    else
     {
      $('.name').fadeIn();
     }
 });