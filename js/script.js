

$(document).ready(function(){
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    utilsScript: "vendor/js/utils.js"
  });
});