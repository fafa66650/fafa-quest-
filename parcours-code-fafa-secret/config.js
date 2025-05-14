
const adminCode = "FAFA2025";
const riddles = [
  {
    id: 1,
    title: "Inscription codée",
    lat: 42.4861,
    lon: 3.1361,
    question: "Sur un mur, trois lettres sont gravées dans la pierre. Quelles sont-elles ?",
    answer: "f.a.f",
    hint: "Elles apparaissent en haut d’un mur à l’ombre.",
    intro: "🔐 Une inscription ancienne marque le début de cette quête secrète.",
    type: "observation"
  },
  {
    id: 2,
    title: "Chiffres masqués",
    lat: 42.4862,
    lon: 3.1362,
    question: "Trouve la plaque où se cache un nombre gravé dans le métal. Lequel ?",
    answer: "1923",
    hint: "Sous une vieille grille en fer forgé.",
    intro: "🕵️‍♂️ Les chiffres du passé t’attendent, masqués dans le décor.",
    type: "exploration"
  },
  {
    id: 3,
    title: "Code couleur",
    lat: 42.4863,
    lon: 3.1363,
    question: "Complète ce code couleur : Bleu, Rouge, Jaune, ... ?",
    answer: "vert",
    hint: "Mélange entre jaune et bleu.",
    intro: "🎨 Une séquence chromatique te met sur la piste.",
    type: "choix"
  },
  {
    id: 4,
    title: "Crypte du nom",
    lat: 42.4864,
    lon: 3.1364,
    question: "Quel nom est inscrit sous l'escalier menant à la crypte ?",
    answer: "martin",
    hint: "Regarde sous les marches.",
    intro: "🔤 Un nom oublié refait surface.",
    type: "question"
  },
  {
    id: 5,
    title: "Message inversé",
    lat: 42.4865,
    lon: 3.1365,
    question: "Lis à l’envers : 'TERCES' = ?",
    answer: "secret",
    hint: "Retourne le mot...",
    intro: "🧠 Ton esprit doit faire une pirouette mentale.",
    type: "réflexion"
  },
  {
    id: 6,
    title: "Photo du symbole",
    lat: 42.4866,
    lon: 3.1366,
    question: "Photographie un symbole mystérieux dans le parc.",
    answer: "photo",
    hint: "Il peut être rond, géométrique ou religieux.",
    intro: "📷 Cherche une trace laissée par les Anciens.",
    type: "photo"
  },
  {
    id: 7,
    title: "Coordonnées codées",
    lat: 42.4867,
    lon: 3.1367,
    question: "Déchiffre : N 42°29.2, E 003°07.8. À quoi ça correspond ?",
    answer: "place",
    hint: "Tu y es peut-être déjà...",
    intro: "🗺️ Un message GPS t’attire vers l’épicentre du mystère.",
    type: "gps"
  },
  {
    id: 8,
    title: "Anagramme FAFA",
    lat: 42.4868,
    lon: 3.1368,
    question: "Réorganise : 'F.A.F.A'",
    answer: "affa",
    hint: "C’est aussi un nom de code...",
    intro: "🔤 Le mot FAFA cache un autre mot...",
    type: "anagramme"
  },
  {
    id: 9,
    title: "Objet oublié",
    lat: 42.4869,
    lon: 3.1369,
    question: "Quel objet abandonné est posé sur la pierre près du figuier ?",
    answer: "clé",
    hint: "Petit, métallique, il ouvre des portes...",
    intro: "🗝️ Une clé qui ne cherche qu’à être trouvée.",
    type: "objet"
  },
  {
    id: 10,
    title: "Mot de passe final",
    lat: 42.4870,
    lon: 3.1370,
    question: "Quel mot résume cette mission secrète ?",
    answer: "code",
    hint: "Il est au cœur du jeu.",
    intro: "🔓 Tu es à un mot de débloquer le secret ultime.",
    type: "final"
  }
];

const mysteryMission = {
  condition: "chrono < 3600 || bonus_found === true",
  question: "Quel animal figure sur le blason caché derrière la fontaine ?",
  answer: "loup",
  successTitle: "🏅 Décrypteur FAFA™",
  successMessage: "Mission secrète accomplie. Tu as percé le Code FAFA !"
};
