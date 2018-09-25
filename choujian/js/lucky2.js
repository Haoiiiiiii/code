var Theprize = document.getElementById("Theprize");
var Pointer = document.getElementById("Pointer");

var lottery=function(){
	//生成随机数
	var randoml = Math.floor(Math.random() * 100);
	console.log(randoml);
	//将结果进行抽奖
	if(randoml < 1) {
		return {
			code: 1,
			text: "一等奖"
		};
	} 
	else if(randoml < 15) {
		return {
			code: 2,
			text: "2等奖"
		};
	} 
	else if(randoml < 25) {
		return {
			code: 3,
			text: "3等奖"
		};
	} 
	else if(randoml < 35) {
		return {
			code: 4,
			text: "4等奖"
		};
	}
	else if(randoml < 45) {
		return {
			code: 5,
			text: "5等奖"
		};
	}
	else if(randoml < 55) {
		return {
			code: 6,
			text: "6等奖"
		};
	}
	else {
		return {
			code: 7,
			text: "未中奖"
		};
	}

};
		
	//旋转角度
	var rotating = function(param) {
		var Angle = 30 + (360 / 7) * (param.code - 1);
		Theprize.style.transform = 'rotate(' + (Angle + 360 * 3) + 'deg)';
		Theprize.style.transition = 'all 1s';
	//旋转完成恢复原来角度
	setTimeout(function() {
			Theprize.style.transform = 'rotate(' + Angle + 'deg)';
			Theprize.style.transition = 'all 0s';
			canClick=true;
			alert(param.text);
			console.log(param.text);
		}, 1000)
	}
	var canClick=true;
	Pointer.onclick=function(){
		if (canClick===true) {
			var result=lottery();
			rotating(result);
		}
		canClick = false;
	}