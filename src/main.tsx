import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MarkdownProvider } from "./providers/MarkdownProvider.tsx";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <MarkdownProvider>
   <App />
  </MarkdownProvider>
 </StrictMode>
);
