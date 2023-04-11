import React, { useState, useEffect, useRef } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import DOMPurify from "dompurify";
import "../App.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DrafSetup = () => {
  const isMountedRef = useRef(false);
  useEffect(() => {
    isMountedRef.current = true; // Set the flag variable to true when the component mounts

    return () => {
      isMountedRef.current = false; // Set the flag variable to false when the component unmounts
    };
  }, []);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState("");

  console.log(content);
  return (
    <>
      <div className="App">
        <header className="App-header">Rich Text Editor Example</header>

        <Editor
          ref={isMountedRef}
          onFocus={() => setEditorState(editorState)}
          editorState={editorState}
          onEditorStateChange={(newState) => {
            setEditorState(newState);
            setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
          }}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "list",
              "textAlign",
              "history",
              "embedded",
              "emoji",
              "image",
            ],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
      <div
        className="preview"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </>
  );
};

export default DrafSetup;
