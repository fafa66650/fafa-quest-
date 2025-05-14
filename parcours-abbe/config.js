
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Le livre sacré",
    lat: 42.4890,
    lon: 3.1370,
    question: "Quel est le nom du livre fondateur de la religion chrétienne ?",
    answer: "bible",
    hint: "C’est le texte de référence depuis des siècles...",
    intro: "📖 Dans la crypte, un vieux manuscrit fait mention d’un livre sacré...",
    type: "question"
  },
  {
    id: 2,
    title: "Croix cachée",
    lat: 42.4891,
    lon: 3.1371,
    question: "Combien de croix peux-tu compter à l’intérieur de l’église ?",
    answer: "5",
    hint: "Regarde bien sur les murs, vitraux et autels.",
    intro: "✝️ L’abbé a laissé un indice dans la croix... combien sont-elles ?",
    type: "observation"
  },
  {
    id: 3,
    title: "Vitrail sacré",
    lat: 42.4892,
    lon: 3.1372,
    question: "Photographie un vitrail représentant un saint ou une scène biblique.",
    answer: "photo",
    hint: "Un détail lumineux à capturer.",
    intro: "🌈 La lumière traverse la foi. Capture l’image d’un vitrail sacré.",
    type: "photo"
  },
  {
    id: 4,
    title: "Mot caché",
    lat: 42.4893,
    lon: 3.1373,
    question: "Réorganise les lettres : TSIHREO",
    answer: "histoire",
    hint: "Ce mot est essentiel au patrimoine...",
    intro: "🔤 L’histoire se cache dans les lettres éparpillées par l’Abbé.",
    type: "anagramme"
  },
  {
    id: 5,
    title: "Instrument sacré",
    lat: 42.4894,
    lon: 3.1374,
    question: "Quel instrument à tuyaux est souvent utilisé dans les églises ?",
    answer: "orgue",
    hint: "Il remplit tout l’espace sonore sacré.",
    intro: "🎼 Le son mystique s’élève... devine quel instrument le produit.",
    type: "culture"
  },
  {
    id: 6,
    title: "Bénitier",
    lat: 42.4895,
    lon: 3.1375,
    question: "Comment appelle-t-on le récipient d’eau bénite à l’entrée ?",
    answer: "bénitier",
    hint: "Il contient l’eau sacrée...",
    intro: "💧 À l’entrée, l’eau bénite attend les fidèles. Donne son nom.",
    type: "question"
  },
  {
    id: 7,
    title: "Date secrète",
    lat: 42.4896,
    lon: 3.1376,
    question: "Quelle année est gravée sur la façade ?",
    answer: "1872",
    hint: "Gravée au-dessus de l’entrée principale.",
    intro: "📅 L’Abbé a marqué l’année dans la pierre.",
    type: "date"
  },
  {
    id: 8,
    title: "Message numéroté",
    lat: 42.4897,
    lon: 3.1377,
    question: "Le message caché indique : 6+4x2. Résous-le.",
    answer: "14",
    hint: "Un petit calcul sacré...",
    intro: "🔢 Un chiffre laissé par l’Abbé t’attend dans le message codé.",
    type: "calcul"
  },
  {
    id: 9,
    title: "Statue mystérieuse",
    lat: 42.4898,
    lon: 3.1378,
    question: "Combien d’anges peux-tu voir dans le chœur ?",
    answer: "3",
    hint: "Ils veillent en silence autour de l’autel...",
    intro: "🗿 Les anges observent... compte-les.",
    type: "observation"
  },
  {
    id: 10,
    title: "Le mot final",
    lat: 42.4899,
    lon: 3.1379,
    question: "Quel mot unit spiritualité, architecture, symbole et histoire ?",
    answer: "église",
    hint: "Ce lieu rassemble les croyants...",
    intro: "⛪ Le secret se termine là où tout a commencé.",
    type: "final"
  }
];

const mysteryMission = {
  condition: "chrono < 3600 || bonus_found === true",
  question: "Quelle plante sacrée est souvent bénie à Pâques ?",
  answer: "buis",
  successTitle: "🏅 Gardien du Patrimoine Spirituel FAFA™",
  successMessage: "Bravo ! Tu as percé le secret de l’Abbé et mérité ton badge FAFA sacré."
};
