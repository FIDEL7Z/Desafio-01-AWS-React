function outraPagina() {
    if (window.location.pathname !== "/Desafios/Desafio-01-semana-04/pages/onboarding.html") {
        window.location.href = "/Desafios/Desafio-01-semana-04/pages/onboarding.html";
    }
}

window.onload = function() {
    setTimeout(outraPagina, 4000);
};
