import "./src/scss/main.scss";
import { createHtml } from "./src/ts/createHtml";
import toggleLightMode from "./src/ts/toggleDarkmode";

function init() {
  toggleLightMode();
  createHtml();
}

init();

document.addEventListener('DOMContentLoaded', () => {
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = `© ${new Date().getFullYear()}`;
  }
});