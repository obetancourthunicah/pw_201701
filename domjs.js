// var itemsList = document.getElementById('items');
//
// console.log(itemsList);
//
// // itemsList.innerHTML += '<li>Hola Mundo</li>';
//
// itemsList.addEventListener('click',function(e){
//   console.log(e.target.id);
//   e.preventDefault();
//   e.stopPropagation();
// });
//
// document.getElementsByTagName('body')[0].addEventListener('click', function(e){
//   console.log("Click on Body");
// });

var sc = document.getElementById("sliderContainer");
var scul = sc.getElementsByTagName("ul")[0];
var lf = document.getElementById("leftFlip");
var rf = document.getElementById("rightFlip");


sc.addEventListener('click',slideContainer_onClick);
lf.addEventListener('click',lf_onClick);
rf.addEventListener('click',slideContainer_onClick);

var currenPosition = 0; // 0 ,1, 2

function slideContainer_onClick(e){
    e.preventDefault();
    e.stopPropagation();
    if(currenPosition == 2){
      currenPosition = 0;
    }else{
      currenPosition ++;
    }
    timestamp = Date.now();
    scul.style.left = (currenPosition * -960) + "px";
}

function lf_onClick(e){
    e.preventDefault();
    e.stopPropagation();
    if(currenPosition == 0){
      currenPosition = 2;
    }else{
      currenPosition --;
    }
    timestamp = Date.now();
    scul.style.left = (currenPosition * -960) + "px";
}

var timestamp = Date.now();

function timer(){
  if(Date.now() - timestamp > 3000){
    slideContainer_onClick(null);
  }
  setTimeout(timer,3000);
}
timer();
