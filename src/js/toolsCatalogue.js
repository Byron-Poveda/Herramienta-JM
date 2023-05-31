import * as basicLightbox from '../basiclihtbox/basicLightbox.min.js';
import '../basiclihtbox/basicLightbox.min.css';
const basicLightbox = require('../basiclihtbox/basicLightbox.min.js');
const toolContainers = document.querySelectorAll('.tool-container');
let arrayTools = [],
  arrayCard = [];
toolContainers.forEach(element => {
  //   console.log(element.querySelector('.tool-container__img').src);
  const objectToolsCharacteristics = {
    name: element.querySelector('.tool-container__title').textContent,
    img: element.querySelector('.tool-container__img').src,
    description: element.querySelector('.tool-container__description')
      .textContent,
    price: element.querySelector('.tool-container__price').textContent,
  };
  arrayTools.push(objectToolsCharacteristics);
});

toolContainers.forEach(element => {
  arrayCard.push(element);
  element.addEventListener('click', () => {
    var instance = basicLightbox.create(`
    <div class="card-backdrop">
        <div class="card-container">
          <div class="card-container__first">
      <div class="card-container__wrap-img">
        <img
          class="card-container__img"
          src="${arrayTools[arrayCard.indexOf(element)].img}"
          alt="${arrayTools[arrayCard.indexOf(element)].name}"
        />
        <button class="card-container__btn card-container__btn--left">
          <i class="card-container__i ri-arrow-left-s-line ri-3x"></i>
        </button>
        <button class="card-container__btn card-container__btn--right">
          <i class="card-container__i ri-arrow-right-s-line ri-3x"></i>
        </button>
      </div>
      <button type="submit" class="card-container__button">
        <span>Comprar ahora</span>
      </button>
    </div>
          <div class="card-container__wrap">
          <div class="card-container__medium">
            <h3 class="card-container__title">${
              arrayTools[arrayCard.indexOf(element)].name
            }</h3>
            <p class="card-container__description">
             ${arrayTools[arrayCard.indexOf(element)].description}
            </p>
          </div>
          <div class="card-container__last">
            <p class="card-container__last-title">Medios de pago:</p>
            <div class="card-container__wrap-images">
              <img width="45" height="auto" src="./images/catalogue/metodos-de-pago/bancolombia.png" alt="Bancolombia">
              <img width="30" height="auto" src="./images/catalogue/metodos-de-pago/nequi.png" alt="Nequi">
              <img width="55" height="auto" src="./images/catalogue/metodos-de-pago/efectivo.jfif" alt="Efectivo">
              <img width="40" height="auto" src="./images/catalogue/metodos-de-pago/davivienda.jpg" alt="Davivienda">
            </div>
            <span class="card-container__price">${
              arrayTools[arrayCard.indexOf(element)].price
            }</span>
          </div>
        </div>
      </div>
    `);
    instance.show();
    const card = document.querySelectorAll('.card-container');
    const backgroundLightBox = document.querySelector('.basicLightbox');
    card.forEach(cardItem => {
      cardItem.addEventListener('mouseout', () => {
        backgroundLightBox.style.cursor = `url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Ccircle fill-opacity='.6' fill='%23FFF' cx='16' cy='16' r='16'/%3E%3Cpath fill='%23000' d='M20.385 11l-4.395 4.39-4.375-4.37-.615.615L15.375 16 11 20.37l.615.61 4.375-4.365L20.385 21l.615-.61L16.604 16 21 11.615z'/%3E%3C/g%3E%3C/svg%3E") 16 16,pointer`;
      });
      cardItem.addEventListener('mouseover', () => {
        backgroundLightBox.style.cursor = 'default';
      });
    });
    const buttonCard = document.querySelector('.card-container__button');
    buttonCard.addEventListener('submit', e => {
      e.preventDefault;
    });
  });
});
