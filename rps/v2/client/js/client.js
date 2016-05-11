'use strict';

let sock = io();

sock.on('msg', onMessage);

function onMessage(text) {
    let list = document.getElementById('chat');
    let el = document.createElement('li');
    el.innerHTML = text;
    list.appendChild(el);
    list.scrollTop = list.scrollHeight;
}

let form = document.getElementById('chat-form');
form.addEventListener('submit', function(e) {
    let input = document.getElementById('chat-input');
    let value = input.value;
    input.value = '';
    sock.emit('msg', value);
    e.preventDefault();
});

function addTurnListener(id) {
    let button = document.getElementById(id);
    button.addEventListener('click', () => {
        sock.emit('turn', id);
    });
}

['rock', 'paper', 'scissors'].forEach(addTurnListener);