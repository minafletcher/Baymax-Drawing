

function drawFace() {
	drawHead(228, 75, 228, 36, 316, 36, 311, 85);
	drawHead(228, 75, 228, 109, 306, 109, 311, 85);
	drawCircle(253, 70, 4, 'black', 0, 'black');
	drawCircle(289, 73, 4, 'black', 0, 'black');
	drawLine(253, 70, 289, 73);
}

function drawLegs() {
drawLeg1();
drawLeg2();
}

function drawFingers() {
	drawLeftFingers();
	drawRightFingers();
}

function drawDetail() {
	drawLinesOnBody();
	drawArmor();
	drawButton();
}

drawArms();
drawFingers();
drawLegs();
drawBody();
drawFace();
drawDetail();

