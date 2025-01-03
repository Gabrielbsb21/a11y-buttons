export class A11yButtons {
  private constrastEnabled = false;

  toggleContrast() {
    this.constrastEnabled = !this.constrastEnabled;
    document.body.classList.toggle('high-contrast', this.constrastEnabled);
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
