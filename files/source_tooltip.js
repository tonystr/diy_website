const SOURCES = [
  '[1] 50% Higher Gas Emissions',
  '[2] Climate Change and Waste',
  '[3] Electronic Waste Survey [ORIGINAL RESEARCH]',
  '[4] Global Warming 101',
  '[5] Unifying GDPR within the EU',
  '[6] The World\'s Worst Electronic Waste Offenders',
  '[7] E-waste and How to Reduce It',
  '[8] How Much Does Human Waste Contribute to Climate Change?',
  '[9] Sources of Greenhouse Gas Emissions',
  '[10] An Overview of Federal Tax Incentives for Green Technology'
];

const AUTHORS = [
  "- United Nations Development Programme",
  "- <abbr title=\"United States of America\">USA</abbr> Environemntal Protection Agency (EPA)",
  "- Bakstad A., Stigen V., and Strømsnæs T.",
  "- Amanda MacMillan",
  "- Council of the European Union",
  "- Niall McCarthy",
  "- Rebecca Adams",
  "- Beth Lebwohl",
  "- United States Environmental Protection Agency",
  "- Michael Haun &amp; Kevin Young, Paul Hastings LLP"
];

window.addEventListener('load', ev => {
    for (const sup of Array.from(document.querySelectorAll('a.source sup'))) {
        let time = 0;
        const number = sup.innerText;
        const span = 800;
        const render = () => {
            const diff = +new Date() - time;
            if (time === 0 || (diff > span + 20 || diff < span - 20)) return;

            const rect = sup.getBoundingClientRect();

            const tooltip = document.createElement('div');
            const index = SOURCES.findIndex(source => source.includes(number));
            tooltip.innerHTML = SOURCES[index].replace(/\[\d+\]\s*/g, '') +
                                `<div class="key-value author">${AUTHORS[index]}<div>`;
            tooltip.setAttribute('id', 'hover-tooltip');
            tooltip.setAttribute('style', `top:${rect.top}px; left: ${rect.left}px`);
            tooltip.setAttribute('aria-hidden', '');

            document.body.appendChild(tooltip);

            const tooltipRect = tooltip.getBoundingClientRect();
            tooltip.setAttribute('style', `top:${rect.top}px; left: ${rect.left + rect.width / 2 - tooltipRect.width / 2}px`);
        }
        const unrender = () => {
            const tooltip = document.getElementById('hover-tooltip');
            if (tooltip) {
                tooltip.parentElement.removeChild(tooltip);
            }
        }
        sup.addEventListener('mouseover', e => {
            time = +new Date();
            setTimeout(render, span);
            console.log(ev.target.clientY);
        });
        sup.addEventListener('mouseleave', e => {
            time = 0;
            const tooltip = document.getElementById('hover-tooltip');
            if (tooltip) {
                tooltip.classList.add('vanish');
                setTimeout(unrender, span);
            }
        });
    }
})
