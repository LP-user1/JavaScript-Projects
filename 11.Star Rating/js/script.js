const stars = document.querySelectorAll('.star');
const ratVal = document.querySelector('.ratVal');
stars.forEach((star,index)=>{
  star.addEventListener('click',()=>{
    let indexVal = index+1;
    ratVal.innerText=`${indexVal} out of 5`
    console.log(indexVal>=index+1);
    stars.forEach((star,i)=>{
      
      if(indexVal>=i+1){
        star.innerHTML="&#9733;"
      }
      else{
        star.innerHTML="&#9734;"
      }
    })

  })
})