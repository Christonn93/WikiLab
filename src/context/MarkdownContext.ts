import { MarkdownContextType } from "@/types/context/markdownContext.types";
import { createContext } from "react";

// Create the context with the correct type
export const MarkdownContext = createContext<MarkdownContextType | undefined>(undefined);