const menuLink = document.getElementById("menu-link");
const menuContainer = document.getElementById("menu-container");

const couponsLink = document.getElementById("coupons-link");
const couponsContainer = document.getElementById("coupons-container");

const deliveryLink = document.getElementById("delivery-link");
const deliveryContainer = document.getElementById("delivery-container");

const contactLink = document.getElementById("contact-link");
const contactContainer = document.getElementById("contact-container");

menuLink.addEventListener("click", () => {
  menuContainer.scrollIntoView({ behavior: "smooth" });
});

couponsLink.addEventListener("click", () => {
  couponsContainer.scrollIntoView({ behavior: "smooth" });
});

deliveryLink.addEventListener("click", () => {
  deliveryContainer.scrollIntoView({ behavior: "smooth" });
});

contactLink.addEventListener("click", () => {
  contactContainer.scrollIntoView({ behavior: "smooth" });
});
