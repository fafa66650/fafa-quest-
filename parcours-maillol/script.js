
let currentRiddle = 0;
let chronoInterval;
let startTime;
let map, playerMarker;

document.getElementById('mode').addEventListener('change', function() {
  document.getElementById('groupDetails').style.display = this.value === 'groupe' ? 'block' : 'none';
});

document.getElementById('participantCount').addEventListener('change', function() {
  const container = document.getElementById('participants');
  container.innerHTML = '';
  for (let i = 1; i <= this.value; i++) {
    container.innerHTML += `<label>Participant ${i} :</label><input type="text" name="participant${i}" required><br>`;
  }
});

document.getElementById('playerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  initGame();
});

function initGame() {
  startTime = Date.now();
  chronoInterval = setInterval(updateChrono, 1000);
  initMap();
  loadRiddle();
}

function updateChrono() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  document.getElementById('chrono').textContent = `${minutes}:${seconds}`;
}

function initMap() {
  map = L.map('map').setView([42.4844, 3.1275], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      if (!playerMarker) {
        playerMarker = L.marker([lat, lon]).addTo(map);
      } else {
        playerMarker.setLatLng([lat, lon]);
      }
    });
  }
}

function loadRiddle() {
  const riddle = riddles[currentRiddle];
  const section = document.getElementById('riddleSection');
  section.innerHTML = `
    <h2>Ã‰nigme ${riddle.id}: ${riddle.title}</h2>
    <p>${riddle.question}</p>
    <input type="text" id="riddleAnswer" placeholder="Votre rÃ©ponse...">
    <button onclick="checkAnswer()">Valider</button>
    <p><em>Indice : ${riddle.hint}</em></p>
  `;
}

function checkAnswer() {
  const input = document.getElementById('riddleAnswer').value.toLowerCase().trim();
  if (input === riddles[currentRiddle].answer.toLowerCase()) {
    alert("âœ… Bonne rÃ©ponse !");
    currentRiddle++;
    if (currentRiddle < riddles.length) {
      loadRiddle();
    } else {
      clearInterval(chronoInterval);
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      checkMystery(elapsed);
    }
  } else {
    alert("âŒ Mauvaise rÃ©ponse !");
  }
}

function checkMystery(chrono) {
  const unlock = eval(mysteryMission.condition.replace('chrono', chrono).replace('bonus_found', false));
  if (unlock) {
    document.getElementById('riddleSection').innerHTML = `
      <h2>ðŸ•µï¸ Mission MystÃ¨re !</h2>
      <p>${mysteryMission.question}</p>
      <input type="text" id="mysteryAnswer" placeholder="Votre rÃ©ponse...">
      <button onclick="checkMysteryAnswer()">Valider</button>
    `;
  } else {
    endGame();
  }
}

function checkMysteryAnswer() {
  const input = document.getElementById('mysteryAnswer').value.toLowerCase().trim();
  if (input === mysteryMission.answer.toLowerCase()) {
    document.getElementById('riddleSection').innerHTML = `
      <h2>${mysteryMission.successTitle}</h2>
      <p>${mysteryMission.successMessage}</p>
    `;
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById('riddleSection').innerHTML = "<h2>ðŸŽ‰ Parcours terminÃ© ! Bravo pour votre exploration de Maillol.</h2>";
}
