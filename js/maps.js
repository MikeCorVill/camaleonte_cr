function initMap() {
  var mapOptions = {
    center: { lat:10.117967, lng: -84.235558 },
    zoom: 8
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(10.117967, -84.235558),
    map: map
  });

  function actualizarPosicion(posicion) {
    var latitud = posicion.coords.latitude;
    var longitud = posicion.coords.longitude;
    var nuevaPosicion = new google.maps.LatLng(latitud, longitud);
    marker.setPosition(nuevaPosicion);
    map.setCenter(nuevaPosicion);
  }

  navigator.geolocation.watchPosition(actualizarPosicion, null, {enableHighAccuracy:true, maximumAge:30000, timeout:27000});
}