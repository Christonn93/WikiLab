import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "../sidebar/SidebarNavigation";
import { useState } from "react";

export const Main = () => {
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
  <main className="main">
   <div className={`sidebar ${hovered || isExpanded ? "sidebar-expanded" : "sidebar-collapsed"}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <SidebarNavigation toggleSidebar={toggleSidebar} isExpanded={isExpanded} />
   </div>
   <div className="container">
    <Outlet />
   </div>
  </main>
 );
};
