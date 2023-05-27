const btnLeft = document.querySelector('.carousels__btn--left'),
  btnRight = document.querySelector('.carousels__btn--right'),
  carousels = document.querySelector('.carousels'),
  carouselsSection = document.querySelectorAll('.carousels__section');
let operation = 0;
let cont = 0;
let widthImg = 100 / carouselsSection.length;
setInterval(() => {
  moveToRight();
}, 3000);
btnLeft.addEventListener('click', moveToLeft);
btnRight.addEventListener('click', moveToRight);
function moveToLeft() {
  if (cont === 0) {
    cont = carouselsSection.length - 1;
    operation = widthImg * (carouselsSection.length - 1) * -1;
    carousels.style.transform = `translateX(${operation}%)`;
    carousels.style.transition = `none`;
    return;
  }
  cont -= 1;
  operation = operation + widthImg;
  carousels.style.transform = `translateX(${operation}%)`;
  carousels.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`;
}
function moveToRight() {
  if (cont >= carouselsSection.length - 1) {
    operation = 0;
    cont = 0;
    carousels.style.transform = `translateX(${operation}%)`;
    carousels.style.transition = `none`;
    return;
  }
  cont += 1;
  operation = operation - widthImg;
  carousels.style.transform = `translateX(${operation}%)`;
  carousels.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`;
}
