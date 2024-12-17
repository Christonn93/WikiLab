import React, { ChangeEvent } from "react";

import { useMarkdown } from "@/hooks/helpers/useMarkdown";

export const Editor: React.FC = () => {
 const { markdown, setMarkdown } = useMarkdown();

 // Event handler for updating markdown and stats
 const updateMarkdown = (event: ChangeEvent<HTMLTextAreaElement>) => {
  const value = event.target.value;

  setMarkdown(value);
 };

 return (
  <>
   <textarea className="textarea" value={markdown} onChange={updateMarkdown} placeholder="Type your markdown here" />
   <button className="button is-small mt-1 is-pulled-right">Review markdown</button>
  </>
 );
};
