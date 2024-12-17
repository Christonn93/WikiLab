import React, { useState, ChangeEvent } from "react";
import { TitleBar } from "../titleBar/TitleBar";
import { useMarkdown } from "@/hooks/helpers/useMarkdown";

export const Editor: React.FC = () => {
 const { markdown, setMarkdown } = useMarkdown();
 const [words, setWords] = useState<number>(0);
 const [chars, setChars] = useState<number>(0);

 // Function to calculate word count
 const getWordsCount = (str: string): number => {
  const match = str.match(/(\w+)/g);
  return match ? match.length : 0;
 };

 // Function to calculate character count
 const getCharsCount = (str: string): number => {
  return str.length;
 };

 // Event handler for updating markdown and stats
 const updateMarkdown = (event: ChangeEvent<HTMLTextAreaElement>) => {
  const value = event.target.value;

  setMarkdown(value);
  setWords(getWordsCount(value));
  setChars(getCharsCount(value));
 };

 return (
  <div className="editor__wrap">
   <TitleBar title="Editor" aside={`${words} Words ${chars} Characters`} />
   <textarea value={markdown} onChange={updateMarkdown} />
  </div>
 );
};
