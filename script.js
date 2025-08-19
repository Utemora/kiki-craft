// Кнопка-бургер
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  alert("Открыть боковое меню (позже сделаем анимацию)");
});

// Кнопка корзины
const cart = document.querySelector(".cart");
cart.addEventListener("click", () => {
  alert("Открыть корзину");
});

// Поиск
const search = document.querySelector(".nav-right button:first-child");
search.addEventListener("click", () => {
  alert("Открыть поиск");
});

