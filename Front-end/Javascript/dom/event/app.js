const appear_heading_1 = document.querySelector('#add');
const delete_heading_1 = document.querySelector('#delete');

const container = document.querySelector('#container');
const frame = document.createElement('div');

const heading_1 = document.createElement('h1');
heading_1.innerText = 'You clicked this button';

appear_heading_1.onclick = function ()
{
    container.appendChild(frame);
    frame.appendChild(heading_1);
}

delete_heading_1.onclick = function ()
{
    heading_1.remove();
    frame.remove();
}

const eventbtn = document.querySelector('#eventclick');

function stepsatu()
{
    alert('clicked 1x');
}

eventbtn.addEventListener('click', stepsatu);

// Randomize Color
const generateRandomColor = () =>
{
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;

    return `RGB(${r},${g},${b})`;
}



const randomize_colorbtn = document.querySelector('#color_rand');
const label_randomize_color = document.querySelector('#label_color_rand');

randomize_colorbtn.addEventListener('click', () =>
{
    const new_color = generateRandomColor();
    document.body.style.backgroundColor = (new_color);
    label_randomize_color.innerText = (new_color);
})

// Keyword This
const rand_colorize_buttons = document.querySelectorAll('.sqr-btn');

function colorize()
{
    this.style.backgroundColor = generateRandomColor();
    this.style.color = generateRandomColor();
}

for (let rand_colorize_button of rand_colorize_buttons)
{
    rand_colorize_button.addEventListener('click', colorize);
}

// Object event
document.querySelector('#obj-event').addEventListener('click', (e) => {
	console.log(e);
});

const input = document.querySelector('#input-obj');
input.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
			console.log('Tombol Arah Atas');
			break;
		case 'ArrowDown':
			console.log('Tombol Arah Bawah');
			break;
		case 'ArrowLeft':
			console.log('Tombol Arah Kiri');
			break;
		case 'ArrowRight':
			console.log('Tombol Arah Kanan');
			break;
		default:
			console.log('diabaikan');
	}
});

// input.addEventListener('keyup', () => {
// 	console.log('Tombol dirilis');
// });

// Event Prevent
const form = document.querySelector('#form-section');
const input_form = document.querySelector('#input-form');
const delete_form = document.querySelector('#delete-form');
const list = document.querySelector('#notes');
const preview_text = document.querySelector('#preview-text');

input_form.addEventListener('change', (e) =>
{
    console.log('input tidak jadi dikirim');
})

input_form.addEventListener('input', (e) =>
{
    preview_text.innerText = input_form.value;
})

delete_form.addEventListener('click', function(e)
{
    list.innerHTML = ''; 
    
})

const form_submited = document.createElement('h3');
form_submited.innerText = 'Form Submitted';

form.addEventListener('submit', function (e)
{
    e.preventDefault();
    const newList = document.createElement('li');
    const noteVal = input_form.value;
    newList.innerText = noteVal;
    console.log(newList);

    list.insertAdjacentElement("afterbegin", newList);
    list.appendChild(form_submited);
    input_form.value = '';
    preview_text.innerText = '';
})

list.addEventListener('click', (e) =>
{
    e.target.nodeName === 'LI' && e.target.remove();
})