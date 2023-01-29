const clsBtn = document.querySelector(".clsBtn");
const cartBtn = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart-menu");

clsBtn.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

cartBtn.addEventListener("click", () => {
  cart.classList.add("cart-active");
});

document.addEventListener("DOMContentLoaded", loadingContent);

function loadingContent() {
  loadAll();
}

function loadAll() {
  // Cart Remove
  let removeBtn = document.querySelectorAll(".removeCart");

  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeCart);
  });

  // Qty change
  let qty = document.querySelectorAll(".qty");

  qty.forEach((qtyCh) => {
    qtyCh.addEventListener("change", qtyChange);
  });

  // cart add 
  let addCartBtn = document.querySelectorAll('#addCart');
  addCartBtn.forEach((addBtn)=>{
    addBtn.addEventListener('click',addCart)
  });

  popupCart();
  updateTotal();
  
}

function removeCart() {
  let cartTitle = this.parentElement.querySelector('.cart-title').innerHTML;
  if (confirm("Do you sure to remove?")) {
    itemList=itemList.filter(el=>el.title != cartTitle);
    this.parentElement.parentElement.remove();
    loadAll();
  }
}

function qtyChange() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadAll();
}

// cart array
let itemList=[];

function popupCart(){
  let count = itemList.length;
  let order = document.querySelector('.order');
  let cartCount = document.querySelector('.cart-count');
  cartCount.innerText=count;

  if(count == 0)
  {cartCount.style.display="none";order.style.display="none";}
  else
  {cartCount.style.display="block";order.style.display="flex";}

}

function addCart(){
  // cart content body
  let cartContent = document.querySelector('.content');

  // food details
  let food = this.parentElement.parentElement;
  let title = food.querySelector('.food-title').innerHTML;
  let imgSrc = food.querySelector('.img img').src;
  let price =food.querySelector('.details p span').innerHTML;

  // new array list
  let newList={title,price,imgSrc}

  // product exist checking
  if(itemList.find((el)=>el.title == newList.title)){
    alert("Product already in cart");
    return;
  }else{
    itemList.push(newList);
  }

  // new element for cart
  let cartItem = createCartElement(title,price,imgSrc);

  let newEl = document.createElement('div');
  newEl.innerHTML=cartItem;

  cartContent.append(newEl);

  loadAll();

}

function createCartElement(title,price,imgSrc){
  return `
  <div class="cart-item">
  <div class="item-img">
    <img src="${imgSrc}" alt="cart-img">
  </div>
  <div class="item-details">
    <div class="sub1">
      <p class="cart-title">${title}</p>
    <input type="number" class="qty" value="1" min="1" max="10">
    </div>
    <div class="sub2">
      <p class="unit-price">Rs :${price}</p>
      <p class="cost">Rs :${price}</p>
    </div>
    <i title="delete" class="fa-regular removeCart fa-trash"></i>
  </div>
</div>
  `
}

function updateTotal(){
  let cartItem = document.querySelectorAll('.cart-item');
  let totalVal = document.querySelector('.total');
  let total=00;

  cartItem.forEach(pdt=>{
    let pdtQty = pdt.querySelector('.qty').value;
    let unitPrice = pdt.querySelector('.unit-price').innerHTML;
    let priceVal = parseFloat(unitPrice.replace("Rs :",""));

    total += (priceVal*pdtQty);

    pdt.querySelector('.cost').innerText="Rs :"+(priceVal*pdtQty);
  });

  totalVal.innerText="Rs :"+total;



}