export type EventStatus = "published" | "draft"

export type EventItem = {
  id: number
  title: string
  description: string
  /** Première date de l'événement (ISO local, sans fuseau) */
  date: string
  extraDates: number
  venue: string
  extraVenues: number
  file: string
  status: EventStatus
  genre: string
  image: string
}

const img = (name: string) => `/images/events/${name}.jpg`

/** Les 6 premiers événements reprennent exactement la maquette. */
const baseEvents: Omit<EventItem, "id">[] = [
  {
    title: "Live in Park — The Echoes",
    description:
      "Concert exclusif en plein air. Une nuit de musique électro-pop et d’énergie avec accès VIP et backstage.",
    date: "2027-06-18T20:00",
    extraDates: 4,
    venue: "Arena Stadium",
    extraVenues: 2,
    file: "Fiches-technique.pdf",
    status: "published",
    genre: "Concert-VIP",
    image: img("concert"),
  },
  {
    title: "Tournée Acoustique",
    description:
      "Série de concerts intimistes piano-voix revisitée dans des salles historiques.",
    date: "2027-06-18T20:00",
    extraDates: 4,
    venue: "Théâtre municipal",
    extraVenues: 2,
    file: "Fiches-technique.pdf",
    status: "draft",
    genre: "Concert-VIP",
    image: img("acoustic"),
  },
  {
    title: "Design & Tech Summit",
    description:
      "Conférences, ateliers pratiques UX/UI et networking autour des nouvelles interfaces numériques.",
    date: "2027-06-18T20:00",
    extraDates: 4,
    venue: "Arena Stadium",
    extraVenues: 2,
    file: "Fiches-technique.pdf",
    status: "draft",
    genre: "Concert-VIP",
    image: img("tech"),
  },
  {
    title: "Lumières & Algorithmes",
    description:
      "Parcours immersif mêlant projections interactives et sculptures sonores contemporaines.",
    date: "2027-06-18T20:00",
    extraDates: 4,
    venue: "Arena Stadium",
    extraVenues: 2,
    file: "Fiches-technique.pdf",
    status: "published",
    genre: "Concert-VIP",
    image: img("bidoko"),
  },
  {
    title: "Festival Street-Food",
    description:
      "Week-end gastronomique réunissant 30 chefs locaux, DJ sets et animations familiales.",
    date: "2027-06-18T20:00",
    extraDates: 4,
    venue: "Arena Stadium",
    extraVenues: 2,
    file: "Fiches-technique.pdf",
    status: "published",
    genre: "Concert-VIP",
    image: img("street-food"),
  },
  {
    title: "Last Rite — Soirée Spéciale",
    description:
      "Événement nocturne à thème. Dress code exigé pour une immersion totale toute la nuit.",
    date: "2027-06-18T20:00",
    extraDates: 4,
    venue: "Arena Stadium",
    extraVenues: 2,
    file: "Fiches-technique.pdf",
    status: "published",
    genre: "Concert-VIP",
    image: img("last-rite"),
  },
]

const images = ["concert", "acoustic", "tech", "bidoko", "street-food", "last-rite"]

type Extra = [
  title: string,
  description: string,
  genre: string,
  venue: string,
  date: string,
  status: EventStatus,
  extraDates: number,
  extraVenues: number,
]

/** Données supplémentaires pour tester filtres et pagination. */
const extras: Extra[] = [
  ["Nuit Électro — Mahamasina", "Dix heures de sets électro avec les meilleurs DJ de l’océan Indien.", "Concert-VIP", "Palais des Sports de Mahamasina", "2027-07-02T21:00", "published", 2, 1],
  ["Jazz sous les Étoiles", "Quartet de jazz et cocktails au coucher du soleil sur la terrasse panoramique.", "Concert", "Hôtel Carlton Anosy", "2027-07-09T19:30", "published", 3, 0],
  ["Forum de l’Entrepreneuriat", "Panels, pitchs de startups et rencontres avec des investisseurs de la région.", "Conférence", "CCI Ivato", "2027-07-15T09:00", "published", 1, 0],
  ["Salon de l’Artisanat Malagasy", "Exposition-vente de créateurs : raphia, soie sauvage, bois précieux et bijoux.", "Exposition", "Alliance Française Analakely", "2027-07-22T10:00", "published", 5, 1],
  ["Hira Gasy — Grand Kabary", "Spectacle traditionnel de troupes venues des hautes terres, chants et danses.", "Spectacle", "Théâtre municipal", "2027-07-28T15:00", "draft", 2, 0],
  ["Hackathon Tiko", "48 heures pour concevoir des services numériques autour de la billetterie.", "Conférence", "Coliseum Antsonjombe", "2027-08-05T08:30", "published", 0, 0],
  ["Stand-up Comedy Night", "Six humoristes, un plateau, deux heures de rires garantis.", "Spectacle", "Théâtre municipal", "2027-08-06T20:30", "published", 6, 2],
  ["Festival Vako-Drazana", "Trois jours de musiques traditionnelles revisitées sur scène ouverte.", "Festival", "Coliseum Antsonjombe", "2027-08-13T14:00", "draft", 2, 1],
  ["Soirée Gala Fondation Aina", "Dîner de bienfaisance, vente aux enchères et concert privé.", "Soirée", "Hôtel Carlton Anosy", "2027-08-20T19:00", "published", 0, 0],
  ["Marathon des Hautes Terres", "Parcours de 42 km, semi-marathon et course familiale de 5 km.", "Sport", "Place de l’Indépendance", "2027-08-29T06:00", "published", 0, 3],
  ["Masterclass Photographie", "Atelier de deux jours avec des photographes primés : lumière, portrait, édition.", "Atelier", "Alliance Française Analakely", "2027-09-03T09:30", "draft", 3, 0],
  ["Concert Gospel Harmonie", "Chorale de 120 voix et orchestre pour une soirée de louange.", "Concert", "Palais des Sports de Mahamasina", "2027-09-10T18:00", "published", 1, 0],
  ["Ciné Plein Air", "Projection de courts-métrages africains en plein air, pique-nique encouragé.", "Cinéma", "Jardin d’Andohalo", "2027-09-17T19:30", "published", 4, 1],
  ["Tech & Santé Summit", "Innovations numériques en santé : télémédecine, IA et données de terrain.", "Conférence", "CCI Ivato", "2027-09-24T09:00", "draft", 1, 0],
  ["Battle de Danse Urbaine", "Compétition de breakdance, hip-hop et afro-dance avec jury international.", "Spectacle", "Arena Stadium", "2027-10-01T17:00", "published", 2, 0],
  ["Festival du Livre d’Antananarivo", "Dédicaces, tables rondes et lectures publiques avec auteurs invités.", "Festival", "Alliance Française Analakely", "2027-10-08T10:00", "published", 4, 0],
  ["Soirée Retro 80’s", "Plongée dans les années 80 : playlist culte, costumes et concours de danse.", "Soirée", "Arena Stadium", "2027-10-15T21:00", "published", 3, 2],
  ["Rencontres Théâtrales", "Cinq pièces contemporaines en compétition, débats après chaque représentation.", "Spectacle", "Théâtre municipal", "2027-10-22T19:00", "draft", 5, 0],
  ["Expo Photo « Visages de l’Île »", "Portraits grand format de la vie quotidienne, de Nosy Be à Tuléar.", "Exposition", "Alliance Française Analakely", "2027-10-29T10:00", "published", 12, 0],
  ["Afro-Fusion Live", "Groupe de huit musiciens mêlant salegy, afrobeat et jazz.", "Concert-VIP", "Coliseum Antsonjombe", "2027-11-05T20:00", "published", 2, 1],
  ["Salon de l’Emploi & Formation", "Plus de 80 entreprises et écoles réunies, entretiens express sur place.", "Conférence", "CCI Ivato", "2027-11-12T09:00", "published", 1, 0],
  ["Nuit Blanche des Arts", "Parcours nocturne d’installations, performances et concerts gratuits.", "Festival", "Jardin d’Andohalo", "2027-11-19T18:00", "draft", 0, 4],
  ["Tournoi eSport Océan Indien", "Qualifications régionales sur trois jeux, finale en direct devant le public.", "Sport", "Palais des Sports de Mahamasina", "2027-11-26T10:00", "published", 2, 0],
  ["Brunch Musical du Dimanche", "Buffet gourmand, DJ lounge et animations pour toute la famille.", "Soirée", "Hôtel Carlton Anosy", "2027-12-05T11:00", "published", 8, 0],
  ["Concert de Noël — Orchestre National", "Programme de fêtes avec chœur d’enfants et solistes invités.", "Concert", "Théâtre municipal", "2027-12-18T18:30", "published", 3, 0],
  ["Réveillon Grand Gala", "Dîner, spectacle et feux d’artifice pour passer en 2028 en beauté.", "Soirée", "Arena Stadium", "2027-12-31T20:00", "draft", 0, 1],
  ["Festival Zanatany", "Cinq jours de concerts, cuisine locale et artisanat à ciel ouvert.", "Festival", "Place de l’Indépendance", "2028-01-14T12:00", "published", 4, 2],
  ["Conférence IA & Société", "Experts et chercheurs débattent des usages de l’intelligence artificielle.", "Conférence", "Coliseum Antsonjombe", "2028-01-28T09:30", "published", 1, 0],
  ["Carnaval des Couleurs", "Défilé de chars, fanfares et costumes dans les rues du centre-ville.", "Festival", "Place de l’Indépendance", "2028-02-12T14:00", "draft", 2, 3],
  ["Soirée Slam & Poésie", "Scène ouverte et finale du championnat national de slam.", "Spectacle", "Théâtre municipal", "2028-02-19T20:00", "published", 3, 0],
  ["Stage Danse Contemporaine", "Cinq jours de formation intensive avec compagnie invitée et restitution publique.", "Atelier", "Alliance Française Analakely", "2028-03-04T09:00", "draft", 4, 0],
  ["Festival Reggae Mada", "Têtes d’affiche régionales, village des saveurs et scène découverte.", "Festival", "Arena Stadium", "2028-03-18T15:00", "published", 2, 1],
]

export const events: EventItem[] = [
  ...baseEvents,
  ...extras.map(
    ([title, description, genre, venue, date, status, extraDates, extraVenues], i) => ({
      title,
      description,
      genre,
      venue,
      date,
      status,
      extraDates,
      extraVenues,
      file: "Fiches-technique.pdf",
      image: img(images[(i + 2) % images.length]),
    })
  ),
].map((e, i) => ({ ...e, id: i + 1 }))

const MONTHS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
]

/** "2027-06-18T20:00" → "18 Juin 2027 ( 20:00)" */
export function formatEventDate(iso: string) {
  const [d, t] = iso.split("T")
  const [y, m, day] = d.split("-").map(Number)
  return `${day} ${MONTHS[m - 1]} ${y} ( ${t} )`.replace(" )", ")")
}
