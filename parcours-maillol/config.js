
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Signature cachée",
    lat: 42.4844,
    lon: 3.1272,
    question: "Quel est le prénom complet de Maillol ?",
    answer: "aristide",
    hint: "Cherche dans la plaque d’entrée du musée.",
    intro: "🖋️ Une signature oubliée… Saurez-vous retrouver le prénom complet gravé sur les murs du passé ?",
    type: "question"
  },
  {
    id: 2,
    title: "Sculpture photo",
    lat: 42.4845,
    lon: 3.1274,
    question: "Photographie la statue féminine à l’entrée du musée.",
    answer: "photo",
    hint: "Utilise ton regard d’artiste.",
    intro: "🗿 L’œil du photographe est mis à l’épreuve : capture la muse à l’entrée du musée.",
    type: "photo"
  },
  {
    id: 3,
    title: "Matière préférée",
    lat: 42.4846,
    lon: 3.1275,
    question: "Quel matériau Maillol utilisait-il souvent pour ses sculptures ?",
    answer: "bronze",
    hint: "Ce matériau est souvent moulé ou fondu.",
    intro: "🪵 Entre bois, pierre et bronze... devine la matière que Maillol préférait.",
    type: "choix"
  },
  {
    id: 4,
    title: "Anagramme artiste",
    lat: 42.4847,
    lon: 3.1276,
    question: "Réorganise les lettres : ATLIOR",
    answer: "aristol",
    hint: "Un nom proche d’Aristide ?",
    intro: "🔤 Un jeu de lettres te rapproche du secret de son nom d'artiste.",
    type: "anagramme"
  },
  {
    id: 5,
    title: "Œuvre disparue",
    lat: 42.4848,
    lon: 3.1277,
    question: "Quel type d’œuvre a disparu du catalogue ?",
    answer: "esquisse",
    hint: "Cherche la plus petite trace laissée par l’artiste.",
    intro: "🎭 Une œuvre manque à l'appel… statue, peinture, ou esquisse ?",
    type: "question"
  },
  {
    id: 6,
    title: "Citation codée",
    lat: 42.4849,
    lon: 3.1278,
    question: "Complète cette citation : "L’art, c’est..."",
    answer: "harmonie",
    hint: "Maillol valorisait l’équilibre.",
    intro: "📜 Devine ce mot simple qui résume toute la philosophie de Maillol.",
    type: "citation"
  },
  {
    id: 7,
    title: "Code UV",
    lat: 42.4850,
    lon: 3.1279,
    question: "Sur un mur, un indice révèle : 2+5x2. Résous-le.",
    answer: "12",
    hint: "Regarde bien la formule mathématique.",
    intro: "🔢 Résous l’équation laissée à la craie invisible.",
    type: "calcul"
  },
  {
    id: 8,
    title: "Œil du détail",
    lat: 42.4851,
    lon: 3.1280,
    question: "Combien de doigts visibles sur la sculpture salle 2 ?",
    answer: "4",
    hint: "Regarde attentivement les mains sculptées.",
    intro: "👁️ Le détail fait l’artiste… à toi de compter.",
    type: "observation"
  },
  {
    id: 9,
    title: "Image absente",
    lat: 42.4852,
    lon: 3.1281,
    question: "Dans quelle salle manque un tableau ? (numéro uniquement)",
    answer: "3",
    hint: "Va voir la salle à gauche de l’entrée.",
    intro: "🖼️ Une absence criante. Trouve la salle orpheline.",
    type: "exploration"
  },
  {
    id: 10,
    title: "Mot final",
    lat: 42.4853,
    lon: 3.1282,
    question: "Quel mot unit sculpture, dessin, esquisse et musée ?",
    answer: "art",
    hint: "Ce mot est au cœur de tout le parcours.",
    intro: "🎨 Ce mot est au cœur de l’œuvre de Maillol… et du parcours.",
    type: "final"
  }
];

const mysteryMission = {
  condition: "chrono < 2700 || bonus_found === true",
  question: "Maillol a créé une sculpture offerte à un grand musée national français. Lequel ?",
  answer: "louvre",
  successTitle: "🎖️ Détective des Arts FAFA™",
  successMessage: "Mission secrète accomplie ! Tu as retrouvé l’œuvre disparue."
};
