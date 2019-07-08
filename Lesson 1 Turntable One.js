$('.faq a').on('click', function(e) {
  

    e.preventDefault();

    $(this).parents('.info-item').toggleClass('active');

    $(this).parents('.info-item').siblings().removeClass('active');
  
  
});