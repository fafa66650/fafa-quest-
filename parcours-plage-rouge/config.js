
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Sable enchanté",
    lat: 42.4841,
    lon: 3.1341,
    question: "Un symbole apparaît en frottant le sable. Lequel ?",
    answer: "spirale",
    hint: "C’est une forme qui tourne comme une vague.",
    intro: "🌪️ Une empreinte ancienne ressurgit dans le sable humide.",
    type: "observation"
  },
  {
    id: 2,
    title: "Coquillages sonores",
    lat: 42.4842,
    lon: 3.1342,
    question: "Écoute et reproduis la bonne séquence sonore.",
    answer: "1324",
    hint: "Chaque coquillage joue un son différent.",
    intro: "🎶 La musique de l’océan cache un code ancien.",
    type: "musique"
  },
  {
    id: 3,
    title: "Écume mystique",
    lat: 42.4843,
    lon: 3.1343,
    question: "L’écume forme un mot visible une seconde. Lequel ?",
    answer: "trésor",
    hint: "Un mot lié à ce que tu cherches...",
    intro: "💟 Des lettres s’effacent dans les vagues... mais tu as bien vu.",
    type: "mémoire"
  },
  {
    id: 4,
    title: "Mission photo",
    lat: 42.4844,
    lon: 3.1344,
    question: "Photographie un reflet magique ou une forme naturelle rare.",
    answer: "photo",
    hint: "Regarde dans les flaques ou les coquilles cassées.",
    intro: "📸 Les formes de la nature révèlent le passage du temps.",
    type: "photo"
  },
  {
    id: 5,
    title: "La chanson de la mer",
    lat: 42.4845,
    lon: 3.1345,
    question: "Quelle est la phrase que la brise t’a soufflée ?",
    answer: "la mer est vivante",
    hint: "Une phrase pleine de poésie marine.",
    intro: "🌟 Le dernier indice, murmuré par le vent marin...",
    type: "poésie"
  }
];

const mysteryMission = {
  condition: "chrono < 1500 || bonus_found === true",
  question: "Quel animal est sculpté dans la roche rouge à marée basse ?",
  answer: "hippocampe",
  successTitle: "🏅 Gardien de la Plage Rouge FAFA™",
  successMessage: "Tu as découvert le secret des marées et libéré l’hippocampe légendaire !"
};
