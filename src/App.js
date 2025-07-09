import React, { useState } from "react";

// UI5 assets
import "@ui5/webcomponents/dist/Assets";
import "@ui5/webcomponents-icons/dist/AllIcons";
import "@ui5/webcomponents-fiori/dist/Assets";
import "@ui5/webcomponents-theming/dist/Assets";

// UI5 table (iba Table.js, ostatné sú súčasťou)
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";

// React UI5 komponenty
import {
  ShellBar,
  ShellBarItem,
  Card,
  CardHeader,
  Text,
  Button,
} from "@ui5/webcomponents-react";

function App() {
  const [rows, setRows] = useState([
    { name: "Jan Novák", email: "jan.novak@example.com" },
    { name: "Eva Horáková", email: "eva.horakova@example.com" },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { name: "Nový Uživatel", email: "novy.uzivatel@example.com" },
    ]);
  };

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
      >
        <ShellBarItem icon="add" text="Přidat" />
        <ShellBarItem icon="settings" text="Nastavení" />
      </ShellBar>

      <div style={{ padding: "2rem" }}>
        <Card
          header={<CardHeader titleText="Zákazník" subtitleText="Informace" />}
        >
          <Text style={{ padding: "1rem" }}>
            Toto je jednoduchá karta s použitím SAP Fiori komponent v Reacte.
          </Text>
        </Card>

        <div style={{ marginTop: "2rem" }}>
          <Button icon="add" design="Emphasized" onClick={addRow}>
            Přidat řádek
          </Button>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <ui5-table no-data-text="Žádná data" show-no-data style={{ width: "100%" }}>
            <ui5-table-column slot="columns">Jméno</ui5-table-column>
            <ui5-table-column slot="columns">Email</ui5-table-column>

            {rows.map((row, index) => (
              <ui5-table-row key={index}>
                <ui5-table-cell>{row.name}</ui5-table-cell>
                <ui5-table-cell>{row.email}</ui5-table-cell>
              </ui5-table-row>
            ))}
          </ui5-table>
        </div>
      </div>
    </>
  );
}

export default App;
