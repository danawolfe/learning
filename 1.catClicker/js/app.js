/* Application Sripts */

$(function () {
  'use strict';
});

var count=0;

$("#catImage").click(function(e){
   count++;
    var t=count + " Clicks!";
    $("#clickCount").text(t); 
});
