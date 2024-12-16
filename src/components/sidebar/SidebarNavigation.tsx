import React from "react";
import { Home, FilePlus, FolderCog, Settings, ChevronLeft, ChevronRight } from "lucide-react";

// Define props type
interface SidebarNavigationProps {
 toggleSidebar: () => void; // Function to toggle the sidebar state
 isExpanded: boolean; // Boolean to track if the sidebar is expanded
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ toggleSidebar, isExpanded }) => {
 return (
  <aside>
   <div className="sidebar-header">
    <button className="button is-small is-light" onClick={toggleSidebar}>
     {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
   </div>
   <nav className="sidebar-menu">
    <ul>
     <li>
      <a href="/" className="sidebar-link">
       <Home size={20} /> <span className="sidebar-text">Dashboard</span>
      </a>
     </li>
     <li>
      <a href="/create" className="sidebar-link">
       <FilePlus size={20} /> <span className="sidebar-text">Create Content</span>
      </a>
     </li>
     <li>
      <a href="/manage" className="sidebar-link">
       <FolderCog size={20} /> <span className="sidebar-text">Manage Content</span>
      </a>
     </li>
     <li>
      <a href="/settings" className="sidebar-link">
       <Settings size={20} /> <span className="sidebar-text">Settings</span>
      </a>
     </li>
    </ul>
   </nav>
  </aside>
 );
};
