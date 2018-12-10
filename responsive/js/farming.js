var box = document.querySelector('.row');
var boxxY = box.offsetTop;

var about = document.querySelector('.content');
var rongY = about.offsetTop;

var R1 = document.querySelector('.left');
var r1Y = R1.offsetTop;

var R2 = document.querySelector('.right');
var r2Y = R2.offsetTop;

var icon = document.querySelector('.ico');
var icoY = icon.offsetTop;

var work = document.querySelector('.works');
var worksY = work.offsetTop;

var card = document.querySelector('.new');
var newY = card.offsetTop;

var ms1 = document.querySelector('.mes1');
var mes1Y = ms1.offsetTop;

var ms2 = document.querySelector('.mes2');
var mes2Y = ms2.offsetTop;

var ms3 = document.querySelector('.mes3');
var mes3Y = ms3.offsetTop;

var i = document.querySelector('.icon');
var iconY = i.offsetTop;

var l = document.querySelector('.last');
var lastY = l.offsetTop;

document.body.onscroll = function(){
	if(window.pageYOffset > boxxY - window.innerHeight + box.clientHeight){
		box.className = 'row active';
	}
	if(window.pageYOffset > rongY - window.innerHeight + about.clientHeight){
		about.className = 'content active';
	}
	if(window.pageYOffset > r1Y - window.innerHeight + R1.clientHeight){
		R1.className = 'left active';
	}
	if(window.pageYOffset > r2Y - window.innerHeight + R2.clientHeight){
		R2.className = 'right active';
	}
	if(window.pageYOffset > icoY - window.innerHeight + icon.clientHeight){
		icon.className = 'ico active';
	}
	if(window.pageYOffset > worksY - window.innerHeight + work.clientHeight){
		work.className = 'works active';
	}
	if(window.pageYOffset > newY - window.innerHeight + card.clientHeight){
		card.className = 'new active';
	}
	if(window.pageYOffset > mes1Y - window.innerHeight + ms1.clientHeight){
		ms1.className = 'mes1 active';
	}
	if(window.pageYOffset > mes2Y - window.innerHeight + ms2.clientHeight){
		ms2.className = 'mes2 active';
	}
	if(window.pageYOffset > mes3Y - window.innerHeight + ms3.clientHeight){
		ms3.className = 'mes3 active';
	}
	if(window.pageYOffset > iconY - window.innerHeight + i.clientHeight){
		i.className = 'icon active';
	}
	if(window.pageYOffset > lastY - window.innerHeight + l.clientHeight){
		l.className = 'last active';	
	}
}
