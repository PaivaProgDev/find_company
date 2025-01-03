export const saveLocal = () => {
  localStorage.setItem(
    "tableElement",
    document.querySelector(".company-data").innerHTML
  );
  localStorage.setItem("initial-modal", "true");
};
