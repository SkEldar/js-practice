var hello = 0;

function slide() {
var block = document.getElementById('block');
hello = hello - 128;

if(hello < -384) {
	hello = 0;
}

 block.style.left = hello + 'px';
}
function slide2() {
var block2 = document.getElementById('block');
hello = hello - 128;

if(hello < -384) {
	hello = 0;
}

 block2.style.left = hello + 'px';
}

