'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const ul = GI.createElement('ul');

to_do.forEach((item) => {
    const li = GI.createElement('li');

    const checkbox = GI.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', (event) => {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
            li.style.color = 'gray';
        } else {
            li.style.textDecoration = 'none';
            li.style.color = 'inherit';
        }
    });

    const text = document.createTextNode(item);
    li.appendChild(checkbox);
    li.appendChild(text);
    ul.appendChild(li);
});

document.body.appendChild(ul);
