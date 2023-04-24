import React, { useState, useEffect, useRef } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import DOMPurify from "dompurify";
import axios from "axios";
import "../App.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useForm } from "react-hook-form";

const DrafSetup = () => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const isMountedRef = useRef(false);
  useEffect(() => {
    isMountedRef.current = true; // Set the flag variable to true when the component mounts

    return () => {
      isMountedRef.current = false; // Set the flag variable to false when the component unmounts
    };
  }, []);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  console.log(content);

  const handleCreateBlog = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/create-blog",
        {
          content,
          title,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      alert("Blog created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateBlog)}>
        <div className="App">
          <header className="App-header">Rich Text Editor Example</header>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Editor
            ref={isMountedRef}
            onFocus={() => setEditorState(editorState)}
            editorState={editorState}
            onEditorStateChange={(newState) => {
              setEditorState(newState);
              setContent(
                draftToHtml(convertToRaw(newState.getCurrentContent()))
              );
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
                'fontFamily',
                'colorPicker',
                'link',
                'remove'
              ],
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                urlEnabled: true,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: undefined,
                previewImage: false,
                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: 'auto',
                  width: 'auto',
                },
              },
            }}
          />
        </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
        <div>
          <button disabled={isSubmitting} type="submit">Create Blog</button>
        </div>
        {isSubmitting && (
          <span style={{ fontWeight: "bold" }}>Loading please wait...</span>
        )}
      </form>
    </>
  );
};

export default DrafSetup;
