document.addEventListener('DOMContentLoaded', function() {
	var favicon = getFavicon();
	var node = document.createElement('div');
	var child = document.createElement('div');

	node.id = 'overlay';

	if (favicon) {
		child.style.backgroundImage = 'url(' + favicon + ')';
		node.appendChild(child);
	}

	document.body.appendChild(node);
});

var getFavicon = function() {
	var nodes = document.getElementsByTagName('link');

	for (var i = 0; i < nodes.length; i++) {
		var rel = nodes[i].getAttribute('rel');

		if (rel == 'apple-touch-icon-precomposed' || rel == 'apple-touch-icon' || rel =='icon' || rel == 'shortcut icon') {
			return nodes[i].getAttribute('href');
		}
	}
};

window.addEventListener("orientationchange", function() {
	var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
	var node = document.getElementById('overlay');

	if (orientation && orientation.type === 'portrait-secondary') {
		node.classList = 'on';
	} else {
		node.classList = '';
	}
});