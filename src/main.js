import "./style.css"
import { home } from "./home"
import { menu } from "./menu";
import { more } from "./more";

const contentContainer = document.getElementById("content");
const homeTab = home.homeContainer;
const menuTab = menu.menuItems()
const moreTab = more;

contentContainer.append(homeTab);

document.getElementById("home").addEventListener("click", () => {
    contentContainer.removeChild(contentContainer.childNodes[1]);
    contentContainer.append(homeTab)
})

document.getElementById("menu").addEventListener("click", () => {
    contentContainer.removeChild(contentContainer.childNodes[1]);
    contentContainer.append(menuTab)
})
