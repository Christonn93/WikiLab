import React, { useState } from "react";
import { Folder, ChevronRight, FileText, Tag, FilePlus } from "lucide-react";
import { EditorContainer } from "../container/EditorContainer";

interface CreateWikiFormProps {
 onCreateFile: (title: string, folder: string, categories: string, slug: string, content: string) => void;
}

export const CreateWikiForm: React.FC<CreateWikiFormProps> = ({ onCreateFile }) => {
 const [title, setTitle] = useState("");
 const [folder, setFolder] = useState("");
 const [categories, setCategories] = useState("");
 const [slug, setSlug] = useState("");
 const [content, setContent] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!title || !content) {
   return alert("Title and Content are required fields.");
  }
  onCreateFile(title, folder, categories, slug, content);
  setTitle("");
  setFolder("");
  setCategories("");
  setSlug("");
  setContent("");
 };

 return (
  <form onSubmit={handleSubmit} className="container">
   {/* Title */}
   <div className="field">
    <div className="control has-icons-left">
     <input className="input" type="text" placeholder="Enter the full title" value={title} onChange={(e) => setTitle(e.target.value)} />
     <span className="icon is-small is-left">
      <FileText size={18} />
     </span>
    </div>
   </div>

   {/* Folder + Categories */}
   <div className="field is-horizontal">
    <div className="field-body">
     {/* Folder */}
     <div className="field">
      <div className="control has-icons-left">
       <input className="input" type="text" placeholder="e.g., /tutorials" value={folder} onChange={(e) => setFolder(e.target.value)} />
       <span className="icon is-small is-left">
        <Folder size={18} />
       </span>
      </div>
     </div>

     {/* Categories */}
     <div className="field">
      <div className="control has-icons-left">
       <input className="input" type="text" placeholder="e.g., guides, tutorials" value={categories} onChange={(e) => setCategories(e.target.value)} />
       <span className="icon is-small is-left">
        <ChevronRight size={18} />
       </span>
      </div>
     </div>
    </div>
   </div>

   {/* Content */}
   <div className="field">
    <div className="control">
     <EditorContainer />
    </div>
   </div>

   {/* Slug/Tags */}
   <div className="field">
    <div className="control has-icons-left" style={{ maxWidth: "50%" }}>
     <input className="input" type="text" placeholder="e.g., my-new-wiki" value={slug} onChange={(e) => setSlug(e.target.value)} />
     <span className="icon is-small is-left">
      <Tag size={18} />
     </span>
    </div>
   </div>

   {/* Buttons */}
   <div className="field is-grouped is-grouped-right mt-4">
    <p className="control">
     <button className="button is-primary">
      <FilePlus size={16} style={{ marginRight: "5px" }} />
      Create File
     </button>
    </p>
    <p className="control">
     <button type="button" className="button is-light">
      Cancel
     </button>
    </p>
   </div>
  </form>
 );
};
