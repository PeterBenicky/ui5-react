import React from 'react';
import { ShellBar, ShellBarItem } from '@ui5/webcomponents-react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function Home() {
  return <h2>Domů</h2>;
}

function Profile() {
  return <h2>Profil</h2>;
}

function Settings() {
  return <h2>Nastavení</h2>;
}

const NavigationShellBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ShellBar
      primaryTitle="Moje Fiori Appka"
      logo={
        <img
          src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
          alt="SAP Logo"
          height="30"
        />
      }
    >
      <ShellBarItem
        icon="home"
        text={location.pathname === '/' ? '🏠 Domů' : 'Domů'}
        onClick={() => navigate('/')}
      />
      <ShellBarItem
        icon="employee"
        text={location.pathname === '/profile' ? '👤 Profil' : 'Profil'}
        onClick={() => navigate('/profile')}
      />
      <ShellBarItem
        icon="settings"
        text={location.pathname === '/settings' ? '⚙️ Nastavení' : 'Nastavení'}
        onClick={() => navigate('/settings')}
      />
    </ShellBar>
  );
};

function App() {
  return (
    <>
      <NavigationShellBar />
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
