import React from 'react';
import { A11yManager } from '@a11y-buttons/core';
import '@a11y-buttons/core/src/styles/contrast.css';

interface IncreaseFontButtonProps {
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

const a11yManager = new A11yManager();

export const IncreaseFontButton: React.FC<IncreaseFontButtonProps> = ({
  text = 'Aumentar Fonte',
  style,
  className
}) => {
  return (
    <button
      onClick={() => a11yManager.increaseFontSize()}
      style={style}
      className={className}
    >
      {text}
    </button>
  );
};
