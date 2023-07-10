const navItems = document.querySelectorAll('.nav__item');
const contentDynamic = document.querySelectorAll('.dynamic');

const handleNavItemClick = ((e) => {
  navItems.forEach((link) => link.classList.remove('blue'));
  contentDynamic.forEach((el) => {
    el.classList.remove('active');
    if (el.classList.contains(e.currentTarget.dataset.id)) {
      el.classList.add('active');
      e.currentTarget.classList.add('blue');
    }
  });
});

export { navItems, handleNavItemClick as default };