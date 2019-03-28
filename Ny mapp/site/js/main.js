
$(".menu").hide();

$("#close").click(function(){
    $(this).parents().find(".menu").hide(200);
  });


$("#hamburger-menu").click(function(){
   console.log( $(this).parents().find(".menu").show(200));
  });  