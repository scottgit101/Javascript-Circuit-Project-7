$(window).on('scroll', function() {
  
  
    var faqDistance = $('.faq').offset().top;
    console.log(faqDistance);

    var distanceScrolled = $(window).scrollTop();
    console.log(distanceScrolled);

    if (distanceScrolled >= faqDistance) {$('header nav').addClass('scrolled');} 
  
    else {$('header nav').removeClass('scrolled');}
  
  
});