import { AudioPlayer } from './AudioPlayer.js';
import { spawn } from 'child_process';

export class AudioPlayerWindowsImpl implements AudioPlayer {
	public play(source: string): void {
		// Use Windows Media Player CLI to play the audio file
		// REFACTOR: Create a VBScript to play entirely headless
		const wmplayer = spawn('cmd.exe', ['/c', `start wmplayer ${source} /play /close`]);

		wmplayer.stderr.on('data', this.onError);
		wmplayer.on('close', this.onClose);
	}

	public onError(error: unknown): void {
		console.error('An error occurred: ', error);
	}

	public onClose(code: number): void {
		if (code == 0) return;
		console.log(`Child process exited with code: ${code}`);
	}
}
