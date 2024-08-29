const noButton1 = document.getElementById('no-button-1');
const yesButton1 = document.getElementById('yes-button-1');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');

noButton1.addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - noButton1.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton1.clientHeight);
    
    noButton1.style.position = 'absolute';
    noButton1.style.left = `${x}px`;
    noButton1.style.top = `${y}px`;
});

yesButton1.addEventListener('click', function() {
    card1.style.display = 'none';
    card2.style.display = 'block';
});

const noButton2 = document.getElementById('no-button-2');
const yesButton2 = document.getElementById('yes-button-2');

noButton2.addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - noButton2.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton2.clientHeight);
    
    noButton2.style.position = 'absolute';
    noButton2.style.left = `${x}px`;
    noButton2.style.top = `${y}px`;
});

yesButton2.addEventListener('click', function() {
    const img = document.createElement('img');
    img.src = 'img/img_four.jpg';  // Reemplaza con la URL de la imagen que deseas mostrar.
    img.style.maxWidth = '50%';
    img.style.borderRadius = '10px';

    card2.innerHTML = '';  // Limpiar el contenido de la tarjeta.
    card2.appendChild(img);  // Mostrar la imagen.
});
