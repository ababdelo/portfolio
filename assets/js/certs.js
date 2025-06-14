document.addEventListener("DOMContentLoaded", () => {
  // Modal Elements
  const modal = document.getElementById("certificate-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("modal-caption");
  const closeBtn = document.getElementById("close-modal");

  let scrollPosition = 0;

  function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    document.documentElement.classList.remove("modal-open");
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
  }

  // Image Click to Open Modal
  document.querySelectorAll(".certificate-item img").forEach(img => {
    img.addEventListener("click", () => {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.classList.add("modal-open");
      document.documentElement.classList.add("modal-open");
      modal.style.display = "flex";
      modalImg.src = img.src;
      captionText.textContent = img.alt;
    });
  });

  // Close Modal
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  // Certificate Show More / Show Less
  const toggleBtn = document.getElementById("toggle-certs-btn");
  const hiddenCerts = document.querySelectorAll(".certificate-item.hidden");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = hiddenCerts[0]?.classList.contains("hidden");

      hiddenCerts.forEach(item => {
        item.classList.toggle("hidden", !isHidden);
      });

      toggleBtn.firstChild.textContent = isHidden ? "Show Less " : "Show More ";
    });
  }
});
