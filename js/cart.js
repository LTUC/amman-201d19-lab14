/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) ;
    for(let i=0;i<cartItems.items.length;i++){
    const cart = new Cart(cartItems.items[i]);
    console.log(cart.items);
  }
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tbodyEl=document.getElementById('cartTbody');
  tbodyEl.innerHTML='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
const tbodyEl=document.getElementById('cartTbody');

  // TODO: Iterate over the items in the cart
  debugger;
  for (let i=0;i<cart.items.length;i++){
    const x=document.createElement('tr')
    tbodyEl.appendChild(x);
    for(let i=0;i<cart.items.length;i++){
    const y =document.createElement('td');
    x.appendChild(y);
    y.textContent=cart.items[i];
  }
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
