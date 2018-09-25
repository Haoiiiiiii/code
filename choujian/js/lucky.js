var Pointer = document.getElementById("Pointer");
var Theprize = document.getElementById("Theprize");

var lottery = function() {
	var randomNumber = Math.floor(Math.random() * 100);

	if(randomNumber < 1) {
		return {
			code: 1,
			text: "免单4999元"
		};
	} 
	else if(randomNumber < 10) {
		return {
			code: 2,
			text: "免单50元"
		};
	} 
	else if(randomNumber < 20) {
		return {
			code: 3,
			text: "免单10元"
		};
	} 
	else if(randomNumber < 30) {
		return {
			code: 4,
			text: "免单5元"
		};
	} 
	else if(randomNumber < 40) {
		return {
			code: 5,
			text: "免分期服务费"
		};
	} 
	else if(randomNumber < 50) {
		return {
			code: 6,
			text: "提高白条额度"
		};
	} 
	else {
		return {
			code: 7,
			text: "未中奖"
		};
	}
}
var rotate = function() {
	var x=lottery();
	console.log(x.code);
	var currentAngle = 30 + (360 / 7) * (x.code - 1);
	Theprize.style.transition = 'all 1s';
	Theprize.style.transform = 'rotate(' + (currentAngle + 360 * 3) + 'deg)';
	setTimeout(function() {
		Theprize.style.transition = 'all 0s';
		Theprize.style.transform = 'rotate(' + currentAngle + 'deg)';
		alert(x.text);
		conclickl = true;
	}, 1000)
}
var conclickl = true;
Pointer.onclick = function() {
	if(conclickl === true) {
		rotate();
	}
	conclickl = false;
}