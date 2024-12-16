import React from "react";
import { Home, FilePlus, LogIn, User } from "lucide-react";
import "bulma/css/bulma.min.css";

export const LandingPage: React.FC = () => {
 return (
  <div className="container is-fluid">
   <section className="section">
    <div className="columns is-multiline">
     <div className="column is-one-third">
      <div className="card">
       <div className="card-content has-text-centered">
        <Home size={48} className="has-text-primary" />
        <h3 className="title is-4">Customizable Content</h3>
        <p>Create and store information with fully customizable layouts for both public and private use.</p>
       </div>
      </div>
     </div>
     <div className="column is-one-third">
      <div className="card">
       <div className="card-content has-text-centered">
        <FilePlus size={48} className="has-text-primary" />
        <h3 className="title is-4">Create New Files</h3>
        <p>Easily create new files and content for your wiki with an intuitive editor.</p>
       </div>
      </div>
     </div>
     <div className="column is-one-third">
      <div className="card">
       <div className="card-content has-text-centered">
        <LogIn size={48} className="has-text-primary" />
        <h3 className="title is-4">User Login</h3>
        <p>Securely log in to access private content or manage your wiki as an admin.</p>
       </div>
      </div>
     </div>
     <div className="column is-one-third">
      <div className="card">
       <div className="card-content has-text-centered">
        <User size={48} className="has-text-primary" />
        <h3 className="title is-4">Admin System</h3>
        <p>Manage users and control access with a powerful admin system.</p>
       </div>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};
