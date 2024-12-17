import React from "react";
import { Home, FilePlus, LogIn, User } from "lucide-react";
import { FeatureCard } from "@/components/card/FeatureCard";

export const LandingPage: React.FC = () => {
 return (
  <div className="container is-fluid">
   <section className="section">
    <div className="columns is-multiline">
     <FeatureCard icon={Home} title="Customizable Content" description="Create and store information with fully customizable layouts for both public and private use." />
     <FeatureCard icon={FilePlus} title="Create New Files" description="Easily create new files and content for your wiki with an intuitive editor." />
     <FeatureCard icon={LogIn} title="User Login" description="Securely log in to access private content or manage your wiki as an admin." />
     <FeatureCard icon={User} title="Admin System" description="Manage users and control access with a powerful admin system." />
    </div>
   </section>
  </div>
 );
};
