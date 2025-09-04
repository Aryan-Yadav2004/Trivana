// Initialize and add the map
let map;
let geocoder;
async function initMap() {
  // The location of Uluru
  const position = { lat: 28.6139, lng: 77.2088 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': window.userData}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
          marker = new AdvancedMarkerElement({
          map: map,
          position: results[0].geometry.location,
          title: window.userData,
      });
    }
  });  
  console.log("data",window.userData);
  geocoder = new google.maps.Geocoder();
}
initMap();