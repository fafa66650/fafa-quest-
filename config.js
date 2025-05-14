
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
  },
  {
    id: 3,
    title: "Plaque commémorative",
    lat: 42.4840,
    lon: 3.1271,
    question: "En quelle année est né Aristide Maillol ?",
    answer: "1861",
    hint: "Regarde bien la date gravée."
  },
  {
    id: 4,
    title: "Ancienne maison de Maillol",
    lat: 42.4843,
    lon: 3.1273,
    question: "Quel objet est sculpté sur la façade ?",
    answer: "vase",
    hint: "Regarde au-dessus de la porte."
  },
  {
    id: 5,
    title: "Jardin de sculptures",
    lat: 42.4846,
    lon: 3.1276,
    question: "Combien de sculptures vois-tu ici ?",
    answer: "4",
    hint: "Fais-en le tour pour bien compter."
  },
  {
    id: 6,
    title: "Affiche du musée",
    lat: 42.4842,
    lon: 3.1274,
    question: "Quel est le nom de son œuvre la plus connue ?",
    answer: "méditerranée",
    hint: "Cherche une silhouette allongée."
  },
  {
    id: 7,
    title: "Banc face à la mer",
    lat: 42.4848,
    lon: 3.1280,
    question: "Quel élément inspire souvent Maillol dans ses œuvres ?",
    answer: "femme",
    hint: "Observe ses statues."
  },
  {
    id: 8,
    title: "Atelier (affiche extérieure)",
    lat: 42.4839,
    lon: 3.1272,
    question: "Où a-t-il étudié les beaux-arts ?",
    answer: "paris",
    hint: "Une grande capitale européenne."
  },
  {
    id: 9,
    title: "Dalle commémorative",
    lat: 42.4838,
    lon: 3.1270,
    question: "Quel mot est gravé deux fois ?",
    answer: "sculpteur",
    hint: "Lis attentivement le texte."
  },
  {
    id: 10,
    title: "Vitrine souvenir",
    lat: 42.4836,
    lon: 3.1277,
    question: "Quel objet est vendu en hommage à Maillol ?",
    answer: "médaille",
    hint: "Regarde près de la caisse."
  }
];

const mysteryMission = {
  condition: "chrono < 2700 || bonus_found === true",
  question: "Maillol a créé une sculpture offerte à un grand musée national français. Lequel ?",
  answer: "louvre",
  successTitle: "🎖️ Apprenti Sculpteur FAFA",
  successMessage: "Mission secrète accomplie ! Vous avez débloqué le secret de Maillol."
};
