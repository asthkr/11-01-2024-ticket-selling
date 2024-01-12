$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    }
  });

  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    nav: false,
    loop: true,
    dots:false,
  navText:false,
autoplay:true,
autoplaySpeed:2000,
smartSpeed:500
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

  $('.sliderfooter').slick({
    draggable: true,
    arrows: false,
    dots: false,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 100,
    autoplay:true,
    autoplaySpeed:2000
  })