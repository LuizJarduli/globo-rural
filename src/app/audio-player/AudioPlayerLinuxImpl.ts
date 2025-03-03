import { AudioPlayer } from './AudioPlayer.js';
import { spawn } from 'child_process';

export class AudioPlayerLinuxImpl implements AudioPlayer {
	public play(source: string): void {
		const ffplayCommand = spawn('ffplay', ['-nodisp', '-autoexit', '-loglevel', 'quiet', source]);

		ffplayCommand.stderr.on('data', this.onError);
		ffplayCommand.on('close', this.onClose);
	}

	public onError(error: unknown): void {
		console.error('An error occurred: ', error);
	}

	public onClose(code: number): void {
		if (code == 0) return;

		console.log(`Child process exited with code: ${code}`);
	}
}
