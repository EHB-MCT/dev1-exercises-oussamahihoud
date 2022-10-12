"use sctrict"

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;
let margin = 50;

function drawLines(){
context.beginPath();

context.moveTo(margin,20);
context.lineTo(width-margin,20);
context.lineTo(margin,40);
context.lineTo(width-margin,40);
context.lineTo(margin,70);
context.lineTo(width-margin,80);
context.lineTo(margin,120);
context.lineTo(width-margin,120);
context.lineTo(margin,160)
context.lineTo(width-margin,160)
context.lineTo(margin,20)
context.stroke();

}
drawLines();
