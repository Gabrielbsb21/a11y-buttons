import { describe, it, expect } from 'vitest';
import { A11yButtons } from '../buttons';

describe('A11yButtons', () => {
  it('shoud toggle contrast', () => {
    const a11y = new A11yButtons();
    a11y.toggleContrast();
    expect(document.body.classList.contains('high-contrast')).toBe(true);
    a11y.toggleContrast();
    expect(document.body.classList.contains('high-contrast')).toBe(false);
  })

  it('shoud increase font size', () => {
    const a11y = new A11yButtons();
    a11y.increaseFontSize();
    document.body.style.fontSize = '16px';
  })
})
