/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart(){
  let unwantedTr = document.getElementsByTagName('tbody');
  // console.log(unwantedTr);
  unwantedTr[0].textContent= '';
  // let  cartTBodyEls = document.getElementById('cart').getElementsByTagName('tbody');
  // for (let tBodyEl of cartTBodyEls) {
  //   while (tBodyEl.firstChild) {
  //     tBodyEl.removeChild(tBodyEl.firstChild);
  //   }
  // }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbodyList = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for(let i=0; i<cart.items.items.length; i++){
    let elRow = document.createElement('tr');
    tbodyList.appendChild(elRow);
    let eldelete = document.createElement('td');
    eldelete.setAttribute('id','delete');
    elRow.appendChild(eldelete);
    eldelete.textContent = 'X';
    let elQuantity = document.createElement('td');
    elRow.appendChild(elQuantity);
    elQuantity.textContent = `${cart.items.items[i].quantity}`;
    let elProduct = document.createElement('td');
    elRow.appendChild(elProduct);
    elProduct.textContent = `${cart.items.items[i].product}`;
    let elPic = document.createElement('img');
    elRow.appendChild(elPic);
    elPic.src = `../assets/${cart.items.items[i].product.toLowerCase()}.jpg`
    // console.log(cart.items.items[i]);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  if(event.target.id === 'delete'){
    console.log(event);
    document.getElementsByTagName('tbody')[0].removeChild(event.path[1])

  }
}

// This will initialize the page and draw the cart on screen
renderCart();
