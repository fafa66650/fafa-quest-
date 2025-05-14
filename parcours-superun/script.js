function lancer() {
  localStorage.setItem("start", Date.now());
  location.href = "enigme1.html";
}
let startTime = Date.now();
setInterval(() => {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const sec = String(elapsed % 60).padStart(2, '0');
  document.getElementById("chrono").textContent = `${min}:${sec}`;
}, 1000);