"use strict";

// Toggle element function
const elementToggleFunc = (element) => {
    element.classList.toggle("active");
};

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
    elementToggleFunc(sidebar);
});

// Testimonials modal
const testimonialsItems = document.querySelectorAll("[testimonials-data-item]");
const modalContainer = document.querySelector("[testimonials-data-modal-container]");
const modalCloseBtn = document.querySelector("[testimonials-data-modal-close-btn]");
const overlay = document.querySelector("[testimonials-data-overlay]");
const modalImg = document.querySelector("[testimonials-data-modal-img]");
const modalTitle = document.querySelector("[testimonials-data-modal-title]");
const modalText = document.querySelector("[testimonials-data-modal-text]");

const toggleTestimonialsModal = () => {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

testimonialsItems.forEach((item) => {
    item.addEventListener("click", () => {
        modalImg.src = item.querySelector("[testimonials-data-avatar]").src;
        modalImg.alt = item.querySelector("[testimonials-data-avatar]").alt;
        modalTitle.innerHTML = item.querySelector("[testimonials-data-title]").innerHTML;
        modalText.innerHTML = item.querySelector("[testimonials-data-text]").innerHTML;
        toggleTestimonialsModal();
    });
});

modalCloseBtn.addEventListener("click", toggleTestimonialsModal);
overlay.addEventListener("click", toggleTestimonialsModal);

// Select dropdown
const selectButton = document.querySelector("[data-select]");
const selectItemsContainer = document.querySelector("[data-select-items]");
const selectValue = document.querySelector("[data-selecct-value]");
const selectItems = document.querySelectorAll("[data-select-item]");

selectButton.addEventListener("click", () => {
    elementToggleFunc(selectItemsContainer);
    const isActive = selectItemsContainer.classList.contains("active");

    selectItemsContainer.style.height = isActive ? `${selectItemsContainer.scrollHeight}px` : "0";
    selectItemsContainer.style.opacity = isActive ? "1" : "0";
    selectItemsContainer.style.transition = "height 0.3s ease, opacity 0.3s ease";
});

selectItems.forEach((item) => {
    item.addEventListener("click", () => {
        const selectedValue = item.innerText.toLowerCase();
        selectValue.innerText = item.innerText;

        selectItemsContainer.classList.remove("active");
        selectItemsContainer.style.height = "0";
        selectItemsContainer.style.opacity = "0";
        filterFunc(selectedValue);
    });
});

// Filter functionality
const filterItems = document.querySelectorAll(".project-item");

const filterFunc = (selectedCategory) => {
    filterItems.forEach((item) => {
        const itemType = item.dataset.projectType.toLowerCase().trim();
        const isMatch = selectedCategory === itemType || selectedCategory === "all";

        item.classList.toggle("active", isMatch);
        item.style.display = isMatch ? "block" : "none";
    });
};

// Filter buttons functionality
window.addEventListener("load", () => {
    const activeBtnText = document.querySelector("[data-filter-btn].active").innerText.toLowerCase();
    filterFunc(activeBtnText);
});

let lastClickedBtn = document.querySelector("[data-filter-btn].active");

document.querySelectorAll("[data-filter-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const btnText = btn.innerText.toLowerCase();
        selectValue.innerText = btn.innerText;

        filterFunc(btnText);
        lastClickedBtn.classList.remove("active");
        btn.classList.add("active");
        lastClickedBtn = btn;
    });
});

// Form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach((input) => {
    input.addEventListener("input", () => {
        form.checkValidity() ? formBtn.removeAttribute("disabled") : formBtn.setAttribute("disabled", "");
    });
});

// Navigation links
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
        pages.forEach((page, index) => {
            const isMatch = link.innerHTML.toLowerCase() === page.dataset.page;

            page.classList.toggle("active", isMatch);
            navigationLinks[index].classList.toggle("active", isMatch);
        });
        window.scrollTo(0, 0);
    });
});

// Project modal
const projectItems = document.querySelectorAll(".project-item");
const projectModalContainer = document.querySelector(".project-modal-container");
const projectModalTitle = document.querySelector(".project-modal-title");
const projectModalImg = document.querySelector(".project-modal-img");
const projectModalDesc = document.querySelector(".project-modal-desc");
const projectModalStat = document.querySelector(".project-modal-status");
const projectModalLink = document.querySelector(".project-modal-link");
const projectModalType = document.querySelector(".project-modal-type");
const projectModalOverlay = document.querySelector(".project-overlay");
const projectCloseBtn = document.querySelector(".project-modal-close-btn");

const toggleProjectModal = () => {
    projectModalContainer.classList.toggle("active");
    projectModalOverlay.classList.toggle("active");
};

projectItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Set project modal title, image, type, description, and status
        projectModalTitle.innerText = item.dataset.projectTitle;
        projectModalImg.src = item.querySelector("img").src;
        projectModalType.innerText = item.dataset.projectType;
        projectModalDesc.innerText = item.dataset.projectDesc;
        projectModalStat.innerText = item.dataset.projectStat;

        // Trim the project link value
        const projectLink = item.dataset.projectLink.trim();

        // Handle the project link: if empty, show "UNDEFINED", otherwise show "View Project"
        if (!projectLink) {
            projectModalLink.innerText = "UNDEFINED";
            projectModalLink.style.color = "hsla(0, 0%, 84%, 0.7)"; // Neutral color
            projectModalLink.removeAttribute("href"); // Make it non-clickable
            projectModalLink.style.pointerEvents = "none"; // Disable interaction
        } else {
            projectModalLink.innerText = "View Project";
            projectModalLink.setAttribute("href", projectLink); // Set the link
            projectModalLink.style.color = "hsl(219, 79%, 70%)"; // Set default link color
            projectModalLink.style.pointerEvents = "auto"; // Enable interaction
        }

        // Set project status color based on status value
        const projectStatus = item.dataset.projectStat.toLowerCase();
        const statusColors = {
            "in progress": "#eeaa1c",  // Orange for on hold
            "on hold": "#fe9801",      // Gold for in progress
            "suspended": "#e6534b",    // Red for suspended
            "planning": "#9ACEEB",     // blue for planning
            "completed": "#58c637",     // Green for completed
            "undefined": "#f0f0f0"     // Neutral color for undefined
        };

        // Apply the color based on the status, or use a default if not listed
        projectModalStat.style.color = statusColors[projectStatus] || "#f0f0f0";

        // Toggle modal visibility
        toggleProjectModal();
    });
});



projectCloseBtn.addEventListener("click", toggleProjectModal);
projectModalOverlay.addEventListener("click", toggleProjectModal);

console.log("script.js loaded");
