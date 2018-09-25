
var addclass = function(element, className){
    var oldclass = element.className;
    var classArray = oldclass.split(' ');
    classArray.push(className);
    element.className = classArray.join(' ').trim();
};

var Cultivation =document.querySelector('div#z');
var one = document.querySelector('div#one');
var bwz = document.querySelector('#bwz');
var yidong = document.querySelector('.yidong');
var hxba = document.querySelector('#hxba');
var hzxbl = document.querySelector('#hzxbl');
var hzxbz = document.querySelector('#hzxbz');
var hzxbr = document.querySelector('#hzxbr');

var hl = document.querySelector('#hl');
var hz = document.querySelector('#hz');
var hr = document.querySelector('#hr');

var two = document.querySelector('#two');

var zz = document.querySelector('#zz');
var wz = document.querySelector('#wz');
var hzk = document.querySelector('#hzk');

var bl = document.querySelector('#bl');
var bz = document.querySelector('#bz');
var br = document.querySelector('#br');

var oneY = one.offsetTop;
var bwzY = bwz.offsetTop;
var yidongY = yidong.offsetTop;
var hxbaY = hxba.offsetTop;
var hzxblY = hzxbl.offsetTop;
var hzxbzY = hzxbz.offsetTop;
var hzxbrY = hzxbr.offsetTop;
var twoY = two.offsetTop;

var hlY = hl.offsetTop;
var hzY = hz.offsetTop;
var hrY = hr.offsetTop;

var blY = bl.offsetTop;
var bzY = bz.offsetTop;
var brY = br.offsetTop;

var hzkY = hzk.offsetTop;
var zzY = zz.offsetTop;
var wzY = wz.offsetTop;

var CultivationY = Cultivation.offsetTop;

if (window.pageYOffset > CultivationY - window.innerHeight + Cultivation.clientHeight) {
        addclass(Cultivation,'active');
    }

document.body.onscroll = function(){
if (window.pageYOffset > oneY - window.innerHeight + one.clientHeight) {
        one.className='active';
   }
   if (window.pageYOffset > twoY - window.innerHeight + two.clientHeight) {
        two.className='active';
   }
if (window.pageYOffset > bwzY - window.innerHeight + bwz.clientHeight) {
        bwz.className='active';
   }
if (window.pageYOffset > yidongY - window.innerHeight + yidong.clientHeight) {
        addclass(yidong,'active');
   }
if (window.pageYOffset > hxbaY - window.innerHeight + hxba.clientHeight) {
        hxba.className='active';
   }

   if (window.pageYOffset > hlY - window.innerHeight + hl.clientHeight) {
        hl.className='active';
   }
   if (window.pageYOffset > hzY - window.innerHeight + hz.clientHeight) {
        hz.className='active';
   }
   if (window.pageYOffset > hrY - window.innerHeight + hr.clientHeight) {
        hr.className='active';
   }

if (window.pageYOffset > hzxblY - window.innerHeight + hzxbl.clientHeight) {
        hzxbl.className='active';
   }
if (window.pageYOffset > hzxbzY - window.innerHeight + hzxbz.clientHeight) {
        hzxbz.className='active';
   }
if (window.pageYOffset > hzxbrY - window.innerHeight + hzxbr.clientHeight) {
        hzxbr.className='active';
   }


if (window.pageYOffset > zzY - window.innerHeight + zz.clientHeight) {
        zz.className='active';
   }
if (window.pageYOffset > wzY - window.innerHeight + wz.clientHeight) {
        wz.className='active';
   }
if (window.pageYOffset > hzkY - window.innerHeight + hzk.clientHeight) {
        hzk.className='active';
   }

if (window.pageYOffset > blY - window.innerHeight + bl.clientHeight) {
        bl.className='active';
   }
if (window.pageYOffset > bzY - window.innerHeight + bz.clientHeight) {
        bz.className='active';
   }
if (window.pageYOffset > brY - window.innerHeight + br.clientHeight) {
        // addclass(br,'active');
        br.className='active';
   }
}