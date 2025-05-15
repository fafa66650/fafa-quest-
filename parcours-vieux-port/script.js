let startTime;
function startGame() {
  startTime = Date.now();
  localStorage.setItem("start", startTime);
  window.location.href = "enigmes/enigme1.html";
}
