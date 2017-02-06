// Parallax effect for the header background
function parallax(){
    var headerSpace = $('.header').outerHeight();
    var scrolled = $(window).scrollTop();
    $('.header-parallax')
      .css('height', (headerSpace-(scrolled)) + 'px');
}

function navbarSmall(shrinkHeight) {
  var scrolled = $(window).scrollTop();
  if (scrolled > shrinkHeight) {
    $('.navbar').addClass('navbar-small');
  }
  else {
    $('.navbar').removeClass('navbar-small');
  }
}

// Scroll event
$(window).scroll(function(e){
    parallax();
    navbarSmall(75);
});
