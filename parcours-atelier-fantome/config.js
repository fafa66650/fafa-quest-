
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Pinceau disparu",
    lat: 42.4871,
    lon: 3.1351,
    question: "Quel outil revient dans chaque vision floue de l’atelier ?",
    answer: "pinceau",
    hint: "Indice : utilisé pour peindre...",
    intro: "🖌️ Des visions apparaissent... toujours le même outil.",
    type: "question"
  },
  {
    id: 2,
    title: "Couleur du rêve",
    lat: 42.4872,
    lon: 3.1352,
    question: "Quelle couleur symbolise l'imaginaire et les souvenirs ?",
    answer: "violet",
    hint: "Entre bleu et rouge... une teinte onirique.",
    intro: "🎨 Le rêve a une teinte... mais laquelle ?",
    type: "couleur"
  },
  {
    id: 3,
    title: "Message entre les lignes",
    lat: 42.4873,
    lon: 3.1353,
    question: "Quel mot symbolise un souvenir qui reste ?",
    answer: "souvenir",
    hint: "Ce que laisse un fantôme ou une œuvre...",
    intro: "🔍 Les mots se cachent dans les murs du passé.",
    type: "question"
  },
  {
    id: 4,
    title: "Photo de l’objet mystérieux",
    lat: 42.4874,
    lon: 3.1354,
    question: "Prends une photo d’un objet ancien ou artistique dans l’atelier.",
    answer: "photo",
    hint: "Tout ce qui a du vécu peut faire l’affaire.",
    intro: "📸 La mémoire visuelle est essentielle ici.",
    type: "photo"
  },
  {
    id: 5,
    title: "Couleur manquante",
    lat: 42.4875,
    lon: 3.1355,
    question: "Complète cette palette : Rouge, Bleu, Jaune, ?, Vert",
    answer: "orange",
    hint: "Couleur secondaire entre rouge et jaune.",
    intro: "🖍️ Une teinte absente... à toi de la retrouver.",
    type: "choix"
  },
  {
    id: 6,
    title: "Anagramme cachée",
    lat: 42.4876,
    lon: 3.1356,
    question: "Réorganise : "FANTÔME"",
    answer: "montafé",
    hint: "Ce mot te paraît magique...",
    intro: "🔤 L’ombre d’un mot, recomposée dans la mémoire...",
    type: "anagramme"
  },
  {
    id: 7,
    title: "Mémoire visuelle",
    lat: 42.4877,
    lon: 3.1357,
    question: "Combien de tableaux sont accrochés dans l'atelier ?",
    answer: "4",
    hint: "Compte bien chaque cadre...",
    intro: "🧠 Ta mémoire sera mise à l’épreuve.",
    type: "observation"
  },
  {
    id: 8,
    title: "Ombre et lumière",
    lat: 42.4878,
    lon: 3.1358,
    question: "Quel objet projette l’ombre étrange du fantôme ?",
    answer: "lampe",
    hint: "Objet source de lumière dans la pièce...",
    intro: "🌑 Une ombre danse, qui en est la source ?",
    type: "logique"
  },
  {
    id: 9,
    title: "Son mystère",
    lat: 42.4879,
    lon: 3.1359,
    question: "Quel instrument joue une mélodie dans l’atelier ?",
    answer: "violon",
    hint: "Un instrument à cordes, souvent nostalgique...",
    intro: "🎵 Une musique résonne entre les murs...",
    type: "culture"
  },
  {
    id: 10,
    title: "Le mot final",
    lat: 42.4880,
    lon: 3.1360,
    question: "Quel mot résume l’ensemble de ton aventure ?",
    answer: "mémoire",
    hint: "Un mot lié au souvenir et au passé...",
    intro: "🏁 Il reste un mot pour refermer le livre du passé...",
    type: "final"
  }
];

const mysteryMission = {
  condition: "chrono < 3600 || bonus_found === true",
  question: "Quel artiste a immortalisé son atelier à Banyuls ?",
  answer: "maillol",
  successTitle: "🏅 Explorateur Artistique FAFA™",
  successMessage: "Tu as libéré l’atelier et retrouvé le pinceau du maître !"
};
