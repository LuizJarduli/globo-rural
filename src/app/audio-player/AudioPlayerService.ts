import path from 'path';
import { AudioPlayer } from './AudioPlayer.js';
import chalk from 'chalk';
import figlet from 'figlet';
import { fileURLToPath } from 'url';

export class AudioPlayerService {
	private readonly _resourcePath = `${path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../assets/globo-rural.mp3')}`;

	constructor(private readonly _audioPlayer: AudioPlayer) {
		this._greet();
	}

	public execute(): void {
		this._audioPlayer.play(this._resourcePath);
	}

	private _greet(): void {
		console.log(chalk.green(figlet.textSync('Globo rural', 'Speed')));
	}
}
