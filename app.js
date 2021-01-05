const hamburgerContainer = document.querySelector('#header-main-nav');
const hamburger = document.querySelector('.header-main-nav--hamburger');
const links = document.querySelectorAll('.header-main-nav--links li');
const items = document.querySelectorAll('.about-timeline li');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('clicked');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
