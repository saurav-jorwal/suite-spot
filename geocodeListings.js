require('dotenv').config();
const mongoose = require('mongoose');
const maptilerClient = require('@maptiler/client');
const Listing = require('./models/listing');

maptilerClient.config.apiKey = process.env.MAP_TOKEN;

async function main() {
    await mongoose.connect(process.env.ATLASDB_URL);
    console.log("Connected to DB");

    const listings = await Listing.find({
    $or: [
        { geometry: { $exists: false } },
        { geometry: null }
    ]
    });
    console.log(`Found ${listings.length} listings without geometry`);

    for (let listing of listings) {
        try {
            const query = `${listing.location}, ${listing.country}`;
            const geoData = await maptilerClient.geocoding.forward(query, { limit: 1 });
            if (geoData.features.length > 0) {
                listing.geometry = geoData.features[0].geometry;
                await listing.save();
                console.log(`Updated: ${listing.title} → ${listing.location}`);
            } else {
                console.log(`No results for: ${listing.title}`);
            }
        } catch (err) {
            console.log(`Error for ${listing.title}: ${err.message}`);
        }
    }

    console.log("Done!");
    mongoose.connection.close();
}

main();
