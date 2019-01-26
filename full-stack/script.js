$(document).ready(function(){
    $.get(
        "http://localhost:5000/books",
        function(data) {
            var allObj = Object.values(data[0]);
            console.log(allObj);
         for(var i = 0; i < allObj.length;i++) {
                if(allObj[i].title) {
                    var p = document.createElement('p');
                p.innerHTML = allObj[i].title;
                document.body.appendChild(p);
                };
                if(allObj[i].url) {
                    var p = document.createElement('p');
                    p.innerHTML = allObj[i].url;
                    document.body.appendChild(p);
                };
                if(allObj[i].tags) {
                    var p = document.createElement('p');
                        p.innerHTML = allObj[i].tags;
                        document.body.appendChild(p);
                        console.log(allObj[i].tags);
                };
         };

        }
    )
});