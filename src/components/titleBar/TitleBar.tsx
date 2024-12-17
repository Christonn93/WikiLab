import React from "react";
import { TitleBarProps } from "@/types/components/TitleBar.types";

export const TitleBar: React.FC<TitleBarProps> = ({ title, aside }) => {
 return (
  <div className="is-flex is-justify-content-space-between">
   {title && <h4 className="has-text-white-ter mb-2">{title}</h4>}
   {aside && <h6 className="has-text-white-ter mb-2">{aside}</h6>}
  </div>
 );
};
