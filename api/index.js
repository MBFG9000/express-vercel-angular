const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT =  process.env.PORT || 8080;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

let tours = [
  {
    id: 1,
    title: "Travel to Alakol Lake",
    description: "Experience the beauty of Kazakhstan's lakes.",
    photo: "/public/images/alakol-lake.jpg"
  },
  {
    id: 2,
    title: "Discover Charyn",
    description: "Explore the culture and cuisine of Almaty.",
    photo: "/public/images/Charyn.avif"
  },
  {
    id: 3,
    title: "Kaindy Lake",
    description: "Good place to go guys",
    photo: "/public/images/kaindy-lake.jpeg"
  }
];

let tourDetails = [
  {
    id: 1,
    title: "Travel to Alakol Lake",
    location: "East Kazakhstan Region",
    duration: "3 days / 2 nights",
    price: 350,
    description:
      "Enjoy the stunning Alakol Lake, known for its therapeutic waters and beautiful pebble beaches. The tour includes a boat trip, local cuisine tasting, and accommodation near the lake.",
    highlights: [
      "Boat ride on Alakol Lake",
      "Traditional Kazakh dinner",
      "Visit to thermal springs"
    ],
    photoGallery: [
      "/public/images/alakol-lake.jpg",
      "/public/images/alakol-sunset.jpg",
      "/public/images/alakol-boat.jpg"
    ]
  },
  {
    id: 2,
    title: "Discover Charyn Canyon",
    location: "Almaty Region",
    duration: "1 day trip",
    price: 180,
    description:
      "Visit the majestic Charyn Canyon, often called the 'Grand Canyon of Kazakhstan'. You will explore the Valley of Castles and enjoy breathtaking views of red rock formations.",
    highlights: [
      "Walk through Valley of Castles",
      "Local picnic near the canyon",
      "Professional guide included"
    ],
    photoGallery: [
      "/public/images/Charyn.avif",
      "/public/images/charyn-canyon2.jpg",
      "/public/images/charyn-canyon3.jpg"
    ]
  },
  {
    id: 3,
    title: "Kaindy Lake Adventure",
    location: "Kolsai National Park",
    duration: "2 days / 1 night",
    price: 270,
    description:
      "A mysterious lake with submerged trees. Explore Kaindy Lake and nearby Kolsai lakes with professional guides and scenic hiking routes.",
    highlights: [
      "Hike around Kaindy Lake",
      "Overnight in Kolsai village",
      "Horse riding optional"
    ],
    photoGallery: [
      "/public/images/kaindy-lake.jpeg",
      "/public/images/kaindy-forest.jpg",
      "/public/images/kaindy-hike.jpg"
    ]
  }
];

TourCard = [
  { id: 1,  imageUrl: 'https://picsum.photos/800', name: 'Kolsai Lakes Escape', description: 'Journey through crystal mountain lakes surrounded by pine forests and peaks.', price: 890, durationDays: 5, peopleNumber: 12 },
  { id: 2,  imageUrl: 'https://picsum.photos/800', name: 'Charyn Canyon Adventure', description: 'Explore the Valley of Castles and witness red cliffs glowing under the sunrise.', price: 540, durationDays: 3, peopleNumber: 10 },
  { id: 3,  imageUrl: 'https://picsum.photos/800', name: 'Kaindy Lake Expedition', description: 'Dive into turquoise waters where ancient trees rise from the depths.', price: 760, durationDays: 4, peopleNumber: 8 },
  { id: 4,  imageUrl: 'https://picsum.photos/800', name: 'Altyn-Emel Safari', description: 'Ride through desert dunes, spot wild kulans and visit the singing sands.', price: 990, durationDays: 6, peopleNumber: 14 },
  { id: 5,  imageUrl: 'https://picsum.photos/800', name: 'Altai Mountains Trek', description: 'Hike along alpine valleys, see glaciers, and meet local herders.', price: 1250, durationDays: 7, peopleNumber: 10 },
  { id: 6,  imageUrl: 'https://picsum.photos/800', name: 'Big Almaty Lake Getaway', description: 'Enjoy breathtaking views from mountain passes above turquoise waters.', price: 420, durationDays: 2, peopleNumber: 15 },
  { id: 7,  imageUrl: 'https://picsum.photos/800', name: 'Steppe Nomad Experience', description: 'Ride horses across vast steppes and stay overnight in authentic yurts.', price: 1100, durationDays: 6, peopleNumber: 8 },
  { id: 8,  imageUrl: 'https://picsum.photos/800', name: 'Mangystau Desert Trails', description: 'Walk between stone valleys and white cliffs that drop to the Caspian Sea.', price: 1340, durationDays: 8, peopleNumber: 10 },
  { id: 9,  imageUrl: 'https://picsum.photos/800', name: 'Burabay Lake Retreat', description: 'Discover pine-covered hills, blue lakes, and tranquil summer air.', price: 560, durationDays: 3, peopleNumber: 12 },
  { id: 10, imageUrl: 'https://picsum.photos/800', name: 'Turkestan Heritage Tour', description: 'Visit the mausoleum of Khoja Ahmed Yasawi and ancient Silk Road towns.', price: 480, durationDays: 3, peopleNumber: 20 },
  { id: 11, imageUrl: 'https://picsum.photos/800', name: 'Zharkent Cultural Trip', description: 'Explore colorful mosques, markets, and Chinese-influenced architecture.', price: 390, durationDays: 2, peopleNumber: 18 },
  { id: 12, imageUrl: 'https://picsum.photos/800', name: 'Saty Village Homestay', description: 'Live with a local family, hike to waterfalls, and eat homemade Kazakh food.', price: 570, durationDays: 4, peopleNumber: 6 },
  { id: 13, imageUrl: 'https://picsum.photos/800', name: 'Ile-Alatau Trek', description: 'Climb trails above Almaty with views of glaciers and flower meadows.', price: 680, durationDays: 4, peopleNumber: 10 },
  { id: 14, imageUrl: 'https://picsum.photos/800', name: 'Aksu-Zhabagly Reserve', description: 'Kazakhstan’s first nature reserve filled with tulips and mountain streams.', price: 950, durationDays: 5, peopleNumber: 8 },
  { id: 15, imageUrl: 'https://picsum.photos/800', name: 'Karkaraly National Park', description: 'Wander pine forests, ancient rocks, and hidden mountain lakes.', price: 620, durationDays: 4, peopleNumber: 10 },
  { id: 16, imageUrl: 'https://picsum.photos/800', name: 'Bozzhyra Canyon Safari', description: 'Marvel at surreal white cliffs in the Mangystau plateau.', price: 1400, durationDays: 7, peopleNumber: 12 },
  { id: 17, imageUrl: 'https://picsum.photos/800', name: 'Ustyurt Plateau Discovery', description: 'Experience the silent immensity of Kazakhstan’s vast desert plains.', price: 1250, durationDays: 6, peopleNumber: 9 },
  { id: 18, imageUrl: 'https://picsum.photos/800', name: 'Bayanaul Lakes Tour', description: 'A blend of pine forests, blue lakes, and granite mountains.', price: 700, durationDays: 4, peopleNumber: 10 },
  { id: 19, imageUrl: 'https://picsum.photos/800', name: 'Aktau Coastal Trip', description: 'Swim in the Caspian, visit chalk cliffs, and relax by the shore.', price: 850, durationDays: 5, peopleNumber: 14 },
  { id: 20, imageUrl: 'https://picsum.photos/800', name: 'Taraz Ancient Cities', description: 'Walk through medieval ruins and markets of the Great Silk Road.', price: 640, durationDays: 4, peopleNumber: 16 },
  { id: 21, imageUrl: 'https://picsum.photos/800', name: 'Zailiysky Alatau Trails', description: 'Mountain hiking trip among wildflowers and streams.', price: 780, durationDays: 5, peopleNumber: 10 },
  { id: 22, imageUrl: 'https://picsum.photos/800', name: 'Shymbulak Snow Escape', description: 'Ski or snowboard in the Tien Shan mountains above Almaty.', price: 950, durationDays: 3, peopleNumber: 12 },
  { id: 23, imageUrl: 'https://picsum.photos/800', name: 'Katon-Karagay Reserve', description: 'A remote paradise of forests, lakes, and alpine pastures.', price: 1600, durationDays: 9, peopleNumber: 8 },
  { id: 24, imageUrl: 'https://picsum.photos/800', name: 'Saur Mountains Trek', description: 'Explore wild eastern Kazakhstan with rare flora and fauna.', price: 1550, durationDays: 8, peopleNumber: 10 },
  { id: 25, imageUrl: 'https://picsum.photos/800', name: 'Turgai Steppe Expedition', description: 'Discover ancient geoglyphs and endless steppe horizons.', price: 980, durationDays: 5, peopleNumber: 8 },
  { id: 26, imageUrl: 'https://picsum.photos/800', name: 'Semey Literary Route', description: 'Visit the birthplace of Abay and the museums of great poets.', price: 400, durationDays: 2, peopleNumber: 20 },
  { id: 27, imageUrl: 'https://picsum.photos/800', name: 'Karaganda Mining Tour', description: 'Explore industrial history and underground museum shafts.', price: 520, durationDays: 3, peopleNumber: 15 },
  { id: 28, imageUrl: 'https://picsum.photos/800', name: 'Balkhash Lake Adventure', description: 'Sail half-salty, half-fresh lake with beaches and islands.', price: 720, durationDays: 4, peopleNumber: 10 },
  { id: 29, imageUrl: 'https://picsum.photos/800', name: 'Atyrau Delta Cruise', description: 'Boat trip through the Ural River delta into the Caspian.', price: 1150, durationDays: 6, peopleNumber: 10 },
  { id: 30, imageUrl: 'https://picsum.photos/800', name: 'Korgalzhyn Bird Safari', description: 'Observe flamingos and wildlife in the vast wetlands of Central Kazakhstan.', price: 890, durationDays: 5, peopleNumber: 12 }
];


app.get('/api/tour2', (req, res) => {
  res.json(TourCard);
});

app.get('/api/tours', (req, res) => {
  res.json(tours);
});

TourCard2 = [
  {
    category: 'Mountain escape',
    title: 'Almaty Peaks & Canyons',
    description:
      'Ride the cable cars, hike alpine trails, and explore the striking Charyn Canyon in one trip.',
    duration: 3,
    price: 'from 120 000 ₸',
    image: 'https://picsum.photos/id/1018/800/600',
    cta: 'View Tour'
  },
  {
    category: 'Desert wonders',
    title: 'Altyn-Emel Singing Dune',
    description:
      'Witness the famous resonating dune, painted mountains, and nomadic heritage in the national park.',
    duration: 2,
    price: 'from 98 000 ₸',
    image: 'https://picsum.photos/id/1021/800/600',
    cta: 'View Tour'
  },
  {
    category: 'City & nature',
    title: 'Astana Skyline & Burabay Lakes',
    description:
      'A contrast of futuristic architecture, pine forests, and serene lakes perfect for relaxed travelers.',
    duration: 4,
    price: 'from 145 000 ₸',
    image: 'https://picsum.photos/id/1036/800/600',
    cta: 'View Tour'
  },
  {
    category: 'Expedition',
    title: 'Mangystau White Canyons',
    description:
      'Traverse the otherworldly cliffs of Boszhyra, underground mosques, and Caspian Sea viewpoints.',
    duration: 6,
    price: 'from 310 000 ₸',
    image: 'https://picsum.photos/id/1043/800/600',
    cta: 'View Tour'
  }
];

// app.get('/api/tours3', (req, res) => {
//   res.json(TourCard2);
// });

app.get('/api/tours3', (req, res) => {
  const search = (req.query.name || '').toLowerCase();

  if (!search) {
    // если параметр не передан — вернуть весь список
    return res.json(TourCard2);
  }

  const filtered = TourCard2.filter(tour =>
    tour.title.toLowerCase().includes(search)
  );

  res.json(filtered);
});



app.get('/api/tours/:id', (req, res) => {
  const tourId = parseInt(req.params.id);
  const tour = tourDetails.find((t) => t.id === tourId);

  if (!tour) {
    return res.status(404).json({ message: 'Tour not found' });
  }

  res.json(tour);
});


app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('New contact request:', { name, email, message });

  // здесь можно, например, отправить письмо или записать в базу
  res.status(200).json({ success: true, message: 'Form received successfully' });
});

app.listen(PORT, ()=>{
  `Server started at port ${PORT}`;

});