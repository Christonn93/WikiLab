import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "bulma/css/bulma.min.css";
import { SidebarNavigation } from "../components/sidebar/SidebarNavigation";

export const LayoutComponent: React.FC = () => {
 const [isExpanded, setIsExpanded] = useState(false);
 const [hovered, setHovered] = useState(false);

 const handleMouseEnter = () => {
  setHovered(true);
 };

 const handleMouseLeave = () => {
  setHovered(false);
 };

 const toggleSidebar = () => {
  setIsExpanded(!isExpanded);
 };

 return (
  <div className="layout">
   {/* Header */}
   <header className="header has-background-primary">
    <div className="container">
     <h1 className="title">YourWikiLab</h1>
     <h2 className="subtitle">Create, update, and manage your content in a fully customizable way.</h2>
    </div>
   </header>

   {/* Main Content */}
   <main className="main">
    <div className={`sidebar ${hovered || isExpanded ? "sidebar-expanded" : "sidebar-collapsed"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     <SidebarNavigation toggleSidebar={toggleSidebar} isExpanded={isExpanded} />
    </div>
    <div className="container">
     <Outlet />
    </div>
   </main>

   {/* Footer */}
   <footer className="footer has-background-light">
    <div className="content has-text-centered">
     <p>
      <strong>YourWikiLab</strong> by Open Source Community. Customize your knowledge!
     </p>
    </div>
   </footer>
  </div>
 );
};
