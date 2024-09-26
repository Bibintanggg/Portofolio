const filterButtons = document.querySelectorAll(".tombol");
const portfolioItems = document.querySelectorAll(".img-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
    const category = button.getAttribute("data-name");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    portfolioItems.forEach((item) => {
        if (category === "all" || item.getAttribute("data-name") === category) {
        item.parentElement.parentElement.style.display = "block";
        } else {
        item.parentElement.parentElement.style.display = "none";
        }
    });
    });
});
