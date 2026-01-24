import { activateMenus, openModal, closeModal, popUpModal, featuresDropDown, updateStatusText } from "./main.js";
const menus = document.querySelectorAll("#menu li");
const hamburger = document.querySelector("#hamburger");
const sideMenu = document.querySelector("#side-menu");
const closeBtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");
const body = document.body;
const modal = document.querySelector(".modal-box");
const button = document.querySelector("#claim-btn");
const texts = document.querySelector(".modal-box p");
const amount = document.querySelector("#amount");
const featuresBtn = document.querySelector(".game-features");
const features = document.querySelector("#featuresContent");
const display = document.querySelector("#refresh");
// Ensure all critical elements exist
if (!sideMenu)
    throw new Error("#side-menu not found");
if (sideMenu.tagName !== "NAV")
    throw new Error("#side-menu is not a <nav> element");
if (!hamburger)
    throw new Error("#hamburger not found");
if (!closeBtn)
    throw new Error("#close not found");
if (!overlay)
    throw new Error("#overlay not found");
if (!modal)
    throw new Error(".modal-box not found");
if (!texts)
    throw new Error(".modal-box p not found");
if (!button)
    throw new Error("#claim-btn not found");
if (!amount)
    throw new Error("#amount not found");
if (!featuresBtn)
    throw new Error(".game-features not found");
if (!features)
    throw new Error("#featuresContent not found");
if (!display)
    throw new Error("#refresh not found");
// Activate menu highlighting
activateMenus(menus);
// FOR HAMBURGER NAV FOR SMALL SCREEN SIZE
hamburger.addEventListener("click", () => openModal(hamburger, sideMenu, overlay));
closeBtn.addEventListener("click", () => closeModal(hamburger, sideMenu, overlay));
overlay.addEventListener("click", () => closeModal(hamburger, sideMenu, overlay));
menus.forEach((menu) => {
    menu.addEventListener("click", () => closeModal(hamburger, sideMenu, overlay));
});
// FOR THE POP-UP MODAL
button.addEventListener("click", () => popUpModal(amount, texts, modal));
// FEATURES DROP DOWN
featuresBtn.addEventListener("click", () => featuresDropDown(features));
// FOR TIME SINCE PAGE REFRESH
updateStatusText(display);
//# sourceMappingURL=script.js.map