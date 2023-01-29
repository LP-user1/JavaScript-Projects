const images = document.querySelectorAll('.img a');
const imgDiv = document.querySelectorAll('.img');
let imgId=1;
images.forEach((img)=>{
  img.addEventListener('click',(e)=>{
    e.preventDefault();
    imgDiv.forEach((img)=>{
      img.classList.remove('active');
    })
    img.parentElement.classList.add('active');
    imgId=img.dataset.imgId;
    imgMove();
  })
});

function imgMove(){
  const imgWidth = document.querySelector('.img-show img:first-child').clientWidth;
  
  let width = (imgId-1)*imgWidth;
  document.querySelector('.img-show').style.transform=`translateX(${-width}px)`;
}