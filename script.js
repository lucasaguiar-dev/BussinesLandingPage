class Header {
  constructor(header, navBar, mobileMenu) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.header = document.querySelector(header);
    this.navBar = document.querySelector(navBar);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.navBar.classList.toggle(this.activeClass);
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", () => this.handleClick());
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
  headerActive() {
    this.header.classList.toggle(this.activeClass);
  }
  sticky() {
    window.addEventListener("scroll", () => {
      this.header.classList.toggle("sticky", window.scrollY > 100);
    });
  }
}
const header = new Header("header", ".navBar-list", ".mobile-icon");
header.init();
header.sticky();
