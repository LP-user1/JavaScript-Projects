const numBtns = document.querySelectorAll('.btn-num');
const inpVal = document.getElementById('inputCal');
const funKeys = document.querySelectorAll('.btn-fun');
const equal = document.getElementById('eql');
const acBtn = document.querySelector('.btn-ac');
const delBtn = document.querySelector('.btn-del');

let num = 0,fun;

numBtns.forEach(btn=>{
  btn.addEventListener('click',(e)=>{
    num = e.target.innerHTML;
    inpVal.value += num;
  })
});

funKeys.forEach(funKey=>{
  funKey.addEventListener('click',(e)=>{
    fun = e.target.innerHTML;
    inpVal.value +=fun;
  })
})

equal.addEventListener('click',calc);
acBtn.addEventListener("click",()=>{
  inpVal.value = "";
  num = 0
  fun =""
})
delBtn.addEventListener("click",()=>{
  inpVal.value = inpVal.value.slice(0,-1);
})
function calc(){

  if(inpVal.value == ""){
    return
  }
  else{
    try{
      inpVal.value = eval(inpVal.value)
    }
    catch(err){
      alert("Invalid Inputs");
    }}
}