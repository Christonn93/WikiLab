import React from "react";
import { CreateWikiForm } from "@/components/form/CreateWiki";
import { saveMarkdownFile } from "@/utils/fileUtils";

export const CreateWiki: React.FC = () => {
 const handleCreateFile = (fileName: string, content: string, folder?: string) => {
  const file = saveMarkdownFile(fileName, content, folder);
  alert(`File "${file.fileName}" created successfully!`);
  console.log("File Created:", file);
 };

 return (
  <div className="container">
   <section className="section">
    <h1 className="title">Create a New Wiki File</h1>
    <CreateWikiForm onCreateFile={handleCreateFile} />
   </section>
  </div>
 );
};
