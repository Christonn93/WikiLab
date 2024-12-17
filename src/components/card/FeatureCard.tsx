import { FeatureCardProps } from "@/types/components/FeatureCard.types";
import React from "react";

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
 return (
  <div className="column is-one-third">
   <div className="card">
    <div className="card-content has-text-centered">
     <Icon size={48} className="has-text-primary" />
     <h3 className="title is-4">{title}</h3>
     <p>{description}</p>
    </div>
   </div>
  </div>
 );
};
