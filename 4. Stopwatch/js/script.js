const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let hrs = (min = sec = ms = 0),
  startTimer;
// --- Default active for pause Btn  --- //
pauseBtn.classList.add('active-btn')
if (startBtn) {
  startBtn.addEventListener("click", () => {
    startBtn.classList.add('active-btn')
    pauseBtn.classList.remove('active-btn')
    document.querySelector(".frame").classList.remove('frameAnimate');
    startTimer = setInterval(() => {
      ms++;
      if (ms == 100) {
        sec++;
        ms = 0;
      }
      if (sec == 60) {
        min++;
        sec = 0;
      }
      if (min == 60) {
        hrs++;
        min = 0;
      }
      updateValue();
    }, 10);
  });
}

if (pauseBtn) {
  pauseBtn.addEventListener("click", () => {
    startBtn.classList.remove('active-btn')
    pauseBtn.classList.add('active-btn')
    document.querySelector(".frame").classList.add('frameAnimate');
    clearInterval(startTimer);
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    startBtn.classList.remove('active-btn')
    pauseBtn.classList.add('active-btn')
    document.querySelector(".frame").classList.remove('frameAnimate');
    hrs = min = sec = ms = 0;
    clearInterval(startTimer);
    updateValue();
  });
}

function updateValue() {
  // ---- Value cheching for non-single-digit ---//
  whrs = hrs < 10 ? "0" + hrs : hrs;
  wmin = min < 10 ? "0" + min : min;
  wsec = sec < 10 ? "0" + sec : sec;
  wms = ms < 10 ? "0" + ms : ms;

  //----- Set value to html page ------ //
  document.querySelector(".hrs").innerText = whrs;
  document.querySelector(".min").innerText = wmin;
  document.querySelector(".sec").innerText = wsec;
  document.querySelector(".ms").innerText = wms;
}
updateValue();
