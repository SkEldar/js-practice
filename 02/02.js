document.querySelector('#block').onmousemove = function(event) {
const offx = document.getElementById('offx');
const offy = document.getElementById('offy');
        offx.innerHTML = event.offsetX;
        offy.innerHTML = event.offsetY;
};