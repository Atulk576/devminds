document.addEventListener("DOMContentLoaded", function () {
  // Select all dropdown elements
  const dropdowns = document.querySelectorAll(".dropdown");

  // Add click event listeners to each dropdown
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Toggle the 'active' class on the clicked dropdown
      this.classList.toggle("active");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (event) {
    dropdowns.forEach(function (dropdown) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
      }
    });
  });
});
