// Όταν φορτώνει η σελίδα, ελέγχει αν υπάρχει αποθηκευμένη επιλογή γλώσσας
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('appLang') || 'lang-en';
    document.body.className = savedLang;
});

function toggleLanguage() {
    const body = document.body;
    if (body.classList.contains('lang-en')) {
        body.className = 'lang-el';
        localStorage.setItem('appLang', 'lang-el'); // Αποθήκευση επιλογής
    } else {
        body.className = 'lang-en';
        localStorage.setItem('appLang', 'lang-en'); // Αποθήκευση επιλογής
    }
}

function copyWiFi() {
    const password = "ΚΩΔΙΚΟΣ_WIFI_ΕΔΩ";
    navigator.clipboard.writeText(password).then(() => {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }).catch(err => {
        alert('Oops, something went wrong copying the password.');
    });
}