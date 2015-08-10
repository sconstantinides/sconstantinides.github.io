$(function() {
  animateBreadcrumbs();

  $('.thumb').click(function() {
    $(this).addClass('current').siblings().removeClass('current');
    $(this).siblings('.large').attr('src', $(this).attr('src'));
  });
});

function animateBreadcrumbs() {
  $('.back').animate({width: 'toggle'}, 500);
  $('.breadcrumbs .current').addClass('gray');
}