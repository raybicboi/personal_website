// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// slick stuff
    $(document).ready(function(){
      // $('.single-item').slick();
      $('.centermode-slick').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    });
// end slick stuff


!(function($) {
  "use strict";
  // adapted from template https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/
  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);


// FIREBASE //
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgIeN9q3ppXv1Y4LLJoGdVx-86okZxmUY",
  authDomain: "clearterms-website.firebaseapp.com",
  databaseURL: "https://clearterms-website.firebaseio.com",
  projectId: "clearterms-website",
  storageBucket: "clearterms-website.appspot.com",
  messagingSenderId: "1067597214134",
  appId: "1:1067597214134:web:8f6a6c13780e4c14cbd117"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the firebase database service
var database = firebase.database();

//----------STACY'S CODE ENDS HERE--------------------
 
// Crowdsourcing Interactive Part (form)
function statement1() {
  var crowdForm1 = document.getElementById("crowd-form1");
  var crowdForm2 = document.getElementById("crowd-form2");
  var crowdForm3 = document.getElementById("crowd-form3");
  var statement = document.getElementById("statement-inner1");
  if (crowdForm1.style.display === "block") {
    crowdForm1.style.display = "none";
    statement.scrollIntoView({block:"center", behavior: 'smooth'});
  } else {
    crowdForm2.style.display = "none";
    crowdForm3.style.display = "none";
    crowdForm1.style.display = "block";
    crowdForm1.scrollIntoView({block:"end", behavior: 'smooth'});
  }
}
 
function statement2() {
  var crowdForm1 = document.getElementById("crowd-form1");
  var crowdForm2 = document.getElementById("crowd-form2");
  var crowdForm3 = document.getElementById("crowd-form3");
  var statement = document.getElementById("statement-inner2");
  if (crowdForm2.style.display === "block") {
    crowdForm2.style.display = "none";
    statement.scrollIntoView({block:"center", behavior: 'smooth'});
  } else {
    crowdForm1.style.display = "none";
    crowdForm3.style.display = "none";
    crowdForm2.style.display = "block";
    crowdForm2.scrollIntoView({block:"end", behavior: 'smooth'});
  }
}

function statement3() {
  var crowdForm1 = document.getElementById("crowd-form1");
  var crowdForm2 = document.getElementById("crowd-form2");
  var crowdForm3 = document.getElementById("crowd-form3");
  var statement = document.getElementById("statement-inner3");
  if (crowdForm3.style.display === "block") {
    crowdForm3.style.display = "none";
    statement.scrollIntoView({block:"center", behavior: 'smooth'});
  } else {
    crowdForm1.style.display = "none";
    crowdForm2.style.display = "none";
    crowdForm3.style.display = "block";
    crowdForm3.scrollIntoView({block:"end", behavior: 'smooth'});
  }
}

// croudsourcing modified radio button javascript
function statement1Select() {
  var statement1 = document.getElementById("statement1");
  statement1.checked = true;
}

function statement2Select() {
  var statement2 = document.getElementById("statement2");
  statement2.checked = true;
}

// function for search functionality
function searchCompany() {
  var nameCounter = 0;
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      ul.style.display = "block";

      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          nameCounter++;
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
      var noRes = document.getElementById("noRes");
      if (nameCounter == 0) {
        noRes.style.display = "block";
      } else {
        noRes.style.display = "none";
      }
      nameCounter = 0;
    }
  });
}

function searchCompanyEnter() {
  var nameCounter = 0;
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  ul.style.display = "block";

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      nameCounter++;
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  var noRes = document.getElementById("noRes");
  if (nameCounter == 0) {
    noRes.style.display = "block";
  } else {
    noRes.style.display = "none";
  }
  nameCounter = 0;
}