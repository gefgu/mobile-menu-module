(() => {
  const mobileMenuClassName = "mobile-menu";
  const menuItemClassName = "menu-item";
  const activeClassName = "active";

  const mobileMenus = document.querySelectorAll(`.${mobileMenuClassName}`);

  mobileMenus.forEach((mobileMenu) => {
    const menuItems = mobileMenu.querySelectorAll(`.${menuItemClassName}`);
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        const activeItem = mobileMenu.querySelector(
          `.${menuItemClassName}.${activeClassName}`
        );
        if (activeItem) {
          activeItem.classList.remove(activeClassName);
        }
        menuItem.classList.add(activeClassName);
      });
    });
  });
})();
