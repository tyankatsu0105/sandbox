import "ace-builds/src-noconflict/mode-text";
import { Ace } from "ace-builds";

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai";

import "ace-builds/src-noconflict/mode-javascript";

import { data } from "./words.json";

const langTools = window.ace.require("ace/ext/language_tools");
const addCompleter: (params: {
  getCompletions: Ace.Editor["completers"][number]["getCompletions"];
}) => void = langTools.addCompleter;
addCompleter({
  getCompletions: (_editor, _session, _pos, _prefix, cb) =>
    cb(
      null,
      data.map((v) => ({ ...v, score: 100 }))
    ),
});

// https://github.com/ajaxorg/ace/blob/master/tool/tmtheme.js#L16
type Scope =
  | "keyword"
  | "keyword.operator"
  | "keyword.other.unit"
  | "constant"
  | "constant.language"
  | "constant.library"
  | "constant.numeric"
  | "constant.character"
  | "constant.character.escape"
  | "constant.character.entity"
  | "constant.other"
  | "support"
  | "support.function"
  | "support.function.dom"
  | "support.firebug"
  | "support.function.constant"
  | "support.constant"
  | "support.constant.property-value"
  | "support.class"
  | "support.type"
  | "support.other"
  | "function"
  | "function.buildin"
  | "storage"
  | "storage.type"
  | "invalid"
  | "invalid.illegal"
  | "invalid.deprecated"
  | "string"
  | "string.regexp"
  | "comment"
  | "comment.doc"
  | "comment.doc.tag"
  | "variable"
  | "variable.language"
  | "variable.parameter"
  | "meta"
  | "xml-pe"
  | "meta.tag"
  | "meta.selector"
  | "entity.other.attribute-name"
  | "entity.name.function"
  | "entity.name"
  | "entity.name.tag"
  | "markup.heading"
  | "markup.heading.1"
  | "markup.heading.2"
  | "markup.heading.3"
  | "markup.heading.4"
  | "markup.heading.5"
  | "markup.heading.6"
  | "markup.list"
  | "collab.user1"
  | "keyword"
  | "support.type"
  | "variable"
  | (string & {});

type StateKey = "start" | (string & {});
type State = {
  token: Scope | Scope[];
  regex: RegExp | (string & {});
  next?: StateKey;
}[];

type Rules = Record<StateKey, State>;

export class CustomHighlightRules extends window.ace.acequire(
  "ace/mode/text_highlight_rules"
).TextHighlightRules {
  constructor() {
    super();
    const identifierRe =
      "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*";
    const keywordMapper = this.createKeywordMapper(
      {
        keyword: data.reduce((acc, current, index) => {
          if (index === 0) {
            acc = current.value;
            return acc;
          }

          acc += `|${current.value}`;
          return acc;
        }, ""),
      },
      "identifier"
    );

    this.$rules = {
      start: [
        {
          token: keywordMapper,
          regex: identifierRe,
        },
      ],
    } as Rules;
  }
}

class CustomMode extends window.ace.acequire("ace/mode/text").Mode {
  constructor() {
    super();
    this.HighlightRules = CustomHighlightRules;
  }
}

export const customMode = new CustomMode() as Ace.SyntaxMode;
