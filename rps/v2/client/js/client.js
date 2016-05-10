'use strict';

let sock = io();
let form = document.getElementById('chat-form');

sock.on('msg', onMessage);

function onMessage(text) {
	let list = document.getElementById('chat');
	let el = document.createElement('li');
	el.innerHTML = text;
	list.appendChild(el);

	// Scroll to view
	list.scrollTop = list.scrollHeight;
}

form.addEventListener('submit', function (e) {
	var input = document.getElementById('chat-input');
	var value = input.value;
	input.value = '';
	sock.emit('msg', value);
	e.preventDefault();
});

function addTurnListener(id) {
	var button = document.getElementById(id);
	button.addEventListener('click', () => sock.emit('turn', id));
}

['rock', 'paper', 'scissors'].forEach(addTurnListener);