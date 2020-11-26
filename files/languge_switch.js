
function renderLanguageSwitch() {
    const languageElm = document.querySelector('.fixed-header .language');
    const href = languageElm.href;

    const selectElm = document.createElement('select');
    selectElm.classList.add('language-select');
    selectElm.innerHTML = window.location.href.includes('/no/') ? `
        <option>Norsk</option>
        <option>English</option>
    ` : `
        <option>English</option>
        <option>Norsk</option>
    `;

    selectElm.addEventListener('change', () => {
        window.location.href = href;
    });

    languageElm.parentElement.classList.add('select-inside');
    languageElm.parentElement.insertBefore(selectElm, languageElm);
    languageElm.parentElement.removeChild(languageElm);
}
