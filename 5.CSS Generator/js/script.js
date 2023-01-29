document.addEventListener('DOMContentLoaded',()=>{
  const container = document.querySelector('.style_con');
  const radVal = document.getElementById('rad');
  const borVal = document.getElementById('bor');
  const option = document.getElementById('borStyle');
  const colorPicker = document.getElementById('borColor');
  const textarea = document.getElementById('code');
  const btnCpy = document.getElementById('btnCpy');

  var radius=10;
  var border=5;
  var color="#0f0e12d9";
  var style="solid";
  var code = "";

  if(radVal){
    radVal.addEventListener('mousemove',getRadValue);
    radVal.addEventListener('change',getRadValue);
    radVal.addEventListener('touchmove',getRadValue);
  }

  if(borVal){
    borVal.addEventListener('mousemove',getBorVal);
    borVal.addEventListener('change',getBorVal);
    borVal.addEventListener('touchmove',getBorVal);
  }
  if(option){
    option.addEventListener('click',getOptVal);
    option.addEventListener('change',getOptVal);
  }

  if(colorPicker){
    colorPicker.addEventListener('change',getColVal);  
  }

  function getColVal(){
    color = colorPicker.value;
    updateValue();
  }

  function getBorVal(){
    border = borVal.value;
    updateValue();
  }

  function getRadValue(){
    radius = radVal.value;
    updateValue();
  }

  function getOptVal(){
    style = option.value
    if(option.value == 'none'){
      borVal.setAttribute('disabled','true');
      border = "";
      color ="";
    }
    else{
      borVal.removeAttribute('disabled','false');
      border = borVal.value;
      color = colorPicker.value;
    }
    updateValue();
  }

  if(btnCpy){
    btnCpy.addEventListener('click',()=>{
      textarea.select();
      document.execCommand('copy');
      container.innerHTML='<span id="copy_confirm">Copied</span>';
      setTimeout(()=>{
        container.innerHTML="";
      },3000)
    })
  }

  function updateValue(){
    let bor = border==""?border:border+"px";
    radVal.value = radius;
    borVal.value = border;
    code = `
    border-radius: ${radius}px;
    border: ${bor} ${style} ${color};`

    container.style.cssText = code;
    document.getElementById('rad_val').innerText=radius+"px";
    document.getElementById('bor_val').innerText=bor;
    colorPicker.value=color;
    textarea.value=code;

  }

  updateValue();
});

//how to add html element attribute using javascript