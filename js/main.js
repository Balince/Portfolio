$(".proj2btn").click(function() {
    $("#projv2").show();
    $("#proj1").hide();
});

$(".proj1btn").click(function() {
    $("#proj1").show();
    $("#projv2").hide();
});

// $(".col-2").click(function() {
//     $(".col-2").toggle();
// });


var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}