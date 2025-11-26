// SWIPER

var swiper = new Swiper(".about-us-google-review-bar", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// MODAL for PROMO VIDEO

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.querySelector(".about-us-video-play-btn");
  if (!playBtn) return;

  // Create modal (template literal, clean structure)
  const modal = document.createElement("div");
  modal.classList.add("video-modal-overlay");
  modal.id = "videoModal";

  modal.innerHTML = `
    <div class="video-modal-content">
      <button class="video-modal-close" aria-label="Close video">&times;</button>
      <video id="modalVideo" src="/src/assets/balcon-video.mp4" playsinline controls></video>
    </div>
  `;

  document.body.append(modal);

  const modalVideo = modal.querySelector("#modalVideo");
  const closeBtn = modal.querySelector(".video-modal-close");

  const openModal = () => {
    modal.classList.add("active");
    modalVideo.currentTime = 0;
    modalVideo.play();
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.currentTime = 0;
  };

  playBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  // Close when clicking outside the actual video container
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
