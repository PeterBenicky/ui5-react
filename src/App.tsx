import React from 'react';
import { ShellBar } from '@ui5/webcomponents-react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css'; // Pridáme vlastné štýly

function Home() {
  return <h2>Domů</h2>;
}

function Profile() {
  return <h2>Profil</h2>;
}

function Settings() {
  return <h2>Nastavení</h2>;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ShellBar
        primaryTitle="Moje Fiori Appka"
        logo={
          <img
            src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
            alt="SAP Logo"
            height="30"
          />
        }
      />

      {/* Navigačný panel s linkami */}
      <nav className="nav-bar">
        <Link
          to="/"
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
        >
          Domů
        </Link>
        <Link
          to="/profile"
          className={location.pathname === '/profile' ? 'nav-link active' : 'nav-link'}
        >
          Profil
        </Link>
        <Link
          to="/settings"
          className={location.pathname === '/settings' ? 'nav-link active' : 'nav-link'}
        >
          Nastavení
        </Link>
      </nav>

      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
