"use strict";

$(window).ready(function () {
  $(".active").on("click", function () {
    $(".login").slideToggle();
  }); //scroll

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $(".scroll").fadeIn();
    } else {
      $(".scroll").fadeOut();
    }
  });
  $(".scroll").on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
  }); //slide

  $(".slick-slider").slick({
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true
  });
});