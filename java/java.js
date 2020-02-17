$(document).ready(function(){
   $(".fb-analysis").hover(function(){
      $(".form").show(500); 
   });
    $("#cross").click(function(){
       $(".form").css("opacity","0");
    });

});
