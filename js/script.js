var arrSec = document.getElementById('sec');
var arrMin = document.getElementById('min');
var arrHour = document.getElementById('hour');


a = setInterval(function () {
  var time = new Date();
  var sec = time.getSeconds();
  console.log('sec'+sec);
  if (sec < 60 && sec > 0) {
  arrSec.style.transform = 'rotate('+sec*6+'deg)';
  arrSec.style.transformOrigin = 'bottom center';
  arrSec.style.transition = 'transform 1s';
} else {
  arrSec.style.transform = 'rotate('+sec*6+'deg)';
  arrSec.style.transformOrigin = 'bottom center';
  arrSec.style.transition = 'initial';
}
},1000);

b = setInterval(function () {
  var time = new Date();
  var min = time.getMinutes();
  console.log('min'+min);
  if (sec < 60 && sec > 0) {
  arrMin.style.transform = 'rotate('+min*6+'deg)';
  arrMin.style.transformOrigin = 'bottom center';
  arrMin.style.transition = 'transform 1s';
} else {
  arrMin.style.transform = 'rotate('+min*6+'deg)';
  arrMin.style.transformOrigin = 'bottom center';
  arrMin.style.transition = 'initial';
}
},1000);

c = setInterval(function () {
  var time = new Date();
  var min = time.getMinutes();
  var hour = time.getHours();
  if (sec < 60 && sec > 0) {
  arrHour.style.transform = 'rotate('+(hour*30+min*30/360)+'deg)';
  arrHour.style.transformOrigin = 'bottom center';
  arrHour.style.transition = 'transform 1s';
  } else {
  arrHour.style.transform = 'rotate('+(hour*30+min*30/180)+'deg)';
  arrHour.style.transformOrigin = 'bottom center';
  arrHour.style.transition = 'initial';
  }
  },1000);
