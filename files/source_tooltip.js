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

window.addEventListener('load', () => {
    for (const sup of Array.from(document.querySelectorAll('a.source sup'))) {
        sup.addEventListener('mouseover', e => {
            console.log(e.target.count);
        });
    }
})
