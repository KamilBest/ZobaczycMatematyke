$(document).ready(function() {
       $('.service').hover(function() {
              var $this = $(this);
              if ($this.hasClass("open")) {
                     $this.find('.service-icon').animate({left: "0"});
                     $this.find('.service-description').animate({left: "100%"});
                     $this.removeClass("open");
              }
              else {
                     $this.find('.service-icon').animate({left: "-100%"});
                     $this.find('.service-description').animate({left: "0"});
                     $this.addClass("open");
              }
       });
});