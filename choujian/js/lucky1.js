var Theprize = document.getElementById("Theprize");
var Pointer = document.getElementById("Pointer");
var level;
var canClick =true;

Pointer.onclick = function() {
	//旋转过程中无法连续点击抽奖
	if (canClick === true) {
		canClick =false;
	//生成随机数
	var randoml = Math.floor(Math.random() * 100);
	console.log(randoml);
	//生成结果抽奖
	if(randoml < 1) {
		level = {
			code: 1,
			text: "一等奖"
		};
	}
	else if(randoml < 15){
		level = {
			code: 2,
			text: "2等奖"
		};
	}
	else if(randoml < 25){
		level = {
			code: 3,
			text: "3等奖"
		};
	}
	else if(randoml < 35){
		level = {
			code: 4,
			text: "4等奖"
		};
	}
	else if(randoml < 45){
		level = {
			code: 5,
			text: "5等奖"
		};
	}
	else if(randoml < 55){
		level = {
			code: 6,
			text: "6等奖"
		};
	}
	else{
		level = {
			code: 7,
			text: "未中奖！"
		};
	 }
	
	//旋转角度
	var Angle=30 + (360 / 7) * (level.code - 1);
	Theprize.style.transition='all 1s';
	Theprize.style.transform='rotate(' + (Angle + 360*3) + 'deg)';
	console.log(Angle);
	console.log(level.text);
	//恢复原来角度
	setTimeout(function(){
		Theprize.style.transition='all 0s';
        Theprize.style.transform='rotate(' + Angle + 'deg)';
    //旋转完成可再次抽奖
        canClick=true;
		alert(level.text);
	},1000)
	}
}