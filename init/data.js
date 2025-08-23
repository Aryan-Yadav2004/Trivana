const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the trees in this unique treehouse retreat. A magical experience for nature lovers.",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City View",
    description:
      "Indulge in luxury living with panoramic views of the city skyline from this stunning penthouse.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
   {
    title: "Charming Studio Near Eiffel Tower",
    description:
      "Stay in this cozy studio just steps away from the iconic Eiffel Tower. Perfect for a romantic getaway.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXMlMjBob3RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Paris",
    country: "France",
  },
  {
    title: "Rustic Farmhouse in Countryside",
    description:
      "Experience the charm of rural life in this rustic farmhouse surrounded by rolling hills and farmland.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y291bnRyeXNpZGUlMjBob3RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Provence",
    country: "France",
  },
  {
    title: "Ski Chalet with Mountain View",
    description:
      "Hit the slopes and return to a warm, cozy chalet with breathtaking mountain views.",
    image: "https://images.unsplash.com/photo-1501117716987-c8bd6f3fca67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWluJTIwaG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Desert Oasis Resort",
    description:
      "Relax in luxury in this desert resort featuring pools, spas, and endless sunshine.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzZXJ0JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Phoenix",
    country: "United States",
  },
  {
    title: "Lakeside Cabin Escape",
    description:
      "Enjoy fishing, boating, and peaceful evenings by the lake in this cozy cabin.",
    image: "https://images.unsplash.com/photo-1505692794403-35d53f1a24c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFrZXNpZGUlMjBob3RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Japanese Ryokan Experience",
    description:
      "Immerse yourself in Japanese culture with a stay at this traditional ryokan, complete with hot springs.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW4lMjBob3RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Beach Bungalow in Bali",
    description:
      "Wake up to the sound of the waves in this beautiful beachfront bungalow.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaSUyMGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Arctic Igloo Adventure",
    description:
      "Sleep under the Northern Lights in a cozy glass igloo in the Arctic Circle.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWdsb29zJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Safari Lodge in Serengeti",
    description:
      "Witness the Great Migration from the comfort of a luxury safari lodge.",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FmYXJpJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
  },
  {
    title: "Countryside Cottage in Ireland",
    description:
      "Relax in this quaint cottage surrounded by lush green fields and rolling hills.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXJlbGFuZCUyMGNvdHRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Galway",
    country: "Ireland",
  },
  {
    title: "Overwater Bungalow in Maldives",
    description:
      "Enjoy turquoise waters and coral reefs from your private overwater bungalow.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXMlMjBvdmVyd2F0ZXIlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Malé",
    country: "Maldives",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in a beautifully preserved medieval castle with modern comforts.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FzdGxlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Edinburgh",
    country: "Scotland",
  },
  {
    title: "Modern Loft in New York",
    description:
      "Stay in the heart of Manhattan in this stylish and modern loft apartment.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9yayUyMGxvZnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "New York",
    country: "United States",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Reconnect with nature in this magical treehouse hidden in the forest.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlZWhvdXNlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Vineyard Villa in Tuscany",
    description:
      "Sip wine while overlooking rolling vineyards from this luxurious villa.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVzY2FueSUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Ice Hotel Experience",
    description:
      "Spend a night in a hotel built entirely of ice and snow, with thermal sleeping bags provided.",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2400,
    location: "Jukkasjärvi",
    country: "Sweden",
  },
  {
    title: "Luxury Apartment in Dubai Marina",
    description:
      "Enjoy panoramic views of the Marina skyline from this high-rise apartment.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVibGFpJTIwYXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3100,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Cave House in Cappadocia",
    description:
      "Stay in a unique cave dwelling with stunning views of Cappadocia’s rock formations.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcGFkb2NpYSUyMGNhdmUlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Göreme",
    country: "Turkey",
  },
  {
    title: "Ryokan Stay in Kyoto",
    description:
      "Experience traditional Japanese hospitality in a serene ryokan with hot springs.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnlva2FuJTIwa3lvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Beach Hut in Philippines",
    description:
      "Simple and charming beach hut just steps away from crystal-clear waters.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbGlwcGluZXMlMjBiZWFjaCUyMGh1dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Palawan",
    country: "Philippines",
  },
  {
    title: "Mountain Retreat in Colorado",
    description:
      "Unplug and recharge in this secluded cabin with breathtaking mountain views.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sb3JhZG8lMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Floating House in Amsterdam",
    description:
      "Stay in a charming houseboat and experience the unique lifestyle of Amsterdam’s canals.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1zdGVyZGFtJTIwaG91c2Vib2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Desert Camp in Morocco",
    description:
      "Spend the night under the stars in a luxury tent in the Sahara Desert.",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9yb2NjbyUyMGRlc2VydCUyMHRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Merzouga",
    country: "Morocco",
  },
  {
    title: "Countryside Barn Stay",
    description:
      "Charming renovated barn surrounded by rolling fields, perfect for a peaceful escape.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFybmglMjBob3RlbHxlbnwwfHwwfHx8MA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Cotswolds",
    country: "England",
  }
];
export default {data: sampleListings};
