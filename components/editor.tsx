"use client";
import { useTheme } from "next-themes";
import {
  BlockNoteEditor
} from "@blocknote/core";
import { PartialBlock } from "@blocknote/core";
import {
  BlockNoteView,
  useBlockNote,getDefaultReactSlashMenuItems,
  ReactSlashMenuItem
} from "@blocknote/react";
import "@blocknote/react/style.css";
// import "@blocknote/core/style.css"
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
};
const Editor =({onChange,initialContent,editable}:EditorProps)=>{
  const {edgestore}=useEdgeStore();
  const handleUpload=async(file:File)=>{
    const response=await edgestore.publicFiles.upload({
      file,

    });
    return response.url;
  }
    
    const {resolvedTheme}=useTheme();
    const editor: BlockNoteEditor = useBlockNote({
        editable,
        initialContent: 
          initialContent
          ? JSON.parse(initialContent) as PartialBlock[]
          : undefined,
        onEditorContentChange: (editor) => {
          onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        },
        uploadFile:handleUpload
        
      })
    return(
        <div>
            <BlockNoteView
            editor={editor}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            />
        </div>
    )

}
export default Editor;