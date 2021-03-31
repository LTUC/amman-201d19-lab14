/* global Cart */
'use strict';
let td1El = document.createElement('td');
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
console.log(table);
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
 let tbodyEl = document.getElementById('tbody');
 tbodyEl.textContent = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  // TODO: Find the table body
  let tbodyEl = document.getElementById('tbody');
  table.appendChild(tbodyEl);

  for (let i = 0; i < cart.items.length; i++) {
    let trEl = document.createElement('tr');
    tbodyEl.appendChild(trEl);

    td1El = document.createElement('td');
    let td2El = document.createElement('td');
    let td3El = document.createElement('td');

    trEl.appendChild(td1El);
    trEl.appendChild(td2El);
    trEl.appendChild(td3El);


    td1El.textContent = 'X';
    td1El.id = i;
    td2El.textContent = cart.items[i].quantity;
    td3El.textContent = cart.items[i].product;

  }

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if(event.target.id !== 'cart'){
  cart.removeItem(cart.items[td1El.id]);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
