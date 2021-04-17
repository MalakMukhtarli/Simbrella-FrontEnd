$(document).ready(function () {

  // navbar fixed-top olmasi
  window.addEventListener("scroll", function () {
    if (scrollY > 55) {
      $("nav").addClass("scroll-nav");
      $("#img-logo").attr("src", scrollSrc);
      
    } else {
      $("nav").removeClass("scroll-nav");
      $("#img-logo").attr("src", initialSrc);
    }
  });


  var initialSrc = "img/oie_transparent.png";
  var scrollSrc = "img/WhatsApp_Image_2021-04-07_at_18.28.25-removebg-preview.png";
  
  $(window).scroll(function() {
     var value = $(this).scrollTop();
     if (value > 55)
        $("#my_image").attr("src", scrollSrc);
     else
        $("#my_image").attr("src", initialSrc);
  });



  $('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


});
