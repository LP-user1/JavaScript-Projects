const links = document.querySelectorAll('.link');
const tabs = document.querySelectorAll('.tab-item');

tabs.forEach(tab=>{
  tab.addEventListener('click',tabClick);
})

function tabClick(e) {
  links.forEach(link=>{
    link.classList.remove('active');
  });
  e.target.classList.add('active');
  const id = e.target.href.split("#")[1];
  document.querySelectorAll('.page').forEach(page=>{
    page.classList.remove('page-active');
  })
  document.getElementById(id).classList.add('page-active');


}
  
