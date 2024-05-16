/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { DecoupledEditor } from "@ckeditor/ckeditor5-editor-decoupled";

import { AIAssistant, OpenAITextAdapter } from "@ckeditor/ckeditor5-ai";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import {
  Bold,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import type { EditorConfig } from "@ckeditor/ckeditor5-core";
import {
  DocumentOutline,
  TableOfContents,
} from "@ckeditor/ckeditor5-document-outline";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { ExportPdf } from "@ckeditor/ckeditor5-export-pdf";
import { ExportWord } from "@ckeditor/ckeditor5-export-word";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import {
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
} from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { ImportWord } from "@ckeditor/ckeditor5-import-word";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { TextPartLanguage } from "@ckeditor/ckeditor5-language";
import { AutoLink, Link } from "@ckeditor/ckeditor5-link";
import { List, ListProperties, TodoList } from "@ckeditor/ckeditor5-list";
import { MultiLevelList } from "@ckeditor/ckeditor5-list-multi-level";
import { MediaEmbed, MediaEmbedToolbar } from "@ckeditor/ckeditor5-media-embed";
import { Mention } from "@ckeditor/ckeditor5-mention";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Pagination } from "@ckeditor/ckeditor5-pagination";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { PasteFromOfficeEnhanced } from "@ckeditor/ckeditor5-paste-from-office-enhanced";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import { SelectAll } from "@ckeditor/ckeditor5-select-all";
import { SlashCommand } from "@ckeditor/ckeditor5-slash-command";
import { Style } from "@ckeditor/ckeditor5-style";
import {
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { Template } from "@ckeditor/ckeditor5-template";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { AccessibilityHelp } from "@ckeditor/ckeditor5-ui";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { EditorWatchdog } from "@ckeditor/ckeditor5-watchdog";
import WProofreader from "@webspellchecker/wproofreader-ckeditor5/src/wproofreader.js";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends DecoupledEditor {
  public static override builtinPlugins = [
    AIAssistant,
    OpenAITextAdapter,
    AccessibilityHelp,
    Alignment,
    AutoImage,
    AutoLink,
    Autoformat,
    Autosave,
    BlockQuote,
    Bold,
    CloudServices,
    DocumentOutline,
    Essentials,
    ExportPdf,
    ExportWord,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    GeneralHtmlSupport,
    Heading,
    Highlight,
    HorizontalLine,
    Image,
    ImageCaption,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImportWord,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    ListProperties,
    MediaEmbed,
    MediaEmbedToolbar,
    Mention,
    MultiLevelList,
    PageBreak,
    Pagination,
    Paragraph,
    PasteFromOffice,
    PasteFromOfficeEnhanced,
    RemoveFormat,
    SelectAll,
    SlashCommand,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableOfContents,
    TableProperties,
    TableToolbar,
    Template,
    TextPartLanguage,
    TextTransformation,
    TodoList,
    Underline,
    Undo,
    WProofreader,
  ];

  public static override defaultConfig: EditorConfig = {
    toolbar: {
      items: [
        "aiCommands",
        "aiAssistant",
        "wproofreader",
        "insertTemplate",
        "importWord",
        "|",
        "findAndReplace",
        "selectAll",
        "removeFormat",
        "|",
        "pageBreak",
        "nextPage",
        "previousPage",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "|",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "highlight",
        "superscript",
        "subscript",
        "|",
        "alignment",
        "|",
        "tableOfContents",
        "numberedList",
        "bulletedList",
        "multiLevelList",
        "|",
        "outdent",
        "indent",
        "|",
        "horizontalLine",
        "todoList",
        "link",
        "blockQuote",
        "imageUpload",
        "insertTable",
        "mediaEmbed",
        "|",
        "undo",
        "redo",
        "|",
        "textPartLanguage",
        "|",
        "style",
        "|",
        "exportPdf",
        "exportWord",
        "|",
        "accessibilityHelp",
      ],
    },
    language: "en",
    image: {
      toolbar: [
        "imageTextAlternative",
        "toggleImageCaption",
        "imageStyle:inline",
        "imageStyle:block",
        "imageStyle:side",
      ],
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableCellProperties",
        "tableProperties",
      ],
    },
    pagination: {
      pageWidth: "21cm",
      pageHeight: "29.7cm",
      pageMargins: {
        top: "20mm",
        bottom: "20mm",
        left: "12mm",
        right: "12mm",
      },
    },
  };
}

export default { Editor, EditorWatchdog };
