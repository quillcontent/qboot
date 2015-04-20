(function(window) {

  function updateNavLinks() {
    var query = '[href="' + location.hash + '"]';
    var item = document.querySelector(query).parentNode;
    var activeItem = item.parentNode.querySelector('.active');

    if (activeItem) {
      activeItem.classList.remove('active');
    }

    if (item) {
      item.classList.add('active');
    }
  };

  window.addEventListener('hashchange', updateNavLinks);

})(window);
