# Trivana 🏠

A full-stack Airbnb-inspired travel accommodation platform built with Node.js, Express, MongoDB, and EJS. Users can browse listings, create their own properties, leave reviews, and explore destinations with an integrated map feature.

## ✨ Features

- **User Authentication**: Secure signup/login with Passport.js
- **Listing Management**: Create, read, update, and delete property listings
- **Image Upload**: Upload property images via Cloudinary
- **Review System**: Rate and review properties with a 5-star rating system
- **Category Filtering**: Filter listings by categories (Rooms, Mountains, Castles, etc.)
- **Interactive Maps**: View property locations with Google Maps integration
- **Search Functionality**: Search for destinations
- **Responsive Design**: Mobile-friendly interface with Bootstrap
- **Authorization**: Only listing owners can edit/delete their properties
- **Session Management**: Secure session handling with express-session and MongoDB store

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **Passport.js** - Authentication middleware
- **Passport-Local-Mongoose** - Simplified username/password authentication
- **Cloudinary** - Image storage and management
- **Multer** - File upload handling

### Frontend
- **EJS** - Templating engine
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icons
- **Google Maps API** - Location mapping

### Security & Validation
- **Joi** - Data validation
- **express-session** - Session management
- **connect-mongo** - MongoDB session store
- **connect-flash** - Flash messages
- **Method-Override** - HTTP method support

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- Cloudinary account
- Google Maps API key

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/trivana.git
cd trivana
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret_key
STORE_SECRET=your_mongo_store_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
GOOGLE_MAP_API_KEY=your_google_maps_api_key
```

### 4. Initialize the Database (Optional)

To populate the database with sample listings:

```bash
node init/index.js
```

**Note**: Update the `owner` field in `init/index.js` with a valid user ID from your database.

## 🏃‍♂️ Running the Application

### Start the Server
```bash
node app.js
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
trivana/
├── controllers/
│   ├── listings.js       # Listing CRUD operations
│   ├── reviews.js        # Review operations
│   └── user.js           # User authentication
├── models/
│   ├── listing.js        # Listing schema
│   ├── review.js         # Review schema
│   └── user.js           # User schema
├── routes/
│   ├── listing.js        # Listing routes
│   ├── review.js         # Review routes
│   └── user.js           # User routes
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   ├── listings/
│   │   ├── index.ejs     # All listings
│   │   ├── new.ejs       # Create listing
│   │   ├── show.ejs      # Listing details
│   │   └── edit.ejs      # Edit listing
│   └── users/
│       ├── signup.ejs
│       └── login.ejs
├── public/
│   ├── css/
│   │   ├── style.css
│   │   └── rating.css
│   └── js/
│       ├── script.js
│       └── map.js
├── utils/
│   ├── ExpressError.js   # Error handling
│   └── wrapAsync.js      # Async error wrapper
├── init/
│   ├── data.js           # Sample data
│   └── index.js          # DB initialization
├── cloudConfig.js        # Cloudinary configuration
├── middleware.js         # Custom middleware
├── schema.js             # Joi validation schemas
└── app.js                # Main application file
```

## 🎯 Key Features Explained

### 1. Authentication & Authorization
- User registration and login using Passport.js
- Session-based authentication
- Authorization checks for editing/deleting listings and reviews
- Protected routes with middleware

### 2. Listing Management
- Create new property listings with images
- Edit existing listings (owners only)
- Delete listings (owners only)
- Category-based filtering (trending, rooms, mountains, castles, etc.)
- Tax toggle for price display

### 3. Review System
- 5-star rating system with visual stars
- Comment functionality
- Review deletion (author only)
- Associated with user accounts

### 4. Image Upload
- Cloudinary integration for image storage
- Multer for handling multipart form data
- Image optimization and transformation

### 5. Location Features
- Google Maps integration
- Geocoding for location display
- Interactive map on listing detail pages

## 🌐 Routes

### User Routes
- `GET /signup` - Display signup form
- `POST /signup` - Register new user
- `GET /login` - Display login form
- `POST /login` - Authenticate user
- `GET /logout` - Logout user

### Listing Routes
- `GET /listings` - View all listings
- `GET /listings/new` - Show create listing form (protected)
- `POST /listings` - Create new listing (protected)
- `GET /listings/:id` - View listing details
- `GET /listings/:id/edit` - Show edit form (owner only)
- `PUT /listings/:id` - Update listing (owner only)
- `DELETE /listings/:id` - Delete listing (owner only)
- `GET /listings/search` - Search listings

### Review Routes
- `POST /listings/:id/reviews` - Create review (protected)
- `DELETE /listings/:id/reviews/:reviewId` - Delete review (author only)

## 🔒 Security Features

- Password hashing with passport-local-mongoose
- Session encryption
- Input validation with Joi
- CSRF protection considerations
- Authorization middleware
- Secure session storage in MongoDB

## 🎨 Categories

The platform supports the following listing categories:
- 🔥 Trending
- 🛏️ Rooms
- 🏙️ Iconic Cities
- ⛰️ Mountains
- 🏰 Castles
- 🏊 Amazing Pools
- ⛺ Camping
- 🐄 Farms
- ❄️ Arctic
- 🛖 Domes
- 🚢 Boats

## 💡 Usage Tips

1. **Sign Up**: Create an account to start listing properties
2. **Browse Listings**: Explore available properties on the home page
3. **Filter by Category**: Use category filters to find specific types of properties
4. **Create Listing**: Click "Trivana your home" to add a new property
5. **Leave Reviews**: Share your experience by rating and reviewing properties
6. **Manage Your Listings**: Edit or delete your own property listings
7. **Search**: Use the search bar to find destinations

## 🐛 Known Issues & Future Improvements

- Implement booking system
- Add payment integration
- Enhance search with more filters (price range, amenities, etc.)
- Add user profile pages
- Implement favorites/wishlist feature
- Add email verification
- Implement forgot password functionality
- Add more comprehensive admin panel

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Your Name - [Aryan Yadav](https://github.com/Aryan-Yadav2004)

## 🙏 Acknowledgments

- Inspired by Airbnb
- Bootstrap for the responsive design
- Cloudinary for image management
- Google Maps API for location services
- Passport.js for authentication
- MongoDB for flexible data storage

## 📧 Contact

For any queries or suggestions:
- Email: your.email@example.com
- Project Link: [Trivana](https://github.com/Aryan-Yadav2004/Trivana)

---

Made with ❤️ using Node.js, Express & MongoDB
