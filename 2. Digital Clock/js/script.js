const h = document.querySelectorAll('.h');
const m = document.querySelectorAll('.m');
const s = document.querySelectorAll('.s');
const tx = document.querySelectorAll('.txt');

const btnTwelve = document.getElementById('btnTw');
const btnTwentyF = document.getElementById('btnTf');
const twFor = document.getElementById('h0');
const twFor1 = document.getElementById('h1');
const tfFor = document.getElementById('h2');
const tfFor1 = document.getElementById('h3');

twFor.classList.add("none")
twFor1.classList.add("none")
btnTwentyF.classList.add('active')

if(btnTwelve){
  btnTwelve.addEventListener('click',()=>{
    twFor.classList.remove('none')
    twFor1.classList.remove('none')
    tfFor.classList.add('none')
    tfFor1.classList.add('none')
    btnTwentyF.classList.remove('active')
    btnTwelve.classList.add('active')
  })
}

if(btnTwentyF){
  btnTwentyF.addEventListener('click',()=>{
    tfFor.classList.remove('none')
    tfFor1.classList.remove('none')
    twFor.classList.add('none')
    twFor1.classList.add('none')
    btnTwentyF.classList.add('active')
    btnTwelve.classList.remove('active')
  })
}

function currentTime() {
  const timeNow = new Date();

  let hr = timeNow.getHours();
  let hr1 = timeNow.getHours();
  let mins = timeNow.getMinutes();
  let sec = timeNow.getSeconds();
  let mer = "AM";
  if (hr >= 12 && mins >=1) {
    hr = hr-12;
    mer = "PM";
  }else if(hr == 0){
    hr = 12;
    mer = "AM";
  }
  hr=hr<10?"0"+hr:hr;
  mins=mins<10?"0"+mins:mins;
  sec=sec<10?"0"+sec:sec;
  
  hr=hr.toString();
  mins=mins.toString();
  sec=sec.toString();

  if(( hr1>=12 && mins >=1 ) && hr1<=23){
    mer = "PM"
  }

  hr1=hr1<10?"0"+hr1:hr1;
  hr1=hr1.toString();

  //------ !2 Hrs --------//
  h[0].innerHTML=hr[0];
  h[1].innerHTML=hr[1];
  m[0].innerHTML=mins[0];
  m[1].innerHTML=mins[1];
  s[0].innerHTML=sec[0];
  s[1].innerHTML=sec[1];
  tx[0].innerHTML=mer[0];
  tx[1].innerHTML=mer[1];

  //------ 24 Hrs ---------//
  h[2].innerHTML=hr1[0];
  h[3].innerHTML=hr1[1];
}
currentTime();
setInterval(currentTime,1000);
