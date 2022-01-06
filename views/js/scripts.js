/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// variables to store the user input
const item = document.getElementById('item')
const price = document.getElementById('price')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

// checking if there is any input on submit and then display some message
form.addEventListener('submit', (e) => {
  let messages = []
      if (item.value === '' || item.value == null) {
        messages.push('Item is required')
      }

  // checking the price if there are less then 20 char and then will display some message 
  if (price.value.length >= 20) {
    messages.push('Price must be less than 20 characters')
  }

  // this is used for preventing the form from submmiting 
  // sends the error to the variable created and join all by a coma, so we have it organized 
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

// deletion function
function deleting() {

  alert("Deleting succeed!");

}

// submition function
function submited() {

  alert("Submiting succeed!");

}

function total() {

  alert("Total");

}