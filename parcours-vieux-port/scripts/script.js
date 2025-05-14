
function startGame() {
  localStorage.setItem("start", Date.now());
  window.location.href = "enigme1.html";
}

setInterval(() => {
  const start = localStorage.getItem("start");
  if (start) {
    const elapsed = Math.floor((Date.now() - parseInt(start)) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    document.getElementById("chrono").textContent = `⏱ Temps : ${minutes}:${seconds}`;
  }
}, 1000);
