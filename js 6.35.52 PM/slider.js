document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      console.log("Button clicked:", this); // Debugging
      let slider = this.nextElementSibling;
      if (slider.style.height) {
        slider.style.height = null;
        toggle.classList.remove("highlight");
      } else {
        document.querySelectorAll(".toggle.highlight").forEach((activeToggle) => {
          activeToggle.classList.remove("highlight");
          activeToggle.nextElementSibling.style.height = null;
        });
        toggle.classList.add("highlight");
        slider.style.height = slider.scrollHeight + "px";
      }
    });
  });
});
