// 获取页面元素
var bigcontent = document.getElementById('content');
var bigstart = document.getElementById('start');
var bigmain = document.getElementById('main');
var bigscore = document.getElementById('score');
var bigsuspend = document.getElementById('suspend');
var bigcontinue = document.getElementById('continue');
var bigsettlement = document.getElementById('settlement');

var score = 0;
// 获取游戏界面宽高度
var contentclass = bigcontent.currentStyle? bigcontent.currentStyle: window.getComputedStyle(bigcontent, null);
var startSizeX = parseInt(contentclass.width);
var startSizeY = parseInt(contentclass.height);

// 创建不同飞机型号对象
var enemyPlaneX ={
	width: 34,
	height: 24,
	imgSrc: './img/enemy-plane-s.png',
	boomSrc: './img/enemy-plane-s-boom.gif',
	boomTime: 100,
	hp: 1
};

var enemyPlaneZ ={
	width: 46,
	height: 60,
	imgSrc: './img/enemy-plane-m.png',
	hitSrc: './img/enemy-plane-m-z.png',
	boomSrc: './img/enemy-plane-m-boom.gif',
	boomTime: 100,
	hp: 5
};

var enemyPlaneD ={
	width: 110,
	height: 164,
	imgSrc: './img/enemy-plane-l.png',
	hitSrc: './img/enemy-plane-l-d.png',
	boomSrc: './img/enemy-plane-l-boom.gif',
	boomTime: 100,
	hp: 15
};

var Ownbullet ={
	width: 6,
	height: 14,
	imgSrc: './img/our-bullet.png',
	speed: 20
}

// 本机
var Ownaircraft ={
	width: 66,
	height: 80,
	imgSrc: './img/our-plane.gif',
	boomSrc: './img/our-plane-boom.gif',
	boomTime: 100,
	hp: 1
}

// 创建飞机的构造函数
var Plane = function (centerX,centerY,planeModel,speed) {
	this.centerX = centerX;
	this.centerY = centerY;

	this.sizeX = planeModel.width;
	this.sizeY = planeModel.height;
	this.imgsrc = planeModel.imgSrc;
	this.hitsrc = planeModel.hitSrc;
	this.boomsrc = planeModel.boomSrc;
	this.boomtime = planeModel.boomTime;
	this.hp = planeModel.hp;

	this.speed = speed;
	
	this.currentX = this.centerX - this.sizeX / 2;
	this.currentY = this.centerY - this.sizeY / 2;
}

// 画出一个飞机的方法
Plane.prototype.draw = function() {
	this.imgNode = new Image();
	this.imgNode.src = this.imgsrc;
	this.imgNode.style.top = this.centerY - this.sizeY / 2 + 'px';
	this.imgNode.style.left = this.centerX - this.sizeX / 2 + 'px';
	
	bigmain.appendChild(this.imgNode);
}

// 某个飞机的移动方法
Plane.prototype.move = function(){
	
	this.currentY += this.speed;
	this.centerY = this.currentY + this.sizeY / 2;
	this.imgNode.style.top = this.currentY + 'px';
	this.beyond();
}

// 检测飞机超出画布
Plane.prototype.beyond = function(){
	this.beyondBottom = this.currentY > (startSizeY - this.sizeY);
	this.beyondtop = this.currentY < 0;
}

// 敌机的构造函数
var enemyplane = function(){
	this.enemyplan = [];
	this.generatedplane = 0;
}


// 生成随机数
var randomNumber = function(max,min){
	return Math.round(Math.random() * (max-min)) + min;
}

// 生成新飞机
enemyplane.prototype.createNewenemy = function(){
	this.generatedplane ++;
	if (this.generatedplane%15 === 0) {
		this.newenemy = new Plane(randomNumber(startSizeX-enemyPlaneD.width/2,enemyPlaneD.width/2),12,enemyPlaneD,1);
	}else if(this.generatedplane%5 === 0){
		this.newenemy = new Plane(randomNumber(startSizeX-enemyPlaneZ.width-2,enemyPlaneZ.width/2),12,enemyPlaneZ,randomNumber(3,2))
	}else{
		this.newenemy = new Plane(randomNumber(startSizeX-enemyPlaneX.width/2,enemyPlaneX.width/2),12,enemyPlaneX,randomNumber(5,3))
	}
	
	this.enemyplan.push(this.newenemy);
	
	this.newenemy.draw();
}

// 移动飞机
enemyplane.prototype.moveEnemy = function(){
	for (var i = 0; i < this.enemyplan.length; i++) {
		this.enemyplan[i].move();
// 超出
	if(this.enemyplan[i].beyondBottom){
		bigmain.removeChild(this.enemyplan[i].imgNode);
		this.enemyplan.splice(i,1);
	   }
	// 子弹碰撞
	for (var k = 0; k < planeW.segments.length; k++) {
		
		if (this.enemyplan[i].hp > 0) {
			var CollisionX = Math.abs(this.enemyplan[i].centerX - planeW.segments[k].centerX) < (this.enemyplan[i].sizeX/2 + planeW.segments[k].sizeX/2);
			var CollisionY = Math.abs(this.enemyplan[i].centerY - planeW.segments[k].centerY) < (this.enemyplan[i].sizeY/2 + planeW.segments[k].sizeY/2);
			var BullterCollision = CollisionX && CollisionY;
			
			if (BullterCollision) {
				score++;
				bigscore.innerHTML = score;
				this.enemyplan[i].imgNode.src = this.enemyplan[i].hitsrc?this.enemyplan[i].hitsrc:this.enemyplan[i].boomsrc;
				this.enemyplan[i].hp--;
				
				bigmain.removeChild(planeW.segments[k].imgNode);
				planeW.segments.splice(k,1);
			}
		}
	}
	// 检测与我方飞机的碰撞
	var ownplaneCollisionX = Math.abs(this.enemyplan[i].centerX - planeW.centerX) < (this.enemyplan[i].sizeX / 2 + planeW.sizeX / 2);
	var ownplaneCollisionY = Math.abs(this.enemyplan[i].centerY - planeW.centerY) < (this.enemyplan[i].sizeY / 2 + planeW.sizeY / 2);
	var planeCollision = ownplaneCollisionX && ownplaneCollisionY;
	if (planeCollision) {
		this.enemyplan[i].hp = 0;
		planeW.hp--;
	}
	//检测飞机是否死亡
	if (this.enemyplan[i].hp <= 0) {
		this.enemyplan[i].imgNode.src = this.enemyplan[i].boomsrc;
		this.enemyplan[i].boomtime -= 10;
		// 把飞机干掉
		if (this.enemyplan[i].boomtime <= 0) {
			this.enemyplan[i].centerY = this;
			bigmain.removeChild(this.enemyplan[i].imgNode);
			this.enemyplan.splice(i,1);
		}
	}
	}
}

var planeW = new Plane(startSizeX/2, startSizeY - Ownaircraft.height/2, Ownaircraft, 0)
planeW.draw();

bigmain.onmousemove = function(ev){
	
	planeW.centerX = ev.clientX - bigcontent.offsetLeft;
	if(planeW.centerX < planeW.sizeX / 2){
		planeW.centerX = planeW.sizeX / 2;
	}
	if (planeW.centerX > (startSizeX- planeW.sizeX / 2)) {
		planeW.centerX = (startSizeX- planeW.sizeX /  2);
	}
	
	planeW.centerY = ev.clientY - bigcontent.offsetTop;
	if(planeW.centerY < planeW.sizeY / 2){
		planeW.centerY = planeW.sizeY / 2;
	}
	if (planeW.centerY > (startSizeY - planeW.sizeY / 2)) {
		planeW.centerY = (startSizeY - planeW.sizeY / 2);
	}
	
	planeW.currentX = planeW.centerX - planeW.sizeX / 2;
	planeW.currentY = planeW.centerY - planeW.sizeY / 2;
	
	planeW.imgNode.style.left = planeW.currentX + 'px';
	planeW.imgNode.style.top = planeW.currentY + 'px';
}

// 用数组 保存子弹
planeW.segments = [];
// 子弹构造函数
var bullet = Plane;
function creatBullet (){
	planeW.newBullet = new bullet(planeW.centerX,planeW.centerY - planeW.sizeY/2,Ownbullet,-10);
	planeW.segments.push(planeW.newBullet);
	planeW.newBullet.draw();
}
function moveBullet (){
	for (var i = 0; i < planeW.segments.length; i++) {
		planeW.segments[i].move();
		if (planeW.segments[i].beyondtop) {
			bigmain.removeChild(planeW.segments[i].imgNode);
			planeW.segments.splice(i,1);
		}
	}
}

// 飞机碰撞 游戏结束暂停
var over = function(){
	planeW.imgNode.src = planeW.boomsrc;
	clearInterval(stoptime);
	bigsettlement.style.display = 'block';
    document.querySelector('p#final-score').innerHTML = score;
}

// 实例化所有敌机
var allenemy = new enemyplane();

var time = 0;

var stoptime;
var start = function(){
	
	bigstart.style.display = 'none';
	bigmain.style.display = 'block';
	bigsuspend.style.display = 'none';
	bigsettlement.style.display = 'none';
	
    stoptime = setInterval(function(){
	time ++;
	if (time%20 === 0) {
		allenemy.createNewenemy();
	}
	    allenemy.moveEnemy();
	if (time%5 ===0 ) {
		creatBullet();
	}
	    moveBullet();
	if (planeW.hp <=0 ) {
		over();
	}
},50)
}

var restart = function (){
	window.location.reload();
}

bigcontinue.onclick = function(ev){
	ev.stopPropagation();
	start();
};

   bigmain.onclick = function(){
   	clearTimeout(stoptime);
   	bigsuspend.style.display = 'block';
};

