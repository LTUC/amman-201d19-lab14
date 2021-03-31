/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

let counter=0;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const itemOp = document.createElement('option');
    selectElement.appendChild(itemOp);
    itemOp.textContent = (Product.allProducts[i].name);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  counter++
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  let selectElement = document.getElementById('items').value;
  let selectQuantity = document.getElementById('quantity').value;
  // cart.items.push(selectElement);
  // cart.items.push(selectQuantity); // هذا ما بنفع
  let item = {
    product: selectElement,
    quantity: selectQuantity,
  }
  cart.items.push(item);
  console.log(cart)

}



// TODO: Update the cart count in the header nav with the number of items in the Cart

function updateCounter() {
  let itemCount = document.getElementById('itemCount');
  itemCount.textContent = ` (${counter}) `;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  
  let cartContents= document.getElementById('cartContents');
  let liEl=cartContents.appendChild(document.createElement('li'));
  liEl.textContent=`Product: ${cart.items[counter-1].product} Quantity: ${cart.items[counter-1].quantity}`;

// `${cart.items.quantity} ${cart.items.product} ` مش صح
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
