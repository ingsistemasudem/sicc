/**
 * Created by David on 27/02/2017.
 */

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWR0YW1heW8iLCJhIjoiY2l6b3dvdWJrMDA1MzMzcGp2eXByemdwcCJ9.ksu2XjJKOOkPqR2vpjR8BA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
    center: [-75.60986553102961,6.2317473899890246], // starting position
    zoom: 15 // starting zoom
});

var marker = new mapboxgl.Marker().setLngLat([-75.60986553102961,6.2317473899890246]).addTo(map);
