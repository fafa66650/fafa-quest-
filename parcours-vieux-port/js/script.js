
let startTime;
function startGame() {
  startTime = Date.now();
  localStorage.setItem("start", startTime);
  window.location.href = "js/enigme1.html";
}
setInterval(() => {
  if (startTime) {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const sec = String(elapsed % 60).padStart(2, '0');
    document.getElementById("chrono").textContent = `⏱ Temps : ${min}:${sec}`;
  }
}, 1000);
