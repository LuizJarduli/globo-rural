import { AudioPlayer } from './AudioPlayer.js';
import { spawn } from 'child_process';

export class AudioPlayerWindowsImpl implements AudioPlayer {
	public play(source: string): void {
		// Use PowerShell to play the audio file
		const powershellCommand = spawn('powershell.exe', [
			'-c',
			`Add-Type -AssemblyName System.Windows.Forms; $player = New-Object System.Media.SoundPlayer "${source}"; $player.PlaySync();`,
		]);

		powershellCommand.stderr.on('data', this.onError);
		powershellCommand.on('close', this.onClose);
	}

	public onError(error: unknown): void {
		console.error('An error occurred: ', error);
	}

	public onClose(code: number): void {
		if (code == 0) return;

		console.log(`Child process exited with code: ${code}`);
	}
}
