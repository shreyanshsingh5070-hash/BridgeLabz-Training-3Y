const themeButtons = document.querySelectorAll("[data-theme-choice]");

function applyTheme(themeName) {
  document.body.setAttribute("class", `${themeName}-theme`);
  document.body.setAttribute("data-theme", themeName);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

applyTheme(document.body.getAttribute("data-theme") || "light");