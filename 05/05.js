
result();

function result() {
	var cost = 0;
	var kkal = 0;
	var menu = document.getElementsByClassName('menu');
	for(var i = 0; i < menu.length; i++) {
		if(menu[i].checked) {
			cost += parseFloat(menu[i].getAttribute('data-cost'));
				kkal += parseFloat(menu[i].getAttribute('data-kkal'));
		};
	};
	document.getElementById('cost').innerHTML = cost;
	document.getElementById('kkal').innerHTML = kkal;
};