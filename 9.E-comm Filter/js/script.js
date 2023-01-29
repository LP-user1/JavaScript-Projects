const boxes = document.querySelectorAll('.box');
const btns = document.querySelectorAll('.btn');
const search = document.getElementById('search');

search.addEventListener('keyup',(e)=>{
  btns.forEach((btn)=>{
    btn.classList.remove('btn-clicked');
  })
  btns[0].classList.add('btn-clicked');
  let searchTxt = e.target.value.toLowerCase().trim();
  boxes.forEach((box)=>{
    if(box.dataset.item.includes(searchTxt)){
      box.style.display="block"
    }else{
      box.style.display="none"
    }
  })
})
btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    e.preventDefault();
    setActiveBtn(e);
    let filter = e.target.dataset.filter;
  
    boxes.forEach((box)=>{
      let boxFilter = box.dataset.item;
      if(filter == "all"){
        box.style.display="block";
      }
      else{
        if(filter == boxFilter){
          box.style.display="block";
        }
        else{
          box.style.display="none";
        }
      }
    })
  })
})


function setActiveBtn(e){
  btns.forEach((btn)=>{
    btn.classList.remove('btn-clicked');
  })
  e.target.classList.add('btn-clicked');
}