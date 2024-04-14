window.addEventListener('load', cLanguage)
var currentlanguage

const urlParams = new URLSearchParams(window.location.search);
const langValue = urlParams.get('lang');

function newRoute(r) {
    window.location = r + `?lang=${currentlanguage}`;
}

function cLanguage() {
    if (!langValue || langValue == 'es') { //
        // localStorage.setItem('currentlanguage', 'es');
        currentlanguage = 'es';
        document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-es);}</style>');
        addClass('es')
    } else if (langValue == 'en') {
        // localStorage.setItem('currentlanguage', 'en');
        currentlanguage = 'en';
        document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-en);}</style>');
        addClass('en')
    }

}

function addClass(cl) {
    let oldClass = '';
    let newClass = '';
    if (cl == 'es') {
        newClass = '.data-es';
        oldClass = '.data-en';
    }
    if (cl == 'en') {
        newClass = '.data-en';
        oldClass = '.data-es';
    }
    document.querySelector(oldClass).classList.remove('selectlang')
    document.querySelector(newClass).classList.add('selectlang')
}


function changelang() {
    if (currentlanguage == 'en') {
        document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-es);}</style>');
        // localStorage.setItem('currentlanguage', 'es');
        currentlanguage = 'es';
        addClass(currentlanguage);
    } else {
        document.head.insertAdjacentHTML('beforeend', '<style>.bilanguage::after {content: attr(data-en);}</style>');
        // localStorage.setItem('currentlanguage', 'en');
        currentlanguage = 'en';
        addClass(currentlanguage);
    }
}

function goToDetails(r) {
    window.location = r + `?lang=${currentlanguage}`;
}