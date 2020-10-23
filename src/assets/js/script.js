$(document).ready(function () {
  $('#hamburger').on('click', function () {
    $('.header-section__content__main').toggleClass('show');
    $('body').toggleClass('body-overflow');
    $(this).toggleClass("active");
  })

  $('.header-logo').click(function (e) {
    e.preventDefault();
    $('.header-section__content__main').removeClass('show');
    $('body').removeClass('body-overflow');
    $(this).removeClass("active");
    $('#hamburger').removeClass('active')
    $('html, body').animate({
      scrollTop: 0
    }, 700)
  })
 // To add new section block you should make class name same that nav-anchor id.// 
 $('.menu-item a').click(function(e){
  e.preventDefault();
  var menuScroll = e.target.id;
  var thisBlock = '.' + menuScroll;
  $('.header-section__content__main').removeClass('show');
  $('body').removeClass('body-overflow');
  $(this).removeClass("active");
  $('#hamburger').removeClass('active')
  $('html, body').animate({
      scrollTop: $(thisBlock).offset().top-75
  },700)
})
})

