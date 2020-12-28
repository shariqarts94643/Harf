
// TABS 2 
jQuery('ul.tabs').each(function () {

  // For each set of tabs, we want to keep track of
  // which tab is active and it's associated content
  var $active, $content,
  $links = jQuery(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = jQuery($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);

  $active.addClass('active');
  $("ul li:has(a.active)").addClass("active");

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    jQuery(this.hash).hide();
  });

  // Bind the click event handler
  jQuery(this).on('click', 'a', function (e) {
    // Make the old tab inactive.
    $active.removeClass('active');
    $("ul li:has(a)").removeClass("active");
    $content.hide();

    // Update the variables with the new link and content
    $active = jQuery(this);
    $content = jQuery(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $("ul li:has(a.active)").addClass("active");
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});


function topNav() {
  var x = document.getElementById("topNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function sideNav() {
  var x = document.getElementById("sidenav");
  var y = document.getElementById("main");
  var z = document.getElementById("oSideBar");
  if (x.className === "sidenav") {
    x.className += " open";
  } else {
    x.className = "sidenav";
  }
  if (y.className === "main") {
    y.className += " slide";
  } else {
    y.className = "main";
  }
  if (z.className === "oSideBar") {
    z.className += " open";
  } else {
    z.className = "oSideBar";
  }
}

$('#oSideBar').click(function () {
  $("i", this).toggleClass("fas fa-arrow-right fas fa-arrow-left");
});

$(function () {
  $('.table-responsive').css({ height: $(window).innerHeight() / 2.5 });
  $(window).resize(function () {
    $('.table-responsive').css({ height: $(window).innerHeight() });
  });
});


// Registration Form
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function () {
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function () {
    alert("Your Form Successfully Signed up");
    location.reload();
  }, 800);
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});