
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "L'œuvre floue",
    lat: 42.4870,
    lon: 3.1350,
    question: "Quel est le nom de l’artiste dont le portrait est flouté ?",
    answer: "maillol",
    hint: "Il est né à Banyuls.",
    intro: "🔍 Première œuvre, une identité cachée...",
    type: "visuel"
  },
  {
    id: 2,
    title: "Forme sculptée",
    lat: 42.4871,
    lon: 3.1351,
    question: "Quelle forme géométrique décrit les sculptures de Maillol ?",
    answer: "ronde",
    hint: "Ses œuvres sont douces et arrondies.",
    intro: "🗿 Observe les courbes de l’art.",
    type: "choix"
  },
  {
    id: 3,
    title: "Puzzle d’une statue",
    lat: 42.4872,
    lon: 3.1352,
    question: "Quelle pièce complète cette statue célèbre ?",
    answer: "b",
    hint: "Regarde les formes.",
    intro: "🧩 Recompose un chef-d'œuvre perdu.",
    type: "image"
  },
  {
    id: 4,
    title: "Devine la citation",
    lat: 42.4873,
    lon: 3.1353,
    question: "Complète : 'L’art est le ... de l’esprit.'",
    answer: "reflet",
    hint: "C’est un miroir mental.",
    intro: "🧠 La parole des artistes résonne fort.",
    type: "citation"
  },
  {
    id: 5,
    title: "Repère l’œuvre",
    lat: 42.4874,
    lon: 3.1354,
    question: "Photographie une œuvre représentant une femme assise.",
    answer: "photo",
    hint: "Elle t’attend dans la salle 3...",
    intro: "🖼️ Les œuvres sont des témoins du temps.",
    type: "photo"
  },
  {
    id: 6,
    title: "Couleur dominante",
    lat: 42.4875,
    lon: 3.1355,
    question: "Quelle couleur domine l’œuvre 'La Méditerranée' ?",
    answer: "brun",
    hint: "Une couleur chaude et terreuse.",
    intro: "🎨 Les tons révèlent une ambiance.",
    type: "couleur"
  },
  {
    id: 7,
    title: "Date de naissance",
    lat: 42.4876,
    lon: 3.1356,
    question: "En quelle année est né Aristide Maillol ?",
    answer: "1861",
    hint: "Fin du XIXe siècle.",
    intro: "📅 Le début d’une vie d’artiste.",
    type: "date"
  },
  {
    id: 8,
    title: "Anagramme artistique",
    lat: 42.4877,
    lon: 3.1357,
    question: "Reforme le mot : 'SILECTUPR'",
    answer: "sculpteur",
    hint: "Maillol l’était.",
    intro: "🔤 Les lettres racontent l’histoire.",
    type: "anagramme"
  },
  {
    id: 9,
    title: "Code mémoire",
    lat: 42.4878,
    lon: 3.1358,
    question: "Souviens-toi : quel est le code du cadre 'Muse' ?",
    answer: "143",
    hint: "Gravé près de l’œuvre.",
    intro: "🧠 Un test de mémoire visuelle.",
    type: "mémoire"
  },
  {
    id: 10,
    title: "Mot final",
    lat: 42.4879,
    lon: 3.1359,
    question: "Quel mot résume l’art de Maillol ?",
    answer: "équilibre",
    hint: "Un mot qui décrit ses formes.",
    intro: "🎓 Le mot-clé de l’artiste.",
    type: "final"
  }
];

const mysteryMission = {
  condition: "chrono < 3600 || bonus_found === true",
  question: "Quelle œuvre a été cachée dans la réserve secrète du musée ?",
  answer: "la rivière",
  successTitle: "🏅 Conservateur d’Honneur FAFA™",
  successMessage: "Tu as restauré l’équilibre du musée et découvert l’œuvre cachée !"
};
