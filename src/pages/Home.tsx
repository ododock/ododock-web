import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { useRef } from "react";

export default function Home() {
  const editorRef = useRef();

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    const markdown = editorRef.current.getInstance().getMarkdown();
    //html 형식으로 가져옴
    console.log(data);
    //markdown 형식으로 가져옴
    console.log(markdown);
  };

  return (
    <div className="edit_wrap">
      <Editor
        initialValue="hello react editor world!"
        previewStyle="tab"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={false}
        language="ko-KR"
        // theme="dark"
        hideModeSwitch={true}
        ref={editorRef}
        onChange={onChange}
      />
    </div>
  );
}
