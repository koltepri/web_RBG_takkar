// Method 1: Using createElement() and appendChild()
function addNewItem() {
  // Create a new div element
  const newItem = document.createElement("div");

  // Add class and content
  newItem.className = "new-item";
  newItem.textContent =
    "New Item " + (document.querySelectorAll(".new-item").length + 1);

  // Add to the container
  const container = document.getElementById("main-container");
  container.appendChild(newItem);
}

// Event listener for page load
document.addEventListener("DOMContentLoaded", function () {
  // Add some initial items
  addNewItem();
  addNewItem();

  // Add event listeners to buttons
  document
    .getElementById("main-container")
    .addEventListener("click", function (e) {
      if (
        e.target.tagName === "BUTTON" &&
        e.target.textContent === "Add Custom Item"
      ) {
        addCustomItem();
      }
    });
});
