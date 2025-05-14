
const riddles = [
  {
    question: "Trouve la statue de Maillol : quelle est sa posture ?",
    answer: "assise",
    fact: "Le sculpteur Aristide Maillol est originaire de Banyuls-sur-Mer."
  },
  {
    question: "Cherche un banc face à la mer. Combien de bouées rouges vois-tu ?",
    answer: "3",
    fact: "Les bouées servent à délimiter les zones de baignade sécurisées."
  },
  {
    question: "Repère un panneau historique. Quelle année y est inscrite ?",
    answer: "1894",
    fact: "Cette année marque l'installation du premier vignoble reconnu de Banyuls."
  },
  {
    question: "Près du port, trouve un poisson en mosaïque. Quelle est sa couleur principale ?",
    answer: "bleu",
    fact: "La mosaïque rappelle l'importance de la pêche à Banyuls depuis le Moyen Âge."
  },
  {
    question: "Approche-toi du vieux four à pain : que sent-on ?",
    answer: "pain",
    fact: "Les fours collectifs étaient fréquents dans les villages catalans."
  },
  {
    question: "Quelle montagne voit-on au sud en longeant la plage ?",
    answer: "albères",
    fact: "Les Albères forment la jonction entre les Pyrénées et la Méditerranée."
  },
  {
    question: "Cherche une fresque marine. Que voit-on en bas à droite ?",
    answer: "hippocampe",
    fact: "Les hippocampes vivent dans les herbiers sous-marins protégés de la réserve."
  },
  {
    question: "Combien de marches pour accéder au belvédère ?",
    answer: "27",
    fact: "Le belvédère offre un panorama sur la baie de Banyuls."
  },
  {
    question: "Lis un panneau viticole. Quel cépage y est mentionné ?",
    answer: "grenache",
    fact: "Le grenache est la base des célèbres vins doux naturels de Banyuls."
  },
  {
    question: "Quelle couleur domine le toit du musée Maillol ?",
    answer: "rouge",
    fact: "Le musée Maillol rend hommage à l’œuvre de l'artiste dans sa ville natale."
  }
];

let current = 0;

function validateCode() {
  const code = document.getElementById('accessCode').value;
  if (code === "FAFA2025") {
    document.getElementById('admin').style.display = 'none';
    document.getElementById('gameContent').style.display = 'block';
    showRiddle();
  } else {
    alert("Code incorrect !");
  }
}

function showRiddle() {
  const container = document.getElementById("riddleContainer");
  const riddle = riddles[current];
  container.innerHTML = `
    <div class="riddle">
      <h2>Énigme ${current + 1}</h2>
      <p>${riddle.question}</p>
      <input type="text" id="userAnswer" placeholder="Votre réponse...">
      <button onclick="checkAnswer()">Valider</button>
    </div>
  `;
}

function checkAnswer() {
  const input = document.getElementById("userAnswer").value.trim().toLowerCase();
  const answer = riddles[current].answer.toLowerCase();
  if (input === answer) {
    document.getElementById("riddleContainer").innerHTML = `
      <div class="riddle">
        <h2>✅ Bravo !</h2>
        <p><strong>Le savais-tu ?</strong> ${riddles[current].fact}</p>
      </div>
    `;
    document.getElementById("nextBtn").style.display = "inline-block";
  } else {
    alert("Mauvaise réponse, essaie encore !");
  }
}

function nextRiddle() {
  current++;
  document.getElementById("nextBtn").style.display = "none";
  if (current < riddles.length) {
    showRiddle();
  } else {
    document.getElementById("riddleContainer").innerHTML = "<h2>🎉 Félicitations, parcours terminé !</h2>";
  }
}
