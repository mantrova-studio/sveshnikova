document.querySelectorAll(".tile").forEach((el) => {
  el.addEventListener("pointerdown", () => el.style.filter = "brightness(.98)");
  el.addEventListener("pointerup", () => el.style.filter = "");
  el.addEventListener("pointerleave", () => el.style.filter = "");
});
