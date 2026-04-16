// // Using MapTiler SDK instead of Mapbox
// maptilersdk.config.apiKey = mapToken;

// const map = new maptilersdk.Map({
//     container: "map",
//     style: maptilersdk.MapStyle.STREETS,
//     center: listing.geometry.coordinates,
//     zoom: 9
// });

// new maptilersdk.Marker({ color: "red" })
//     .setLngLat(listing.geometry.coordinates)
//     .setPopup(
//         new maptilersdk.Popup({ offset: 25 }).setHTML(
//             `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
//         )
//     )
//     .addTo(map);

if (!listing.geometry || !listing.geometry.coordinates || listing.geometry.coordinates.length < 2) {
    document.getElementById("map").innerHTML = "<p>Map not available</p>";
} else {
    maptilersdk.config.apiKey = mapToken;
    const map = new maptilersdk.Map({
        container: "map",
        style: maptilersdk.MapStyle.STREETS,
        center: listing.geometry.coordinates,
        zoom: 9
    });
    new maptilersdk.Marker({ color: "red" })
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new maptilersdk.Popup({ offset: 25 }).setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`))
        .addTo(map);
}