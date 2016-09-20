function toggleActiveState(className) {
  var elements = document.getElementsByClassName(className);
  // This has a loop so that it can handle multiple instances of a class.
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.dataset.state === 'active') {
      element.setAttribute('data-state', '');
    } else {
      element.setAttribute('data-state', 'active');
    }
  }
}

var headerMenu = document.getElementsByClassName('site-header--menu')[0];

headerMenu.onclick = function() {
  toggleActiveState('site-header--links');
  toggleActiveState('site-header--menu');
  toggleActiveState('site-header');
};


// Phone Scroll Goodness.
  var feature1Start   = parseFloat(0);
  var feature1End     = parseFloat(-949) - 100;
  var feature2Start   = parseFloat(-949);
  var feature2End     = parseFloat(-1755) - 100;
  var feature3Start   = parseFloat(-1755);
  var feature3End     = parseFloat(-2378) - 100;
  var feature4Start   = parseFloat(-2378);
  var feature4End     = parseFloat(-2989) - 100;
  var feature5Start   = parseFloat(-2989);
  var feature5End     = parseFloat(-9999);

function movePhone() {
  var fromTop = $('.home-page').offset().top - $(window).scrollTop();

  // Scrolls the phone till it needs to stop.
  var phoneInitial = 100;
  var scrolledPhone = parseFloat(phoneInitial) + parseFloat(fromTop);
  var phoneStopPoint = parseFloat(-472);
  var phoneStartPoint = parseFloat(-3270);
  var phoneDiff = (phoneStartPoint - phoneStopPoint) * parseFloat(-1);

  var screenInitial = 572;
  var scrolledScreen = parseFloat(screenInitial) + parseFloat(fromTop);
  var screenStopPoint = parseFloat(0);
  var screenStartPoint = parseFloat(-2799);
  var screenDiff = (screenStartPoint - screenStopPoint) * parseFloat(-1);

  if (scrolledPhone < phoneStopPoint && scrolledPhone > phoneStartPoint) {
    scrolledPhone = phoneStopPoint;
  } else if (scrolledPhone <= phoneStartPoint) {
    scrolledPhone = parseFloat(scrolledPhone + phoneDiff);
  }

  // Makes the screen fixing only happen on large layout.
  if ($(window).width() > 900) {
    if (scrolledScreen < screenStopPoint && scrolledScreen > screenStartPoint) {
      scrolledScreen = screenStopPoint;
    } else if (scrolledScreen <= screenStartPoint) {
      scrolledScreen = parseFloat(scrolledScreen + screenDiff);
    }
  } else {
    scrolledScreen = 0;
  }

  $('.phone-image-container').css('transform', 'translateY(' + scrolledPhone + 'px)');
  $('.js-screen').css('transform', 'translateY(' + scrolledScreen + 'px)');

  if (fromTop <= feature1Start && fromTop >= feature1End) {
    $('.js-feature-1 .js-screen').attr('data-feature-focus', 'true');
  } else {
    $('.js-feature-1 .js-screen').attr('data-feature-focus', '');
  }

  if (fromTop <= feature2Start && fromTop >= feature2End) {
    $('.js-feature-2 .js-screen').attr('data-feature-focus', 'true');
  } else {
    $('.js-feature-2 .js-screen').attr('data-feature-focus', '');
  }

  if (fromTop <= feature3Start && fromTop >= feature3End) {
    $('.js-feature-3 .js-screen').attr('data-feature-focus', 'true');
  } else {
    $('.js-feature-3 .js-screen').attr('data-feature-focus', '');
  }

  if (fromTop <= feature4Start && fromTop >= feature4End) {
    $('.js-feature-4 .js-screen').attr('data-feature-focus', 'true');
  } else {
    $('.js-feature-4 .js-screen').attr('data-feature-focus', '');
  }

  if (fromTop <= feature5Start && fromTop >= feature5End) {
    $('.js-feature-5 .js-screen').attr('data-feature-focus', 'true');
  } else {
    $('.js-feature-5 .js-screen').attr('data-feature-focus', '');
  }
}

$(function() {
  movePhone();
});
$(window).scroll(function() {
  movePhone();
})
$(window).resize(function() {
  movePhone()
});
