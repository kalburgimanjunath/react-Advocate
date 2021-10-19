import React from 'react';
import './style.css';
import { Header, Footer } from './components/index';
import { Home, Lawyers, Login } from './pages/index';
export default function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
