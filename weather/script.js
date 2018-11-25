
var check = document.getElementById('check');

$(document).ready(function() {
  $.get(
    " https://fcc-weather-api.glitch.me/api/current?lat=51.1605&lon=71.4704",
    function(data) {
      console.log(JSON.stringify(data));
  check.innerHTML = data.main.temp;
    }
  );
});
var check = document.getElementById('check');

