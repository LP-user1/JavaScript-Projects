const pwdLen = document.getElementById('pwdLength');
const numCheck = document.getElementById('num');
const smCheck = document.getElementById('sm');
const capsCheck = document.getElementById('caps');
const symCheck = document.getElementById('sym');
const cpyBtn = document.getElementById('btnCpy');
const outputVal = document.getElementById('pwdVal');
const frmValidate = document.getElementById('frm')

cpyBtn.addEventListener('click',async()=>{
  const pwd = outputVal.value;
  if(pwd){
    await navigator.clipboard.writeText(pwd)
    alert("Copied");
  }
  else{
    alert("Please generate a password to copy");
  }
})

function generateRandom(min,max){
  const valCheck = max-min+1
  return String.fromCharCode(Math.floor(Math.random()*valCheck)+min)
}

function numChar(){
  return generateRandom(48,57);
}

function lowerChar(){
  return generateRandom(97,122);
}

function upperChar(){
  return generateRandom(65,90);
}

function symChar(){
  const symbols="!@#$%^&*()_-{}[]\<>./~"
  return symbols[Math.floor(Math.random()*symbols.length)];
}

const funArr=[
  {
    element:numCheck,
    funct:numChar
  },
  {
    element:smCheck,
    funct:lowerChar
  },
  {
    element:capsCheck,
    funct:upperChar,
  },
  {
    element:symCheck,
    funct:symChar
  }
]

frmValidate.addEventListener('submit',(e)=>{
  e.preventDefault();

  const limitVal = pwdLen.value;

  let generatedPwd ="";
  if(numCheck.checked || smCheck.checked || capsCheck.checked || symCheck.checked){
    const funArray = funArr.filter(({element})=>element.checked);
    for(i=0;i<limitVal;i++){
      const index = Math.floor(Math.random()*funArray.length)
      const pswd = funArray[index].funct();
      generatedPwd+=pswd;
    }
    outputVal.value = generatedPwd;  
  }
  else{
    alert("Choose atleast one type of password")
  }
})