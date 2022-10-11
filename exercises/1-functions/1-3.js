"use strict"

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');
context.lineWidth = 1;

context.strokeStyle = "red";
context.beginPath();
context.rect(50, 50, 200, 200); 
context.stroke();
context.lineWidth = 1;

context.strokeStyle = "red";
context.beginPath();
context.rect(250, 250, 200, 200);
context.stroke();

context.lineWidth = 1;
context.strokeStyle = "red";
context.fillStyle = "black";
context.beginPath();
context.rect(150, 150, 200, 200);
context.stroke();
context.fill();

context.lineWidth = 1;
context.strokeStyle = "red";
context.beginPath();
context.rect(75, 350, 75, 75);
context.stroke();

context.lineWidth = 1;
context.strokeStyle = "red";
context.beginPath();
context.rect(350, 75, 75, 75);
context.stroke();

context.lineWidth = 1;
context.strokeStyle = "red";
context.fillStyle = "black";
context.beginPath();
context.rect(50, 425, 25, 25);
context.stroke();
context.fill();

context.lineWidth = 1;
context.strokeStyle = "red";
context.fillStyle = "black";
context.beginPath();
context.rect(425, 50, 25, 25);
context.stroke();
context.fill();


