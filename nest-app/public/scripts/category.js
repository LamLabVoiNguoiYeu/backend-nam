const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.category-item');

tabs.forEach((tab) => {
  tab.onclick = function () {
    $('.category-item--active').classList.remove('category-item--active');
    this.classList.add('category-item--active');
  };
});
