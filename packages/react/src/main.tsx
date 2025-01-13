import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContrastButton } from './ContrastButton';
import { IncreaseFontButton } from './IncreaseFontButton';
import { DecreaseFontButton } from './DecreaseFontButton';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <div style={{ display: 'flex', gap: '10px' }}>
      <ContrastButton text="Modo Contraste" />
      <IncreaseFontButton text="Aumentar Fonte" />
      <DecreaseFontButton text="Diminuir Fonte" />
      <p>teste</p>
    </div>
  </React.StrictMode>
);
