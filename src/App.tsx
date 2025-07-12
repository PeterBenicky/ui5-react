import React, { useEffect, useState } from "react";
import {
  ShellBar,
  SideNavigation,
  SideNavigationItem,
  Button,
} from "@ui5/webcomponents-react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Domů</h2>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        alt="Domácí prostředí"
        style={{ marginTop: "1rem", maxWidth: "100%", borderRadius: "8px" }}
      />
      <h2>Domů</h2>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        alt="Domácí prostředí"
        style={{ marginTop: "1rem", maxWidth: "100%", borderRadius: "8px" }}
      />
      <h2>Domů</h2>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        alt="Domácí prostředí"
        style={{ marginTop: "1rem", maxWidth: "100%", borderRadius: "8px" }}
      />
      <h2>Domů</h2>
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        alt="Domácí prostředí"
        style={{ marginTop: "1rem", maxWidth: "100%", borderRadius: "8px" }}
      />
    </div>
  );
}
function Profile() {
  return <h2>Profil</h2>;
}
function Settings() {
  return <h2>Nastavení</h2>;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [searchResult, setSearchResult] = useState<string | null>(null); // State for search result

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onItemSelect = (event: CustomEvent) => {
    const item = event.detail.item;
    const key = item?.getAttribute("data-key");
    if (key) {
      navigate(key);
      setSelectedKey(key);
    }
  };

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Check if the query matches "Nastavenia"
    if (query.toLowerCase() === "nastavenia") {
      setSearchResult("/settings");
    } else {
      setSearchResult(null);
    }
  };

  const handleSearchClick = () => {
    if (searchResult) {
      navigate(searchResult); // Navigate to the matched path
      setSearchQuery(""); // Clear the search input
      setSearchResult(null); // Clear the search result
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <ShellBar
        primaryTitle="Moje Fiori Appka"
        logo={
          <img
            src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg"
            alt="SAP Logo"
            height="30"
          />
        }
        startButton={
          <Button
            icon="menu2"
            onClick={toggleCollapse}
            design="Transparent"
            title={collapsed ? "Rozbaliť menu" : "Zbaliť menu"}
            style={{ marginLeft: 0, paddingLeft: 0 }}
          />
        }
        style={{ paddingLeft: 0, marginLeft: 0 }}
      />
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "4rem", // Adjusted to avoid overlapping the title
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          maxWidth: "50%", // Limit width to prevent overlap
        }}
      >
        <input
          type="text"
          placeholder="Vyhľadávanie..."
          value={searchQuery}
          onChange={handleSearchChange} // Update search query
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            outline: "none",
            width: "100%", // Ensure it fits within the container
          }}
        />
        <Button icon="search" design="Transparent" onClick={handleSearchClick} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "3rem",
          right: "4rem",
          zIndex: 1000,
          display: searchResult ? "block" : "none", // Show only if there's a search result
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "0.5rem",
        }}
      >
        <Button
          design="Transparent"
          onClick={() => {
            navigate(searchResult!); // Navigate to the result
            setSearchQuery(""); // Clear the search input
            setSearchResult(null); // Clear the search result
          }}
        >
          Prejsť na Nastavenia
        </Button>
      </div>
      <div style={{ display: "flex", flexGrow: 1, overflow: "hidden", height: "100%" }}>
        <SideNavigation
          style={{
            width: collapsed ? 64 : 250,
            minWidth: collapsed ? 64 : 250,
            maxWidth: collapsed ? 64 : 250,
            transition: "width 0.3s ease",
            height: "100%",
            overflow: "hidden",
            flexShrink: 0, // nech sa sidebar nezmenší pod šírku
            borderRight: "1px solid #ccc",
          }}
          onSelectionChange={onItemSelect}
        >
          <SideNavigationItem
            icon="home"
            text={!collapsed ? "Domů" : ""}
            data-key="/"
            selected={selectedKey === "/"}
          />
          <SideNavigationItem
            icon="employee"
            text={!collapsed ? "Profil" : ""}
            data-key="/profile"
            selected={selectedKey === "/profile"}
          />
          <SideNavigationItem
            icon="settings"
            text={!collapsed ? "Nastavení" : ""}
            data-key="/settings"
            selected={selectedKey === "/settings"}
          />
        </SideNavigation>

        <main
          style={{
            flexGrow: 1,
            padding: "2rem 2rem 2rem 1rem",
            overflowY: "auto",
            backgroundColor: "#f5f6f7",
            transition: "width 0.3s ease",
            //marginLeft: collapsed ? 64 : 250,
            height: "100%",
            marginLeft: 0, // odstránený marginLeft
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
