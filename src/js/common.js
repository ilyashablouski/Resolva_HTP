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
  document.querySelector('.modal-container').
      classList.toggle('modal-container_close');

  document.querySelector('.modal-container')
      .classList.add('zoomIn');
}

function closeModal() {
  modalNode.classList.add('modal-container_close');

  document.querySelector('.modal-container')
      .classList.remove('zoomIn');
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
