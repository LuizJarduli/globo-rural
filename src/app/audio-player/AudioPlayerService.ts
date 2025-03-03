import { AudioPlayer } from './AudioPlayer.js';

export class AudioPlayerService {
	constructor(private readonly _audioPlayer: AudioPlayer) {}

	public execute(source: string): void {
		this._audioPlayer.play(source);
	}
}
