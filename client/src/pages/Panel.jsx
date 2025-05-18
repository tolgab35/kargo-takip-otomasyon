import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Profil from "./PanelSections/Profil";
import GonderiOlustur from "./PanelSections/GonderiOlustur";
import GonderiListesi from "./PanelSections/GonderiListesi";
import "../styles/Panel.css";

const Panel = () => {
  const [active, setActive] = useState("profil");

  const renderContent = () => {
    switch (active) {
      case "profil":
        return <Profil />;
      case "olustur":
        return <GonderiOlustur />;
      case "liste":
        return <GonderiListesi />;
      default:
        return <Profil />;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar active={active} setActive={setActive} />
      <div className="panel-content">{renderContent()}</div>
    </div>
  );
};

export default Panel;
