$(document).ready(function(){
    $.get(
        "http://localhost:5000/books",
        function(data) {
            var obj = Object.values(data[0]);
            console.log(obj);
         for(var i = 1; i < obj.length;i++) {
                var p = document.createElement('p');
                p.innerHTML = obj[i].title;
                document.body.appendChild(p)
         };
        //  for(var x = 1; x < obj.length;x++) {
        //     var z = document.createElement('p');
        //     // z.innerHTML = obj[i].tags[i];
        //     // document.body.appendChild(z);
        }
    )
});
