import { EditorPreview } from "../editor/EditorPreview";
import { Editor } from "../editor/Editor";
import { useState } from "react";

export const EditorContainer = () => {
 const [isReview] = useState(false);

 return <div className="container">{!isReview ? <Editor /> : <EditorPreview />}</div>;
};
