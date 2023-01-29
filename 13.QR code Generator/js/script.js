const frm = document.querySelector('#frm');
const loading = document.querySelector('.loading');
let savebtn = document.querySelector('.btn');

function generateQr(e){
  e.preventDefault();
  
  const url = document.querySelector('#urlIn').value;
  const size = document.querySelector('#size').value;
  const colorDark = document.querySelector('#dark').value;
  const colorLight = document.querySelector('#light').value;
  let qr=document.querySelector('#qrcode');
  let imgSrc
  
  loading.style.display="flex";

  if(url === '')
  {
    alert("URL Required");
  }
  else
  {
    qr.innerHTML="";
    const qrcode=new QRCode('qrcode',{
      text:url,
      width:size,
      height:size,
      colorDark:colorDark,
      colorLight:colorLight,
      correctLevel: QRCode.CorrectLevel.H
    });
  }
  setTimeout(()=>{
    imgSrc = qr.querySelector('img').src;
    savebtn.href=imgSrc;
    loading.style.display="none";
    savebtn.classList.remove('event-none')
  },1000);
  
  
}

frm.addEventListener('submit',generateQr);
