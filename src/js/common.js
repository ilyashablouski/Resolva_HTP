/* eslint-disable require-jsdoc */
// Выбираем DOM - узлы
const toogleElements = document.querySelectorAll('.addit-services-text');
const mainToogleNode = document.querySelector('.addit-services-block');
const mainModalNode = document.body;
const modalNode = document.querySelector('.modal-container');
const closeModalButton = document.querySelector('.close-button');

// Объявление обработчиков событий
function toogleTextNodes(clickNode) {
  clickNode.closest('.addit-services-header').nextElementSibling
      .classList.toggle('addit-services-text_close');
}

function showModal() {
  document.querySelector('.modal-container').
      classList.toggle('modal-container_close');
}

function closeModal() {
  modalNode.classList.add('modal-container_close');
}

// Скрытие и появление DOM - узлов при изменении размера окна просмотра
// браузера <= 992px и > 992px
window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 1100px)').matches) {
    for (const toogleElement of toogleElements) {
      toogleElement.classList.add('addit-services-text_close');
    }
  } else {
    for (const toogleElement of toogleElements) {
      toogleElement.classList.remove('addit-services-text_close');
    }
  }
});

// Применение событий после загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(max-width: 1100px)').matches) {
    for (const toogleElement of toogleElements) {
      toogleElement.classList.add('addit-services-text_close');
    }

    // Диллегирование и вызов события кликов мышью на переключатели
    mainToogleNode.addEventListener('click', (event) => {
      const target = event.target;
      if ((target.parentElement.className == 'addit-services-main') ||
        (target.parentElement.className == 'addit-services-header') ||
        (target.parentElement.className == 'addit-services-header__inner')) {
        toogleTextNodes(target);
      } else {
        return;
      }
    });
  }

  // Диллегирование и вызов события кликов мышью для показа модального окна
  mainModalNode.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('button-modal')) {
      showModal();
    } else {
      return;
    }
  });

  // Закрытие модального окна
  closeModalButton.addEventListener('click', closeModal);
});
