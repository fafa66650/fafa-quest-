
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Chiffre masqué",
    lat: 42.4881,
    lon: 3.1381,
    question: "Quel code suit cette suite logique ? 2, 4, 6, ?",
    answer: "8",
    hint: "Suite de nombres pairs.",
    intro: "🧠 Lancement du vaisseau : une suite logique pour allumer les moteurs.",
    type: "logique"
  },
  {
    id: 2,
    title: "Mot caché",
    lat: 42.4882,
    lon: 3.1382,
    question: "Décode l’anagramme : F A A F",
    answer: "fafa",
    hint: "Un nom que tu connais bien...",
    intro: "🔤 Un code galactique caché dans les lettres.",
    type: "anagramme"
  },
  {
    id: 3,
    title: "Dernier code",
    lat: 42.4883,
    lon: 3.1383,
    question: "FA + 3 = ?",
    answer: "FA3",
    hint: "FA plus un chiffre.",
    intro: "🧩 Assemble les modules de commande.",
    type: "enigme"
  },
  {
    id: 4,
    title: "Code binaire",
    lat: 42.4884,
    lon: 3.1384,
    question: "Convertis le nombre 4 en binaire.",
    answer: "100",
    hint: "Utilise la base 2 !",
    intro: "💾 La navette décode en numérique...",
    type: "calcul"
  },
  {
    id: 5,
    title: "Décrypte finale",
    lat: 42.4885,
    lon: 3.1385,
    question: "Quel est le mot qui rassemble tous les indices ?",
    answer: "code",
    hint: "Un mot unique, unifiant tout.",
    intro: "🏁 Le centre de la galaxie porte ce nom.",
    type: "final"
  },
  {
    id: 6,
    title: "Rébus numérique",
    lat: 42.4886,
    lon: 3.1386,
    question: "Devine le mot : 20 + 8 + 5 = ?",
    answer: "the",
    hint: "Chaque chiffre correspond à une lettre.",
    intro: "🔐 Les chiffres cachent un mot.",
    type: "lettres"
  },
  {
    id: 7,
    title: "Objets codés",
    lat: 42.4887,
    lon: 3.1387,
    question: "Quel objet sécurise un journal intime ?",
    answer: "cadenas",
    hint: "Objet avec une clé ou code...",
    intro: "🔐 Protège les souvenirs dans la station Fafou.",
    type: "objet"
  },
  {
    id: 8,
    title: "Couleur secrète",
    lat: 42.4888,
    lon: 3.1388,
    question: "Complète la suite : Rouge, Orange, Jaune, ?, Bleu",
    answer: "vert",
    hint: "Pense à l’arc-en-ciel...",
    intro: "🌈 Un prisme caché dans les constellations.",
    type: "logique"
  },
  {
    id: 9,
    title: "Message crypté",
    lat: 42.4889,
    lon: 3.1389,
    question: "Déchiffre : KHOOR = ? (César +3)",
    answer: "hello",
    hint: "Décale chaque lettre.",
    intro: "🕵️ Une transmission intersidérale codée.",
    type: "crypto"
  },
  {
    id: 10,
    title: "Symbole final",
    lat: 42.4890,
    lon: 3.1390,
    question: "Quel symbole te permet d’entrer dans un monde protégé ?",
    answer: "mot de passe",
    hint: "Souvent secret et sécurisé.",
    intro: "🔑 Tu es aux portes de la galaxie FAFA...",
    type: "symbolique"
  }
];

const mysteryMission = {
  condition: "chrono < 3600 || bonus_found === true",
  question: "Quel est le nom du satellite imaginaire de Fafou ?",
  answer: "nebulia",
  successTitle: "🏅 Commandant Fafounien",
  successMessage: "Tu as terminé la mission et découvert la galaxie cachée !"
};
