$('.header__mobile-btn').click(function () {
  $('.header__navigation').slideToggle();
  $('.header__user-list').slideToggle();
  $('.header__user-list').css('display', 'flex');
  $('.header__user').css('order', '1')
  // $('.header__settings').slideToggle();
  // $('.header__user-block').slideToggle();
  if ($(this).hasClass('header__mobile-btn--gamburger')) {
    $(this).removeClass('header__mobile-btn--gamburger');
    $(this).addClass('header__mobile-btn--close')
  } else if ($(this).hasClass('header__mobile-btn--close')) {
    $(this).removeClass('header__mobile-btn--close');
    $(this).addClass('header__mobile-btn--gamburger');
    $('.header__user').removeAttr('style');
    $('.header__user-list').slideOut();
    $('.header__user-list').removeAttr('style');
  }
});

$('.header__logged-icon-img').click(function () {
  $('.header__logged-name').slideToggle();
  $('.header__logged-list').slideToggle();
  $('.header__logged-icon').css('display', 'block');
});
