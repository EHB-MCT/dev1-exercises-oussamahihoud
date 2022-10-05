"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 5;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(20, 50);
   context.lineTo(300, 50);
   context.lineTo(300, 150)
   context.lineTo(20, 150)
   context.lineTo(20, 50)
   context.stroke();

   context.beginPath();
   context.moveTo(400, 50);
   context.lineTo(400, 150);
   context.lineTo(500, 150);
   context.lineTo(500, 50);
   context.stroke();
   


   context.beginPath();
   context.moveTo(700, 50);
   context.lineTo(600, 50);
   context.lineTo(600, 75);
   context.lineTo(700, 75);
   context.lineTo(700, 150);
   context.lineTo(600, 150);



   context.stroke();

   context.beginPath();
   context.moveTo(900, 50);
   context.lineTo(800, 50);
   context.lineTo(800, 75);
   context.lineTo(900, 75);
   context.lineTo(900, 150);
   context.lineTo(800, 150);



   context.stroke();
   
}