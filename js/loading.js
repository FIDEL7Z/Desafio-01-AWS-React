function outraPagina() {
    if (window.location.pathname !== "/pages/onboarding.html") {
        window.location.href = "/pages/onboarding.html";
    }
}

window.onload = function() {
    setTimeout(outraPagina, 4000);
};
