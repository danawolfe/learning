/* Application Sripts */

$(function () {
  'use strict';
});

var count=0;

var cats = [
  {
    "name" : "Cat 1",
    "clicks" : 0,
    "image" : "resources/cat1.jpeg"
  },
  {
    "name" : "Cat 2",
    "clicks" : 0,
    "image" : "resources/cat2.jpeg"
  },
  {
    "name" : "Cat 3",
    "clicks" : 0,
    "image" : "resources/cat3.jpeg"
  },
    {
    "name" : "Cat 4",
    "clicks" : 0,
    "image" : "resources/cat4.jpeg"
  },
  {
    "name" : "Cat 5",
    "clicks" : 0,
    "image" : "resources/cat5.jpeg"
  }

];


/*

$(".cat").click(function(e){
    count++;
    $("#clickCount").text(count + " Clicks!"); 
});

*/

for (i=0; i< cats.length; i++) {
  $("#catList").append("<div>" + cats[i].name + "</div>");
  $("#catList").find("div:last").click( ( function (index) { return function(){ 
    $("#catDisplay").empty();
    $("#catDisplay").append("<div>" + cats[index].name + "</div>");
    $("#catDisplay").append("<div>" + cats[index].clicks + "</div>");
    $("#catDisplay").append("<img src='" + cats[index].image + "'></img>");
    $("#catDisplay").find("img").click(
      function(){
        cats[index].clicks++;
        $("#clickCount").text(cats[index].clicks + " Clicks!");
      }
    );
  }; } ) (i));
};

