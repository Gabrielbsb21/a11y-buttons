export class A11yButtons {
  private contrastEnabled = false;

  toggleContrast() {
    this.contrastEnabled = !this.contrastEnabled;
    document.body.classList.toggle('high-contrast', this.contrastEnabled);
  }

  increaseFontSize(): void {
    const currentFontSize = parseFloat(
      getComputedStyle(document.body).fontSize.replace('px', '')
    );
    document.body.style.fontSize = `${currentFontSize + 2}px`;
  }

  decreaseFontSize(): void {
    const currentFontSize = parseFloat(
      getComputedStyle(document.body).fontSize.replace('px', '')
    );
    document.body.style.fontSize = `${Math.max(currentFontSize - 2, 12)}px`;
  }
}
