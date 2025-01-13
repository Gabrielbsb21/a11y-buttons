export class A11yManager {
  private contrastEnabled = false;

  toggleContrast() {
    this.contrastEnabled = !this.contrastEnabled;
    document.body.classList.toggle('high-contrast', this.contrastEnabled);
    localStorage.setItem('contrastEnabled', JSON.stringify(this.contrastEnabled));
  }

  increaseFontSize() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    const newSize = currentSize + 2;
    document.body.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', `${newSize}`);
  }

  decreaseFontSize() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    const newSize = Math.max(currentSize -2, 12);
    document.body.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize', `${newSize}`);
  }
}
