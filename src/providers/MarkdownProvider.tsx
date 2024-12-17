import { MarkdownContext } from "@/context/MarkdownContext";
import { MarkdownProviderProps } from "@/types/hooks/helpers/markdown.types";
import React, { useState } from "react";

export const MarkdownProvider: React.FC<MarkdownProviderProps> = ({ children }) => {
 const [markdown, setMarkdown] = useState<string>("");

 return <MarkdownContext.Provider value={{ markdown, setMarkdown }}>{children}</MarkdownContext.Provider>;
};
