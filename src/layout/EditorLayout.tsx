import { EditorLayoutProps } from "@/types/layout/Editor.types";

export const EditorLayout: React.FC<EditorLayoutProps> = ({ children }) => {
 return <main className="editor__layout">{children}</main>;
};

export const EditorColumnLayout: React.FC<EditorLayoutProps> = ({ children }) => {
 return <div className="editor__layout-col">{children}</div>;
};
