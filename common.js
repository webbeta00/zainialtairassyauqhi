// Move all common js code here

/*----------------------------------
  Search Page Fancybox
----------------------------------*/

$(document).on('ready', function() {

if($("[data-fancybox=images]").length){
  $("[data-fancybox=images]").fancybox({
    buttons : [ 
      "slideShow",
      "share",
      "zoom",
      "fullScreen",
      "close",
      "thumbs"
    ],
    thumbs : {
      autoStart : false
    }
  });

}
if($("[data-fancybox=search-images]").length){

  $("[data-fancybox=search-images]").fancybox({
    buttons : [ 
      "slideShow",
      "share",
      "zoom",
      "fullScreen",
      "close",
      "thumbs"
    ],
    thumbs : {
      autoStart : false
    }
  });
}
});



/*----------------------------------
  Masonry
----------------------------------*/
      
if($(".blogs-masonry").length){
  $(window).on( "load", function() {
      $(".blogs-masonry").masonry({
        itemSelector: ".col.col-item",
      });
    });
}

if($(".portfolio-masonry").length){
  $(window).on( "load", function() {
  $(".portfolio-masonry").masonry({
    itemSelector: ".col",
  });
  });
}

if($(".events-masonry").length){
    $(window).on( "load", function() {
    $(".events-masonry").masonry({
      itemSelector: ".col",
    });
  });
}

if($(".prods-masonry").length){
  $(window).on( "load", function() {
  $(".prods-masonry").masonry({
    itemSelector: ".col",
  });
});
}

function getCounter() {
  var countDownDate = new Date("Dec 22, 2024 10:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var textDays = document.getElementById("days");
    var textHours = document.getElementById("hours");
    var textMinutes = document.getElementById("minutes");
    var textSeconds = document.getElementById("seconds");

    textDays.innerHTML = days < 10 ? "0" + days : days;
    textHours.innerHTML = hours < 10 ? "0" + hours : hours;
    textMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    textSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
}
