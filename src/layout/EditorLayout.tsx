import { EditorLayoutProps } from "@/types/layout/Editor.types";

export const EditorLayout: React.FC<EditorLayoutProps> = ({ children }) => {
 return <main className="container">{children}</main>;
};

export const EditorColumnLayout: React.FC<EditorLayoutProps> = ({ children }) => {
 return <div className="container">{children}</div>;
};
