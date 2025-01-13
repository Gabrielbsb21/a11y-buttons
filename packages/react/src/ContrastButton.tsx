import React from 'react';
import {A11yManager} from '@a11y-buttons/core';
import '@a11y-buttons/core/src/styles/contrast.css';

interface ContrastButtonProps {
  text?: string;
  style?: React.CSSProperties;
  className?: string;
}

const a11yManager = new A11yManager();

export const ContrastButton: React.FC<ContrastButtonProps> = ({
  text = 'Alto Contraste',
  style,
  className,
}) => {
  return (
    <button onClick={() => a11yManager.toggleContrast()} style={style} className={className}>
      {text}
    </button>
  )
}
