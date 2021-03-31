/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // localStorage.clear();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tableBody=document.getElementsByTagName('tbody')[0];
  console.log(tableBody);
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // const element = cart.items[i];
    let trElement=document.createElement('tr');
    tableBody.appendChild(trElement);

      let tdElement1=document.createElement('td');
      trElement.appendChild(tdElement1);
      tdElement1.textContent='X';
      let tdElement2=document.createElement('td');
      trElement.appendChild(tdElement2);
      tdElement2.textContent=JSON.stringify(cart.items[i]).split('"')[3];
      let tdElement3=document.createElement('td');
      trElement.appendChild(tdElement3);
      tdElement3.textContent=cart.items[i].slice(0,-1);
    
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  localStorage.removeItem('cart');
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
