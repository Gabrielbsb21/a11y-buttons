export class A11yButtons {
  private contrastEnabled = false;

  constructor() {
    document.addEventListener('DOMContentLoaded', () => this.restoreSettings());
  }

  toggleContrast() {
    this.contrastEnabled = !this.contrastEnabled;
    document.body.classList.toggle('high-contrast', this.contrastEnabled);
    localStorage.setItem('contrastEnabled', JSON.stringify(this.contrastEnabled));
  }

  increaseFontSize(): void {
    const currentFontSize = parseFloat(
      getComputedStyle(document.body).fontSize.replace('px', '')
    );
    const newSize = currentFontSize + 2;
    document.body.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize',`${newSize}`);
  }

  decreaseFontSize(): void {
    const currentFontSize = parseFloat(
      getComputedStyle(document.body).fontSize.replace('px', '')
    );
    const newSize = Math.max(currentFontSize - 2, 12);
    document.body.style.fontSize = `${newSize}px`;
    localStorage.setItem('fontSize',`${newSize}`);
  }

  private restoreSettings() {
    const savedContrast = localStorage.getItem('contrastEnabled');
    if(savedContrast) {
      this.contrastEnabled =JSON.parse(savedContrast);
      document.body.classList.toggle('high-contrast', this.contrastEnabled);
    }

    const savedFontSize = localStorage.getItem('fontSize');
    if(savedFontSize) {
      document.body.style.fontSize = `${savedFontSize}px`;
    }
  }
}
