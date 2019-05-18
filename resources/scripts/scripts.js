$(document).ready(function() {
    /* For the sticky nav */
    $("#features-section").waypoint(function(direction) {
       if (direction == "down") {
           $("nav").addClass("sticky");
       } else {
           $("nav").removeClass("sticky");
       }
    });
    /* Scroll on button click */
    $(".js-scroll-plans").click(function () {
        $("html, body").animate({scrollTop: $("#plans-section")
.offset().top});
    });
    $(".js-scroll-features").click(function () {
        $("html, body").animate({scrollTop: $("#features-section")
.offset().top});
    });
    
    /* Animations on scroll */
    $(".animation-1").waypoint(function(direction) {
        $(".animation-1").addClass('animated fadeIn');
    }, {
        offset: "50%"
    });
    $(".animation-2").waypoint(function(direction) {
        $(".animation-2").addClass('animated fadeInUp');
    }, {
        offset: "50%"
    });
    $(".animation-3").waypoint(function(direction) {
        $(".animation-3").addClass('animated flipInY');
    }, {
        offset: "50%"
    });
    $(".animation-4").waypoint(function(direction) {
        $(".animation-4").addClass('animated pulse');
    }, {
        offset: "50%"
    });
    /* Mobile nav */
    $(".js--mobile-nav-icon").click(function() {
        var nav = $(".js--main-nav");
        var icon = $(".js--mobile-nav-icon i");
        nav.slideToggle(200); // 200: Time it will take for the open/close effect.
        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        };
    });
});
