import * as React from "react";

import AceEditor from "react-ace";

import "./Editor.css";

import { customMode } from "./mode-custom";
import { data } from "./words.json";

export const Editor = () => {
  const [value, setValue] = React.useState("");

  const onChange: React.ComponentProps<typeof AceEditor>["onChange"] =
    React.useCallback((value) => {
      setValue(value);
    }, []);

  const ref = React.useRef<AceEditor>(null);

  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.editor.session.setMode(customMode);
    }
  }, [ref.current]);

  return (
    <>
      <AceEditor
        ref={ref}
        mode="text"
        theme="monokai"
        width="100%"
        showPrintMargin={false}
        highlightActiveLine
        enableBasicAutocompletion
        enableLiveAutocompletion
        onChange={onChange}
      />

      <div className="result-panel">
        <p className="result-panel__head">Available values:</p>
        {data.map((v) => (
          <p key={v.value}>
            {v.value}: {v.meta}
          </p>
        ))}
        <p className="result-panel__body">{value}</p>
      </div>
    </>
  );
};
