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
};
