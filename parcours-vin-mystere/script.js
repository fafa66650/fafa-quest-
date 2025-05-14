function demarrer() {
  localStorage.setItem("start", Date.now());
  location.href = "enigme1.html";
}
let startTime = Date.now();
setInterval(() => {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  document.getElementById("chrono").textContent = `⏱️ Temps : ${minutes}:${seconds}`;
}, 1000);