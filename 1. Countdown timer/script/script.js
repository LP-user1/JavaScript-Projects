function reloadTime(){
  const todayDate = new Date();
  const newDate = new Date('January 2 2024 00:00:00');

  const diff = newDate - todayDate ;

  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor((diff/1000/60/60)%24);
  const m = Math.floor((diff/1000/60)%60);
  const s = Math.floor((diff/1000)%60);

  document.getElementById('days').innerHTML=d<10?"0"+d:d;
  document.getElementById('hours').innerHTML=h<10?"0"+h:h;
  document.getElementById('minutes').innerHTML=m<10?"0"+m:m;
  document.getElementById('seconds').innerHTML=s<10?"0"+s:s;
}

setInterval(reloadTime,1000);