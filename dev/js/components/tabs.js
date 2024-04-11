const tabButtons = document.querySelectorAll(".tabButton");
const allTabs = document.querySelectorAll(".banner__searchbox-form");

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    allTabs.forEach((tab) => (tab.style.display = "none"));
    tabButtons.forEach((tabButton) =>
      tabButton.classList.remove("banner__searchbox-tabs-option--active")
    );
    const newTab = document.querySelector(
      `[data-tab="${tabButton.dataset.tabNumber}"]`
    );
    newTab.style.display = "flex";
    tabButton.classList.add("banner__searchbox-tabs-option--active");
  });
});
