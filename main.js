// main.js

document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("europe-map");
  const tooltip = document.getElementById("tooltip");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    // Wähle alle Pfade mit einer ID aus
    const regions = svgDoc.querySelectorAll("[id]");

    regions.forEach(region => {
      region.style.cursor = "pointer";

      region.addEventListener("mouseover", (e) => {
        const id = e.target.id;
        tooltip.textContent = id; // Später durch Mapping ersetzen
        tooltip.classList.remove("hidden");
      });

      region.addEventListener("mousemove", (e) => {
        tooltip.style.top = (e.pageY + 15) + "px";
        tooltip.style.left = (e.pageX + 15) + "px";
      });

      region.addEventListener("mouseout", () => {
        tooltip.classList.add("hidden");
      });
    });
  });
});
