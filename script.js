let buttonState = true

const button = document.querySelector('.brands__expand-button')
const icon = document.querySelector('.brands__expand-button-icon')
const buttonText = document.querySelector('.brands__expand-button-text')
const brandsWrapper = document.querySelector('.brands__list-wrapper')

button.addEventListener('click', function () {
  if (buttonState) {
    icon.style.transform = 'rotate(180deg)'
    buttonText.textContent = 'Скрыть'
    brandsWrapper.style.height = 'fit-content'
  } else {
    icon.style.transform = 'rotate(0deg)'
    buttonText.textContent = 'Показать все'
    brandsWrapper.style.height = '160px'
  }

  buttonState = !buttonState
})


if (window.innerWidth < 768) {
  let swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

