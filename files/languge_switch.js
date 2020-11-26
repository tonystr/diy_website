
function renderLanguageSwitch() {
    const languageElm = document.querySelector('.fixed-header .language');

    const selectElm = document.createElement('select');
    selectElm.classList.add('language-select');
    selectElm.innerHTML = `
        <option>English</option>
        <option>Norwegian</option>
    `;

    console.log('hrtef', languageElm.href);

    languageElm.parentElement.classList.add('select-inside');
    languageElm.parentElement.insertBefore(selectElm, languageElm);
    languageElm.parentElement.removeChild(languageElm);
}
