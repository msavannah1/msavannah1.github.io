document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Button clicked:", this); // Debugging

      let slider = this.nextElementSibling;
      console.log("Slider found:", slider); // Debugging

      if (slider.style.height) {
        slider.style.height = null;
        button.classList.remove("highlight");
      } else {
        document.querySelectorAll(".toggle.highlight").forEach((other) => {
          other.classList.remove("highlight");
          other.nextElementSibling.style.height = null;
        });
        button.classList.add("highlight");
        slider.style.height = slider.scrollHeight + "px";
      }
    });
  });
});

