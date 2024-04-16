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
function changeCSS(){
    var theme = document.getElementById('theme');
    var themeName = theme.getAttribute('href');
    
    if (themeName == 'style.css') {
        theme.setAttribute('href', 'dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        theme.setAttribute('href', 'style.css');
        localStorage.setItem('theme', 'light');
    }
}
    
// Check if there is a saved theme in local storage, and if so, apply it
var savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.getElementById('theme').setAttribute('href', 'dark.css');
}