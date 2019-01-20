$(document).ready(function(){
    $.get(
        "http://localhost:5000/books",
        function(data) {
            console.log(data);
            // console.log(data.obj2);
            // console.log(data.obj3);
            // var name1 = document.getElementById('name1');
            // var name2 = document.getElementById('name2');
            // var name3 = document.getElementById('name3');

            // var tags1 = document.getElementById('tags1');
            // var tags2 = document.getElementById('tags2');
            // var tags3 = document.getElementById('tags3');

            // var url1 = document.getElementById('url1');
            // var url2 = document.getElementById('url2');

            // name1.innerHTML = data.obj1.title;
            // name2.innerHTML = data.obj2.title;
            // name3.innerHTML = data.obj3.title;

            // tags1.innerHTML = data.obj1.tags;
            // tags2.innerHTML = data.obj2.tags;
            // tags3.innerHTML = data.obj3.tags;

            // url1.innerHTML = data.obj1.url;
            // url2.innerHTML = data.obj2.url;
        }
    );
});