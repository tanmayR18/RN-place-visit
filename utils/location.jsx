const GOOGLE_MAP_API_KEY = "";

export function getMapPreview(lat, lng) {
    console.log('lat, lng to preview', lat, lng)
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_MAP_API_KEY}`;
  return imagePreviewUrl;
}

// const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
// &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
// &markers=color:red%7Clabel:C%7C40.718217,-73.998284
// &key=${GOOGLE_MAP_API_KEY}&signature=YOUR_SIGNATURE`;
