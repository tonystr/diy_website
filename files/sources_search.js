'use strict'
/*
    All scripts are written in ES2020 (latest JavaScript version).
    They will break in some browsers running older implementations
    of ECMAScript, but the user will experience no issues, because
    the website works fine without any of these scripts.
*/

const NOR = window.location.href.includes('/no/');

function performSearch(e) {
    const noResultsElm = document.getElementById('no-results');

    const query = e.target.value.trim().toLowerCase();
    let anyVisible = false;

    for (let elm of document.querySelectorAll('#source-list .source')) {
        const visible = elm.querySelector('h2').innerText.toLowerCase().includes(query);
        elm.setAttribute('class', `source ${visible ? '' : 'hidden'}`);
        anyVisible |= visible;
    }

    if (!anyVisible) {
        noResultsElm.classList.remove('hidden');
        noResultsElm.innerHTML = `
            <h2>${NOR ? 'Ingen resultater' : 'No results found'}</h2>
        `;
    } else {
        noResultsElm.classList.add('hidden');
        noResultsElm.innerHTML = '';
    }
}

window.addEventListener('load', () => {
    document.getElementById('search').innerHTML = `
        <label class="visually-hidden" for="source-search">Search sources:</label>
        <div class="search-bg">
            <input oninput="performSearch(event)" type="search" placeholder="${NOR ? 'Søk i kilder' : 'Search sources'}" id="source-search" aria-label="${NOR ? 'Søk i kilder' : 'Search through sources'}"></input>
            <button tabindex="-1">
                <span class="button-label visually-hidden">${NOR ? 'Søk' : 'Search'}:</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="search-icon"><path fill-rule="nonzero" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
            </button>
        </div>
    `;
});
