document.querySelectorAll(".faq-header").forEach((header) => {
    header.addEventListener("click", () => {
        const parent = header.parentNode;
        const icon = header.querySelector(".faq-icon");

        parent.classList.toggle("active");
        icon.textContent = parent.classList.contains("active") ? "−" : "+";
    });
});