/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { DecoupledEditor } from '@ckeditor/ckeditor5-editor-decoupled';
import { AIAssistant } from '@ckeditor/ckeditor5-ai';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { Bold, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { DocumentOutline, TableOfContents } from '@ckeditor/ckeditor5-document-outline';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { AutoImage, Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image';
import { ImportWord } from '@ckeditor/ckeditor5-import-word';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MultiLevelList } from '@ckeditor/ckeditor5-list-multi-level';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Pagination } from '@ckeditor/ckeditor5-pagination';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { PasteFromOfficeEnhanced } from '@ckeditor/ckeditor5-paste-from-office-enhanced';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { SlashCommand } from '@ckeditor/ckeditor5-slash-command';
import { Style } from '@ckeditor/ckeditor5-style';
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Template } from '@ckeditor/ckeditor5-template';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { AccessibilityHelp } from '@ckeditor/ckeditor5-ui';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { EditorWatchdog } from '@ckeditor/ckeditor5-watchdog';
import WProofreader from '@webspellchecker/wproofreader-ckeditor5/src/wproofreader.js';
declare class Editor extends DecoupledEditor {
    static builtinPlugins: (typeof AIAssistant | typeof AccessibilityHelp | typeof Alignment | typeof AutoImage | typeof AutoLink | typeof Autoformat | typeof Autosave | typeof BlockQuote | typeof Bold | typeof CloudServices | typeof DocumentOutline | typeof Essentials | typeof ExportPdf | typeof ExportWord | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof GeneralHtmlSupport | typeof Heading | typeof Highlight | typeof HorizontalLine | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImportWord | typeof Indent | typeof IndentBlock | typeof Italic | typeof Link | typeof List | typeof ListProperties | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof Mention | typeof MultiLevelList | typeof PageBreak | typeof Pagination | typeof Paragraph | typeof PasteFromOffice | typeof PasteFromOfficeEnhanced | typeof RemoveFormat | typeof SelectAll | typeof SlashCommand | typeof Strikethrough | typeof Style | typeof Subscript | typeof Superscript | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableOfContents | typeof TableProperties | typeof TableToolbar | typeof Template | typeof TextPartLanguage | typeof TextTransformation | typeof TodoList | typeof Underline | typeof Undo | typeof WProofreader)[];
    static defaultConfig: EditorConfig;
}
declare const _default: {
    Editor: typeof Editor;
    EditorWatchdog: typeof EditorWatchdog;
};
export default _default;
