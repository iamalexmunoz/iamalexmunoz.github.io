$(document).on("scroll", function () {
  
  var pixels = $(document).scrollTop()
  
  var font = pixels / 10 + 12
  
  $("h1").css("font-size", font)
  
  $("span").html(font)
  
})