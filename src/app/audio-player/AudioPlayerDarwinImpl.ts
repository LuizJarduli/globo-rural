import { spawn } from "child_process";
import { AudioPlayer } from "./AudioPlayer";

export class AudioPlayerDarwinImpl implements AudioPlayer {
    public play(source: string): void {	
		const afPlayCommand = spawn('afplay', [source]);

		afPlayCommand.stderr.on('data', this.onError);
		afPlayCommand.on('close', this.onClose);
	}

	public onError(error: unknown): void {
		console.error('An error occurred: ', error);
	}

	public onClose(code: number): void {
		if (code == 0) return;
		console.log(`Child process exited with code: ${code}`);
	}
}