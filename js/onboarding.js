let indiceAtual = 0;
const slides = document.querySelectorAll('.slide');
const proximoBtn = document.getElementById('proximo');
const voltarBtn = document.getElementById('voltar');
const dots = document.querySelectorAll('.dot');

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    
    voltarBtn.style.display = index === 0 ? 'none' : 'flex';

   
    if (index === slides.length - 1) {
        proximoBtn.textContent = 'Get Started';
    } else {
        proximoBtn.textContent = 'Next';
    }
}

proximoBtn.addEventListener('click', () => {
    if (indiceAtual === slides.length - 1) {
       
        window.location.href = 'login.html'; 
    } else {
        indiceAtual++;
        if (indiceAtual >= slides.length) {
            indiceAtual = 0;
        }
        mostrarSlide(indiceAtual);
    }
});

voltarBtn.addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = slides.length - 1;
    }
    mostrarSlide(indiceAtual);
});

mostrarSlide(indiceAtual);


