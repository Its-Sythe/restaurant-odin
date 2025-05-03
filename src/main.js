import "./style.css"
import { home } from "./home"
import "./menu"


document.getElementById("menu").addEventListener("click", () => {
    home.homeContainer.style.display = "none";
})