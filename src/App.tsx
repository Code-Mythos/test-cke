import "./App.css";

import Editor from "ckeditor5-custom-build/build/ckeditor";
import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";

function App() {
  const [text, setText] = React.useState<string | undefined>(undefined);

  return (
    <div className="App">
      <CKEditor
        editor={Editor.Editor}
        data={text}
        disabled={false}
        onReady={(editor) => {
          const editable = editor.ui.getEditableElement();
          const toolbar = editor.ui.view.toolbar.element;
          const parent = editable?.parentElement;

          if (editable && parent && toolbar)
            parent.insertBefore(toolbar, editable);
        }}
        onFocus={(event, editor) => {
          console.log("On focus editor content:\n", event);
        }}
        onBlur={(event, editor) => {
          console.log("On blur editor content:\n", event);
        }}
        onError={(event, editor) => {
          console.log("On error editor content:\n", event);
        }}
        onChange={(event, editor) => {
          console.log("On change editor content:\n", event);
          setText(editor.getData());
        }}
      />
    </div>
  );
}

export default App;
