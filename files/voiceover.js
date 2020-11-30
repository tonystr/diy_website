'use strict'
/*
    All scripts are written in ES2020 (latest JavaScript version).
    They will break in some browsers running older implementations
    of ECMAScript, but the user will experience no issues, because
    the website works fine without any of these scripts.
*/

const NOR = window.location.href.includes('/no/');

window.addEventListener('load', () => {
    for (const audioElm of Array.from(document.getElementsByClassName('voiceover'))) {
        audioElm.classList.add('visually-hidden');
        const buttonElm = document.createElement('button');
        buttonElm.classList.add('voiceover-button');
        buttonElm.innerHTML = `
            <span class="visually-hidden">${NOR ? 'Les høyt' : 'Play voiceover'}</span>
            <img src="${NOR ? '.' : ''}./images/audio.png" alt="Sound icon">
        `;
        buttonElm.setAttribute('title', NOR ? 'Les høyt' : 'Play voiceover');
        buttonElm.setAttribute('aria-label', NOR ? 'Les høyt' : 'Play voiceover');
        buttonElm.addEventListener('click', () => {
            buttonElm.classList.add('visually-hidden');
            audioElm.classList.remove('visually-hidden');
            audioElm.play();
        })
        audioElm.parentNode.insertBefore(buttonElm, audioElm);
    }
});
