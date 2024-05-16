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
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log("On change editor content:\n", event, "\n", data);
          setText(editor.getData());
        }}
        config={{
          wproofreader: {
            serviceId: "your_service_id",
            srcUrl:
              "https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js",
            autoSearch: true,
            enableGrammar: true,
            lang: "en_US",
          },

          ai: {
            openAI: {
              requestHeaders: {
                Authorization: "Bearer YOUR_OPENAI_API_KEY",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default App;
