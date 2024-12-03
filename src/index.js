import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Dashboard } from './Dashboard';
import i18n from '../i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <Dashboard />
    </I18nextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);