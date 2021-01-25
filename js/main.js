let proj1 = $(".proj1").show();
let proj2 = $(".proj2");
let proj3 = $(".proj3");

$(".button1").click(function(){
    proj1.show();
    proj2.hide();
    proj3.hide();
})

$(".button2").click(function(){
    proj1.hide();
    proj2.show();
    proj3.hide();
})

$(".button3").click(function(){
    proj1.hide();
    proj2.hide();
    proj3.show();
})






// switch (x) {
//     case 0:
//         proj = $("#hide").click(function(){
//             $("p").show();
//           });
//       break;
//     case 1:
//         proj = $("#hide").click(function(){
//             $("p").hide();
//           });
//       break;
//     case 2:
//         proj = $("#hide").click(function(){
//             $("p").hide();
//           });
//       break;
//     case 3:
//         proj = $("#hide").click(function(){
//             $("p").hide();
//           });
//       break;
//     case 4:
//         proj = $("#hide").click(function(){
//             $("p").hide();
//           });
//       break;
//     case 5:
//         proj = $("#hide").click(function(){
//             $("p").hide();
//           });
//       break;
//     case 6:
//         proj = $("#hide").click(function(){
//             $("p").hide();
//           });












// $(".proj2btn").click(function() {
//     $("#projv2").show();
//     $("#proj1").hide();
// });

// $(".proj1btn").click(function() {
//     $("#proj1").show();
//     $("#projv2").hide();
// });

// // $(".col-2").click(function() {
// //     $(".col-2").toggle();
// // });


// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }