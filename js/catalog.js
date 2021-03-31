/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
let selectElement;
let option
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  selectElement = document.getElementById('items');
  
  for (let i in Product.allProducts) {
    option = document.createElement('option');
    selectElement.appendChild(option);
    let product = Product.allProducts[i].name;
    option.textContent=product;
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();

  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  let selected = selectElement.value;
  let quantity = document.getElementById('quantity').value;
  new Cart(cart.addItem(selected, quantity));
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let count = 0;
function updateCounter() {
let itemCount = document.getElementById('itemCount');
count++;
itemCount.textContent=count;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let itemSelected = selectElement.value;
  let itemQuantity = document.getElementById('quantity').value;
  let cartContents = document.getElementById('cartContents');
  let ulEl = document.createElement('ul');
  cartContents.appendChild(ulEl);
  let liEl = document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent=`${itemSelected} ${itemQuantity}`;
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
