
const NOR = window.location.href.includes('/no/');

function renderVoiceover() {
    for (const audioElm of Array.from(document.getElementsByClassName('voiceover'))) {
        audioElm.classList.add('visually-hidden');
        const buttonElm = document.createElement('button');
        buttonElm.classList.add('voiceover-button');
        buttonElm.innerHTML = `
            <span class="visually-hidden">${NOR ? 'Les høyt' : 'Play voiceover'}</span>
            <img src="./images/audio.png" alt="Sound icon">
        `;
        buttonElm.addEventListener('click', () => {
            buttonElm.classList.add('visually-hidden');
            audioElm.classList.remove('visually-hidden');
            audioElm.play();
        })
        audioElm.parentNode.insertBefore(buttonElm, audioElm);
    }
}
