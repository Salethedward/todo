const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('#list');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = '';

	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
	
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	li.appendChild(checkbox);

	const removeButton = document.createElement('button');
	removeButton.textContent = "Remove";
	li.appendChild(removeButton);

	if (text == '') {
		li.style.display = 'none';

	}
});



ul.addEventListener('change', (e) => {
	const checkbox = e.target;
	const checked = checkbox.checked;
	const list = checkbox.parentNode;
	if (checked) {
		list.className = 'bold';
	} else {
		list.className = '';
	}
});



ul.addEventListener('click', (e) => {
	if(e.target.tagName === "BUTTON") {
		const li = e.target.parentNode;
		const ul = li.parentNode;
		ul.removeChild(li);
	}
});
















