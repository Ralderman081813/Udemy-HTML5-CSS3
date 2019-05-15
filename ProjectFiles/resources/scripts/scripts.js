$(document).ready(function() {
    $(".features--js").waypoint(function(direction) {
       if (direction == "down") {
           $("nav").addClass("sticky");
       } else {
           $("nav").removeClass("sticky");
       }
    });
    /*
    $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })
    */
});
