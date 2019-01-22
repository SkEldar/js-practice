$(document).ready(function(){
    $.get(
        "http://localhost:5000/books",
        function(data) {
            var obj = Object.values(data[0]);
            console.log(obj);
         for(var i = 1; i < obj.length;i++) {
                var p = document.createElement('p');
                p.innerHTML = obj[i].title;
                document.body.appendChild(p);
                p.innerHTML = obj[i].url;

            // console.log(obj[i].url);
         };

        }
    )
});
var arr = [
    'a','b','c'
];
if(arr == 'a','c') {

};
console.log(arr)