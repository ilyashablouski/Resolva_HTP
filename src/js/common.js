/* eslint-disable require-jsdoc */
// Choose DOM - nodes
const mainModalNode = document.body;
const modalNode = document.querySelector('.modal-container');
const closeModalButton = document.querySelector('.close-button');

function toogleTextNode() {
  if ($(window).width() <= 1100) {
    $(this).next().slideToggle(300);
  }
}

function showModal() {
  modalNode.classList.toggle('modal-container_close');
  animateCSS('.modal-container', 'zoomIn');
}

function closeModal() {
  animateCSS('.modal-container', 'zoomOut', () => {
    modalNode.classList.toggle('modal-container_close');
  });
}

// Animations from animate.css
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add('animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}

// Applying events after loading the DOM
window.addEventListener('DOMContentLoaded', () => {
  // Dilocation and call events
  mainModalNode.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('button-modal')) {
      showModal();
    } else {
      return;
    }
  });


  // Close modal window
  closeModalButton.addEventListener('click', closeModal);
});

// Call toogle event
$(document).ready(function() {
  $('.addit-services-header').on('click', toogleTextNode);
});
