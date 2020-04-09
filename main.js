//Open/Close Sidebar
    $(document).ready(function () {
      $('#btn1').click(function () {
        $('#box').show() //.animate({width: '350px'});
      });
    });
    $('#btn2').click(function () {
      $('#box').animate({width: '0'},1000, () => {
        $('#box').hide();
      });
      $('#box').hide('slide')
    });
  

  
// 2nd attempt at sidebar open/close
/*
function sideBarOpenClose() {
    $('#btn1').on('click', '.sidebar', function(e) {
        e.preventDefault();
        $('#box').show();
    })
}
*/



//Producer Tips Slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}


//Scroll to top button

//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




