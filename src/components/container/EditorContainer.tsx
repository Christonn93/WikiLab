import { EditorColumnLayout, EditorLayout } from "@/layout/EditorLayout";
import { EditorPreview } from "../editor/EditorPreview";
import { Editor } from "../editor/Editor";
import { useState } from "react";

export const EditorContainer = () => {
 const [isReview] = useState(false);

 return (
  <EditorLayout>
   <EditorColumnLayout>{!isReview ? <Editor /> : <EditorPreview />}</EditorColumnLayout>
  </EditorLayout>
 );
};
