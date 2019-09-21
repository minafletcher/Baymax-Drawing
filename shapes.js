var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function drawCircle(x, y, r, color, stroke, strokecolor) {
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = stroke;
	context.strokeStyle = strokecolor;
	context.stroke();
}


function drawLine(x_start, y_start, x_end, y_end) {
	context.moveTo(x_start, y_start);
	context.lineTo(x_end, y_end);
	context.lineWidth = 1.25;
	context.stroke();
}

function drawHead(x_start, y_start, p1, p2, p3, p4, x_end, y_end) {
	context.beginPath();
	context.moveTo(x_start, y_start);
	context.bezierCurveTo(p1, p2, p3, p4, x_end, y_end);
	context.lineWidth = 2;
	context.stroke();
	var head_gradient = context.createRadialGradient(274, 63, 30, 274, 63, 70);
	head_gradient.addColorStop(0, "white");
	head_gradient.addColorStop(1, "grey");
	context.fillStyle = head_gradient;
	context.fill();
}

function drawBody() {
	context.beginPath();
	context.moveTo(210, 123);
	context.bezierCurveTo(195, 145, 180, 180, 175, 190);
	context.bezierCurveTo(140, 270, 130, 380, 271, 400);
	context.bezierCurveTo(402, 380, 392, 270, 367, 190);
	context.bezierCurveTo(362, 180, 347, 145, 332, 123);
	context.bezierCurveTo(270, 70, 265, 70, 210, 123);
	context.closePath();
	context.strokeStyle = "#686868";
	context.lineWidth = 2;
	context.stroke();
	var body_gradient = context.createRadialGradient(340, 250, 170, 364, 265, 250);
	body_gradient.addColorStop(0, "white");
	body_gradient.addColorStop(1, "grey");
	context.fillStyle = body_gradient;
	context.fill();
}

function drawLeg1() {
	context.beginPath();
	context.moveTo(271, 400);
	context.bezierCurveTo(271, 420, 274, 460, 259, 475);
	context.bezierCurveTo(243, 483, 228, 483, 212, 475);
	context.bezierCurveTo(190, 460, 190, 400, 195, 373);
	context.bezierCurveTo(200, 365, 210, 365, 271, 400);
	context.closePath();
	context.strokeStyle = "#686868";
	context.lineWidth = 2;
	context.stroke();
	var leg1_gradient = context.createRadialGradient(290, 420, 80, 280, 430, 130);
	leg1_gradient.addColorStop(0, "white");
	leg1_gradient.addColorStop(1, "grey");
	context.fillStyle = leg1_gradient;
	context.fill();
}

function drawLeg2() {
	context.beginPath();
	context.moveTo(271, 400);
	context.bezierCurveTo(271, 420, 274, 460, 283, 475);
	context.bezierCurveTo(299, 483, 314, 483, 330, 475);
	context.bezierCurveTo(352, 460, 352, 400, 347, 370);
	context.bezierCurveTo(342, 365, 332, 365, 271, 400);
	context.closePath();
	context.strokeStyle = "#686868";
	context.lineWidth = 2;
	context.stroke();
	var leg2_gradient = context.createRadialGradient(370, 450, 80, 350, 430, 130);
	leg2_gradient.addColorStop(0, "white");
	leg2_gradient.addColorStop(1, "grey");
	context.fillStyle = leg2_gradient;
	context.fill();
}

function drawArm1() {
	context.beginPath();
	context.moveTo(210, 123);
	context.bezierCurveTo(135, 140, 42, 311, 105, 365);
	context.bezierCurveTo(160, 395, 195, 140, 210, 123);
	context.closePath();
	context.strokeStyle = "#686868";
	context.lineWidth = 2;
	context.stroke();
	var arm1_gradient = context.createRadialGradient(270, 280, 150, 280, 280, 330);
	arm1_gradient.addColorStop(0, "white");
	arm1_gradient.addColorStop(1, "grey");
	context.fillStyle = arm1_gradient;
	context.fill();
}

function drawArm2() {
	context.beginPath();
	context.moveTo(332, 123);
	context.bezierCurveTo(407, 140, 500, 311, 437, 365);
	context.bezierCurveTo(382, 395, 347, 140, 332, 123);
	context.closePath();
	context.strokeStyle = "#686868";
	context.lineWidth = 2;
	context.stroke();
	var arm2_gradient = context.createRadialGradient(265, 310, 180, 265, 310, 280);
	arm2_gradient.addColorStop(0, "white");
	arm2_gradient.addColorStop(1, "grey");
	context.fillStyle = arm2_gradient;
	context.fill();
}

function drawArms() {
	drawArm1();
	drawArm2();
}

function drawLeftFingers() {
	// finger underneath
	context.beginPath();
	context.moveTo(134, 386);
	context.bezierCurveTo(138, 380, 138, 378, 123, 370);
	context.lineWidth = 2;
	context.stroke();
	context.closePath();
	context.fillStyle = "lightgrey";
	context.fill();

	//second finger underneath 
	context.beginPath();
	context.moveTo(101, 360);
	context.bezierCurveTo(98, 361, 100, 380, 120, 390);
	context.lineWidth = 2;
	context.stroke();
	context.fillStyle = "lightgrey";
	context.fill();

	//guard around thumb
	context.beginPath();
	context.moveTo(125, 363);
	context.bezierCurveTo(123, 342, 130, 337, 146, 334);
	context.bezierCurveTo(148, 334, 146, 345, 146, 350);
	context.bezierCurveTo(127, 360, 133, 360, 125, 363);
	context.lineWidth = 2;
	context.stroke();
	context.fillStyle = "white";
	context.fill();

	//thumb
	context.beginPath();
	context.moveTo(146, 350);
	context.bezierCurveTo(146, 350, 155, 367, 150, 373);
	context.bezierCurveTo(145, 378, 135, 380, 132, 359);
	context.lineWidth = 2;
	context.stroke();
	var leftFinger1_gradient = context.createRadialGradient(160, 355, 20, 160, 350, 40);
	leftFinger1_gradient.addColorStop(0, "white");
	leftFinger1_gradient.addColorStop(1, "grey");
	context.fillStyle = leftFinger1_gradient;
	context.fill();

	//pointer finger
	context.beginPath();
	context.moveTo(120, 363);
	context.bezierCurveTo(120, 355, 105, 355, 103, 361);
	context.bezierCurveTo(105, 370, 107, 385, 125, 392);
	context.bezierCurveTo(146, 389, 120, 373, 120, 363);
	context.lineWidth = 2;
	context.stroke();
	context.fillStyle = "white";
	context.fill();
	var leftFinger2_gradient = context.createRadialGradient(130, 363, 20, 130, 363, 40);
	leftFinger2_gradient.addColorStop(0, "white");
	leftFinger2_gradient.addColorStop(1, "grey");
	context.fillStyle = leftFinger2_gradient;
	context.fill();
}

function drawRightFingers() {
	//finger underneath
	context.beginPath();
	context.moveTo(408, 386);
	context.bezierCurveTo(404, 380, 404, 378, 419, 370);
	context.stroke();
	context.closePath();
	context.fillStyle = "lightgrey";
	context.fill();

	//second finger underneath
	context.beginPath();
	context.moveTo(441, 360);
	context.bezierCurveTo(444, 361, 442, 380, 422, 390);
	context.stroke();
	context.fillStyle = "lightgrey";
	context.fill();

	//guard around thumb
	context.beginPath();
	context.moveTo(417, 363);
	context.bezierCurveTo(419, 342, 412, 337, 396, 334);
	context.bezierCurveTo(394, 334, 396, 345, 396, 350);
	context.bezierCurveTo(415, 360, 409, 360, 417, 363);
	context.stroke();
	context.fillStyle = "white";
	context.fill();

	//thumb
	context.beginPath();
	context.moveTo(396, 350);
	context.bezierCurveTo(396, 350, 387, 367, 392, 373);
	context.bezierCurveTo(397, 378, 407, 380, 410, 359);
	context.stroke();
	var rightFinger1_gradient = context.createRadialGradient(362, 360, 10, 362, 360, 40);
	rightFinger1_gradient.addColorStop(0, "grey");
	rightFinger1_gradient.addColorStop(1, "white");
	context.fillStyle = rightFinger1_gradient;
	context.fill();

	//pointer finger
	context.beginPath();
	context.moveTo(422, 363);
	context.bezierCurveTo(422, 355, 437, 355, 439, 361);
	context.bezierCurveTo(437, 370, 435, 385, 417, 392);
	context.bezierCurveTo(396, 389, 422, 373, 422, 363);
	context.lineWidth = 2;
	context.stroke();
	context.fillStyle = "white";
	context.fill();
	var rightFinger2_gradient = context.createRadialGradient(412, 363, 20, 412, 363, 40);
	rightFinger2_gradient.addColorStop(0, "white");
	rightFinger2_gradient.addColorStop(1, "grey");
	context.fillStyle = rightFinger2_gradient;
	context.fill();
}


function drawButton() {
	drawCircle(309, 151, 12, 'white', 0, '#686868');
	context.fillStyle = "whitesmoke";
	context.fill();
	context.moveTo(297, 151);
	context.lineTo(301, 151);
	context.lineTo(305, 147);
	context.lineTo(313, 147);
	context.lineTo(317, 151);
	context.lineTo(321, 151);
	context.lineWidth = 0.5;
	context.stroke();
}

function drawArmor() {
	//right side of body
	context.beginPath();
	context.moveTo(365, 185);
	context.bezierCurveTo(364, 200, 364, 220, 380, 250);
	context.bezierCurveTo(376, 214, 369, 200, 365, 185);
	context.fillStyle = "#f5efef";
	context.fill();

	//left side of body
	context.beginPath();
	context.moveTo(177, 185);
	context.bezierCurveTo(176, 200, 176, 220, 156, 250);
	context.bezierCurveTo(174, 190, 162, 220, 177, 185);
	context.fillStyle = "#f5efef";
	context.fill();

	//right foot upper
	context.beginPath();
	context.moveTo(330, 382);
	context.bezierCurveTo(336, 410, 347, 420, 349, 422);
	context.bezierCurveTo(348, 422, 351, 390, 347, 370);
	context.bezierCurveTo(340, 375, 335, 379, 330, 382);
	context.fillStyle = "#f5efef";
	context.fill();

	//left foot upper
	context.beginPath();
	context.moveTo(212, 382);
	context.bezierCurveTo(206, 410, 195, 420, 193, 422);
	context.bezierCurveTo(192, 420, 195, 370, 195, 375);
	context.bezierCurveTo(202, 380, 207, 380, 212, 384);
	context.fillStyle = "#e8e3e3";
	context.fill();

	// right foot lower
	context.beginPath();
	context.moveTo(342, 460);
	context.bezierCurveTo(342, 460, 276, 455, 278, 455);
	context.bezierCurveTo(275, 494, 339, 483, 340, 460);
	context.fillStyle = "#f5efef";
	context.fill();

	// left foot lower
	context.beginPath();
	context.moveTo(200, 460);
	context.bezierCurveTo(200, 460, 267, 455, 268, 455);
	context.bezierCurveTo(264, 494, 207, 483, 202, 460);
	context.fillStyle = "#f5efef";
	context.fill();

	// right arm
	context.beginPath();
	context.moveTo(420, 202);
	context.bezierCurveTo(422, 210, 423, 230, 447, 255);
	context.bezierCurveTo(445, 253, 429, 210, 420, 202);
	context.fillStyle = "#f5efef";
	context.fill();

	//left arm
	context.beginPath();
	context.moveTo(122, 202);
	context.bezierCurveTo(120, 210, 119, 230, 95, 255);
	context.bezierCurveTo(99, 253, 112, 210, 122, 202);
	context.fillStyle = "#e8e3e3";
	context.fill();
}

function drawLinesOnBody() {
	context.moveTo(170, 220);
	context.bezierCurveTo(170, 210, 370, 210, 370, 220);
	context.lineWidth = 0.05;
	context.stroke();

	context.moveTo(110, 230);
	context.bezierCurveTo(110, 220, 155, 240, 155, 250);
	context.lineWidth = 0.05;
	context.stroke();

	context.moveTo(432, 230);
	context.bezierCurveTo(432, 220, 381, 237, 381, 255);
	context.lineWidth = 0.05;
	context.stroke();
}