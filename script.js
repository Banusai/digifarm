document.addEventListener("DOMContentLoaded", function() {
  // Autoplay the videos when the page loads
  var videos = document.querySelectorAll('video');
  videos.forEach(function(video) {
    video.play();
  });
  
  // Restart carousel after sliding
  $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    setTimeout(function () {
      $('.carousel').carousel('next');
    }, 5000); // Adjust delay as needed
  });
});







document.addEventListener("DOMContentLoaded", function() {
  const cardsItems = document.querySelectorAll(".cards_item");

  cardsItems.forEach(function(item) {
    const expirationTime = parseInt(item.dataset.expiration);
    const timerElement = item.querySelector(".timer");

    function updateTimer() {
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      const remainingTime = expirationTime - currentTime;

      if (remainingTime <= 0) {
        item.classList.add("unavailable");
        timerElement.textContent = "Unavailable";
      } else {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
      }
    }

    // Initial update
    updateTimer();

    // Update timer every second
    setInterval(updateTimer, 1000);
  });
});
















