'use strict'
/*
    All scripts are written in ES2020 (latest JavaScript version).
    They will break in some browsers running older implementations
    of ECMAScript, but the user will experience no issues, because
    the website works fine without any of these scripts.
*/

window.addEventListener('load', () => {
    const languageElm = document.querySelector('.fixed-header .language');
    const href = languageElm.href;

    const divElm = document.createElement('div');
    const nor = window.location.href.includes('/no/');

    divElm.innerHTML = `
        <img class="flag" style="border-color:${nor ? '#ebf7fc' : '#5b61ae'}" alt="${nor ? 'Norske flagg' : 'English flag'}" src="${nor ? '.' : ''}./images/flags/flag_${nor ? 'no' : 'en'}.png" height="20">
        <label class="visually-hidden" for="language-select">${nor ? 'Språk: ' : 'Language: '}</label>
        <select class="language-select" id="language-select" aria-label="${nor ? 'Velg språk: ' : 'Select language: '}">
            ${nor ? `
                <option>Norsk</option>
                <option>English</option>
            ` : `
                <option>English</option>
                <option>Norsk</option>
            `}
        </select>
    `;

    divElm.children[2].addEventListener('change', () => {
        window.location.href = href;
    });

    languageElm.parentElement.classList.add('select-inside');
    languageElm.parentElement.insertBefore(divElm, languageElm);
    languageElm.setAttribute('tabindex', '-1   ');
    languageElm.classList.add('visually-hidden');
});
