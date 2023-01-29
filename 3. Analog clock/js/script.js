const hour = document.querySelector('.hrs')
const minute = document.querySelector('.min')
const second = document.querySelector('.sec')
setInterval(clock,1000);
function clock(){
  let now = new Date()
  let sec = now.getSeconds()/60
  let min = (sec+now.getMinutes())/60
  let hrs = (min+now.getHours())/12;

  hour.style.setProperty('--rotate',hrs*360);
  minute.style.setProperty('--rotate',min*360);
  second.style.setProperty('--rotate',sec*360);
}
clock();