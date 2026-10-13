
const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.filter;

        // Update the active button
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Show or hide event cards
        eventCards.forEach(function(card) {
            const eventCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === eventCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});

const registerButtons = document.querySelectorAll(".register-btn");
const modal = document.getElementById("registrationModal");
const closeModalButton = document.getElementById("closeModal");
const selectedEvent = document.getElementById("selectedEvent");
const registrationForm = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

// Open modal when Register is clicked
registerButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectedEvent.textContent = button.dataset.event;
        successMessage.textContent = "";
        registrationForm.reset();

        modal.style.display = "flex";
    });
});

// Close modal using the X button
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal by clicking outside the form
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle registration form submission
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    successMessage.textContent =
        "Thank you, " + name + "! Your registration was successful.";

    registrationForm.reset();
});
