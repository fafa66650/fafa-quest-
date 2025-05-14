
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Statue Maillol (esplanade)",
    lat: 42.4844,
    lon: 3.1272,
    question: "Quelle est la posture de cette statue de femme ?",
    answer: "assise",
    hint: "Observe sa position corporelle."
  },
  {
    id: 2,
    title: "Musée Maillol",
    lat: 42.4842,
    lon: 3.1275,
    question: "Quel matériau utilise-t-il principalement dans ses sculptures ?",
    answer: "bronze",
    hint: "Lis les panneaux dans le musée."
  }
];
const mysteryMission = {
  condition: "chrono < 2700 || bonus_found === true",
  question: "Maillol a créé une sculpture offerte à un grand musée national français. Lequel ?",
  answer: "louvre",
  successTitle: "🎖️ Apprenti Sculpteur FAFA",
  successMessage: "Mission secrète accomplie ! Vous avez débloqué le secret de Maillol."
};
