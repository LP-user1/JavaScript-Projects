const carouselItem = document.querySelectorAll(".item");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const indicator = document.querySelector('.indicators');

const totalCaro = carouselItem.length;

let caroPosition = 0;
btnPrev.addEventListener("click", () => {
  movePrevious();
});

btnNext.addEventListener("click", () => {
  moveForward();
});

function moveForward() {
  if (caroPosition == totalCaro - 1) {
    caroPosition = 0;
  } else {
    caroPosition++;
  }
  updatePosition();
}

function movePrevious() {
  if (caroPosition == 0) {
    caroPosition = totalCaro - 1;
  } else {
    caroPosition--;
  }
  updatePosition();
}

function updatePosition() {
  carouselItem.forEach((item) => {
    item.classList.remove("active");
    item.classList.add("hide");
  });
  carouselItem[caroPosition].classList.add("active");

  indicators.forEach(ind=>{
    ind.classList.remove("active-indicator");
  })
  indicators[caroPosition].classList.add("active-indicator");
}

carouselItem.forEach((item) => {
  const dash = document.createElement('div');
  dash.classList.add('dash-indicator');
  indicator.appendChild(dash);
});
const indicators = document.querySelectorAll('.dash-indicator');
indicators[caroPosition].classList.add("active-indicator");

indicators.forEach((ind , index)=>{
  ind.addEventListener('click',()=>{
    caroPosition = index;
    updatePosition();
  })
})
let timerInterval = setInterval(() => {
  if (caroPosition == totalCaro - 1) {
    caroPosition = 0;
  } else {
    caroPosition++;
  }
  updatePosition();
}, 5000);

const imgs = document.querySelectorAll('img');

imgs.forEach(img=>{
  img.addEventListener('mouseover',()=>{
    clearInterval(timerInterval);
  });
})