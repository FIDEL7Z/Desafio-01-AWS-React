function goBack() {
    const previousPage = document.referrer;  

    if (previousPage.includes('register.html')) {
        window.location.href = './../pages/login.html';  
    } else {
        window.history.back();  
    }
}
