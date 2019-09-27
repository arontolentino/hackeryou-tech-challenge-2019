function mobileMenu() {
  var navBar = document.getElementById('navbar__nav--links');
  if (navBar.className === 'navbar__nav--links') {
    navBar.className += ' responsive-menu';
  } else {
    navBar.className = 'navbar__nav--links';
  }
}
