import { KnownProps } from 'editorconfig';
import {
	TextDocument
} from 'vscode';

export interface EditorConfigProvider {
	getSettingsForDocument(document: TextDocument): Promise<KnownProps>;
	getDefaultSettings();
}
