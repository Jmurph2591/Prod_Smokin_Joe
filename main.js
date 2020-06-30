/*
//open close sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
*/


//scroll to top button
const scrollToTop = $('#scrollToTop');

$(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('#scrollToTop').fadeIn();
    } else {
      $('#scrollToTop').fadeOut();
    }
  });

  $('#scrollToTop').click(function () {
    $('html').animate({ scrollTop: '0' }, 100);
  });
});
