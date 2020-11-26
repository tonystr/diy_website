
function renderLanguageSwitch() {
    const languageElm = document.querySelector('.fixed-header .language');
    const href = languageElm.href;

    const divElm = document.createElement('div');
    const nor = window.location.href.includes('/no/');

    divElm.innerHTML = `
        <label class="visually-hidden" for="language-select">${nor ? 'Språk: ' : 'Language: '}</label>
        <select class="language-select" id="language-select">
            ${nor ? `
                <option>Norsk</option>
                <option>English</option>
            ` : `
                <option>English</option>
                <option>Norsk</option>
            `}
        </select>
    `;

    divElm.children[1].addEventListener('change', () => {
        window.location.href = href;
    });

    // <label class="visually-hidden" for="source-search">Search sources:</label>


    languageElm.parentElement.classList.add('select-inside');
    languageElm.parentElement.insertBefore(divElm, languageElm);
    languageElm.parentElement.removeChild(languageElm);
}
