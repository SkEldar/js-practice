function user_bar (time) {
    var start = 0;
    var bar = document.getElementById('bar');
    var time = Math.round(time*1000/100);
    var clear = setInterval(function() {
        if(start > 100) {
            clearInterval(clear);
            user();
        } else {
            bar.value = start;
            start++;
        }
    },time);
    function user() {
        document.querySelector('.block').style.display = 'block';
    };
};
user_bar(5);