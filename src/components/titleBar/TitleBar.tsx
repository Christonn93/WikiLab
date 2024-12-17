import React from "react";
import { TitleBarProps } from "@/types/components/TitleBar.types";

export const TitleBar: React.FC<TitleBarProps> = ({ title, aside }) => {
 return (
  <div className="mb-4">
   <div className="titleBar__wrap">
    {title && <h4 className="mb-2">{title}</h4>}
    {aside && <h6>{aside}</h6>}
   </div>
   <hr />
  </div>
 );
};
