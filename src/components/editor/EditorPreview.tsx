import ReactMarkdown from "react-markdown";
import { TitleBar } from "../titleBar/TitleBar";
import { useMarkdown } from "@/hooks/helpers/useMarkdown";

export const EditorPreview = () => {
 const { markdown } = useMarkdown();

 return (
  <div className="preview">
   <TitleBar title="Preview" />
   <div className="preview__scroll">
    <ReactMarkdown>{markdown}</ReactMarkdown>
   </div>
  </div>
 );
};
