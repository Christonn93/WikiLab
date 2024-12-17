import { MarkdownContext } from "@/context/MarkdownContext";
import { MarkdownContextType } from "@/types/context/markdownContext.types";
import { useContext } from "react";

export const useMarkdown = (): MarkdownContextType => {
 const context = useContext(MarkdownContext);
 if (context === undefined) {
  throw new Error("useMarkdown must be used within a MarkdownProvider");
 }
 return context;
};