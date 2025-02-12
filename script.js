document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const flipButtons = document.querySelectorAll(".flip-button");

  flipButtons.forEach((button) => {
      button.addEventListener("click", function () {
          card.classList.toggle("flipped");

          // Reset scroll position when flipping
          setTimeout(() => {
              document.querySelector(".card .front").scrollTop = 0;
              document.querySelector(".card .back").scrollTop = 0;
          }, 300);
      });
  });
});