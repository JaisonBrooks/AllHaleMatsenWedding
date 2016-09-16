function toTop() {
  $('html, body').animate({
    scrollTop: 0,
  }, 1000);
}
$(function() {
  // $('a[href*="#"]:not([href="#"])')
  $('.scroll').click(function() {
    $('li.active').removeClass('active');
    var li = $(this).parent();
    if (!$(li).hasClass('active')) {
      $(li).addClass('active');
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -24,
        }, 1000);
        return false;
      }
    }
  });
  
});
$(function() {
  // Fancybox
  $(".fancybox").fancybox();
});