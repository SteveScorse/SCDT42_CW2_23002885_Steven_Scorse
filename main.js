//Google Maps API 
let map;

async function initMap() {
  // Coords of Glowing Grates
  const position = { lat: 51.01569966994804, lng: -3.0926557886122468 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Map position, Zoom Level
  map = new Map(document.getElementById("map"), {
    zoom: 17,
    center: position,
    mapId: "GlowingGratesMAP",
  });

  //Marker positioned at Glowing Grates location
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Glowing Grates",
  });
}

initMap();

 



//Darkmode - Accessiblity Features