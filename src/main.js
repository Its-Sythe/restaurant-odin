import "./style.css"
import { home } from "./home"
import { menu } from "./menu";
import { more } from "./contact";

const contentContainer = document.getElementById("content");
const homeTab = home.homeContainer;
const menuTab = menu.menuItems();


contentContainer.append(homeTab);

document.getElementById("home").addEventListener("click", () => {
    contentContainer.removeChild(contentContainer.childNodes[1]);
    contentContainer.append(homeTab)
})

document.getElementById("menu").addEventListener("click", () => {
    contentContainer.removeChild(contentContainer.childNodes[1]);
    contentContainer.append(menuTab)
})

document.getElementById("contact").addEventListener("click", () => {
    contentContainer.removeChild(contentContainer.childNodes[1]);
    contentContainer.append(more);
})