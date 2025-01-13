import React from 'react';
import { A11yManager } from '@a11y-buttons/core';
import '@a11y-buttons/core/src/styles/contrast.css';

interface DecreaseFontButtonProps {
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

const a11yManager = new A11yManager();

export const DecreaseFontButton: React.FC<DecreaseFontButtonProps> = ({
  text = 'Diminuir Fonte',
  style,
  className
}) => {
  return (
    <button
      onClick={() => a11yManager.decreaseFontSize()}
      style={style}
      className={className}
    >
      {text}
    </button>
  );
};
