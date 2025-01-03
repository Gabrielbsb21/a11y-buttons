import { A11yButtons } from "./buttons";

const a11y = new A11yButtons();

document.getElementById('contrast-btn')?.addEventListener('click', () => {a11y.toggleContrast()});
document.getElementById('font-increase-btn')?.addEventListener('click', () => {a11y.increaseFontSize()});
document.getElementById('font-decrease-btn')?.addEventListener('click', () => {a11y.decreaseFontSize()});
