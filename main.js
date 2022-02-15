// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = [...document.getElementsByClassName("like-glyph")];
let modal = document.getElementById('modal');
let modalParagraph = document.getElementById("modal-message");


let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch((error) => handleError(error))
}

function handleResponse(event) {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.classList.add('activated-heart')
    event.target.textContent === FULL_HEART
  } else {
    event.target.classList.remove('activated-heart')
    event.target.textContent === EMPTY_HEART
  }
}

function handleError(error) {
  modal.classList.remove("hidden")
  modalParagraph.innerText = errorMessage
  setTimeout(() => {
    modal.classList.add("hidden")
    modalParagraph.innerText = ""
  }, 3000)
}

hearts.map(heartNode => {
  heartNode.addEventListener('click', callServerAndCatch)
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
