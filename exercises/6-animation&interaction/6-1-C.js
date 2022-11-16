"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

const width = window.innerWidth;
const height = window.innerHeight;

setup();

function setup() {
	context.lineWidth = 2;
	context.strokeStyle = "red";
	context.fillStyle = "black";
}

window.onmousemove = move;
function move(eventData) {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	let mX = eventData.pageX;
	let mY = eventData.pageY;
	drawCrosshair(mX, mY);
}

function drawCrosshair(x, y) {
	Utils.drawLine(0, y, width, y);
	Utils.drawLine(x, 0, x, height);
}
