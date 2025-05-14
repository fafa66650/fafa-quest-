
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Feuille typique",
    lat: 42.4821,
    lon: 3.1291,
    question: "Quelle forme de feuille distingue l'olivier ?",
    answer: "lanceolée",
    hint: "Fine et allongée...",
    intro: "🌿 Un bon botaniste reconnaît la forme des feuilles.",
    type: "botanique"
  },
  {
    id: 2,
    title: "Arbre endémique",
    lat: 42.4822,
    lon: 3.1292,
    question: "Quel arbre donne des glands ?",
    answer: "chêne",
    hint: "Présent dans les forêts méditerranéennes.",
    intro: "🌳 Un grand arbre symbole de sagesse.",
    type: "arbre"
  },
  {
    id: 3,
    title: "Sol calcaire",
    lat: 42.4823,
    lon: 3.1293,
    question: "Quelle plante aromatique pousse sur sol sec et calcaire ?",
    answer: "thym",
    hint: "Son parfum est puissant...",
    intro: "🌾 Un classique des garrigues.",
    type: "aromatique"
  },
  {
    id: 4,
    title: "Floraison",
    lat: 42.4824,
    lon: 3.1294,
    question: "Quelle fleur jaune du jardin fleurit en hiver ?",
    answer: "mimosa",
    hint: "Un nuage doré en janvier.",
    intro: "🌷 Même en hiver, le jardin s’éveille.",
    type: "floraison"
  },
  {
    id: 5,
    title: "Mission photo",
    lat: 42.4825,
    lon: 3.1295,
    question: "Photographie une fleur rouge.",
    answer: "photo",
    hint: "Une couleur vive dans un massif fleuri.",
    intro: "📷 Une tâche de couleur attire ton regard...",
    type: "photo"
  },
  {
    id: 6,
    title: "Arôme mystère",
    lat: 42.4826,
    lon: 3.1296,
    question: "Quelle plante sent le citron lorsqu’on frotte ses feuilles ?",
    answer: "verveine",
    hint: "Un arôme citronné apaisant.",
    intro: "🌿 Laisse ton odorat te guider.",
    type: "olfactif"
  },
  {
    id: 7,
    title: "Habitat local",
    lat: 42.4827,
    lon: 3.1297,
    question: "Quel animal à carapace vit dans les murets du jardin ?",
    answer: "lézard",
    hint: "Il aime la chaleur et les pierres.",
    intro: "🍁 Petite créature du sud, rapide et discrète.",
    type: "animalier"
  },
  {
    id: 8,
    title: "Plante grimpante",
    lat: 42.4828,
    lon: 3.1298,
    question: "Quelle plante grimpante est souvent violette et s’enroule ?",
    answer: "glycine",
    hint: "Ses grappes tombent en cascade au printemps.",
    intro: "🍀 Une beauté suspendue aux treilles.",
    type: "plante"
  },
  {
    id: 9,
    title: "Climat méditerranéen",
    lat: 42.4829,
    lon: 3.1299,
    question: "Quel fruit à noyau pousse sur un arbre méditerranéen ?",
    answer: "abricot",
    hint: "Orange, sucré, d’été.",
    intro: "🌴 Un fruit gorgé de soleil.",
    type: "fruit"
  },
  {
    id: 10,
    title: "Dernière graine",
    lat: 42.4830,
    lon: 3.1300,
    question: "Quel mot désigne l’ensemble des espèces végétales d’un lieu ?",
    answer: "flore",
    hint: "C’est un mot botanique global.",
    intro: "🌼 Tu termines ton exploration par un mot... riche en biodiversité.",
    type: "final"
  }
];

const mysteryMission = {
  condition: "chrono < 3600 || bonus_found === true",
  question: "Quelle plante est sacrée chez les Romains et pousse au jardin ?",
  answer: "laurier",
  successTitle: "🏅 Jardinier Sage FAFA™",
  successMessage: "Tu as percé les mystères du jardin et mérité ton rameau de laurier !"
};
