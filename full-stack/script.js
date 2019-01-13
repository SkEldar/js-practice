$(document).ready(function(){
    $.get(
        "http://localhost:5000/",
        function(data) {
            console.log(data);
        }
    );
});