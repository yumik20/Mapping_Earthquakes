// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line. (13.4.3)
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red. (13.4.3)
L.polyline(line, {
  color: "yellow"
}).addTo(map);


// Create the map object with a center and zoom level. 
//This method is useful when we need to add multiple tile layers, or a background image of our map(s),
/* let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });
 */
// We create the tile layer that will be the background of our map. (satellite-streets-v11)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


/* //  Add a marker to the map for Los Angeles, California.
L.circle([34.0522, -118.2437],{
  radius: 100,
  //color:"black",
  //fillColor:'#ffffa1'
}).addTo(map);

L.circleMarker([34.0522, -118.2437],{
  radius: 300,
  color:"black",
  fillColor:'#ffffa1'
}).addTo(map); */

// We create the tile layer that will be the background of our map.
let streets1 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}')



// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000})
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
.addTo(map);
});
