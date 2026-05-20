# SuiteSpot

A full-stack property listing web application where users can create, browse, edit, and review accommodation listings with interactive maps and image uploads.

## Features

- User authentication (register, login, logout)
- Create, read, update, delete property listings
- Image upload via Cloudinary
- Geolocation and interactive maps via MapTiler
- Review system with author attribution
- Session-based auth with Passport.js
- Flash notifications
- Server-side validation with Joi

## Tech Stack

- **Runtime:** Node.js v21.7.1
- **Framework:** Express.js
- **Database:** MongoDB (MongoDB Atlas) + Mongoose
- **Templating:** EJS + ejs-mate
- **Auth:** Passport.js + passport-local + passport-local-mongoose
- **File Upload:** Multer + multer-storage-cloudinary
- **Maps:** MapTiler Client
- **Session Store:** connect-mongo
- **Validation:** Joi

## Prerequisites

- Node.js v21.7.1+
- MongoDB Atlas account
- Cloudinary account
- MapTiler account

## Setup

1. Clone the repo

```bash
git clone https://github.com/saurav-jorwal/suite-spot.git
cd SuiteSpot
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory with the following:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_maptiler_api_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

4. (Optional) Seed the database

```bash
node init/index.js
```

5. Start the server

```bash
node app.js
```

App runs at `http://localhost:8080`

## Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB Atlas connection string |
| `SECRET` | Session & cookie encryption secret |
| `MAP_TOKEN` | MapTiler API key |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

## Project Structure

```
SuiteSpot/
├── app.js              # Entry point
├── cloudConfig.js      # Cloudinary config
├── middleware.js        # Custom middleware
├── controllers/        # Route logic
├── models/             # Mongoose schemas
├── routes/             # Express routers
├── views/              # EJS templates
├── public/             # Static assets
└── init/               # DB seed data
```

## License

ISC
