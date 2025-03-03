import { AudioPlayer } from './AudioPlayer.js';
import { AudioPlayerLinuxImpl } from './AudioPlayerLinuxImpl.js';
import { AudioPlayerWindowsImpl } from './AudioPlayerWindowsImpl.js';

enum Platform {
	Linux = 'linux',
	Windows = 'win32',
	Mac = 'darwin',
}

export class AudioPlayerPlatformFactory {
	public static get platform(): Platform {
		return process.platform as Platform;
	}

	public static create(): AudioPlayer {
		return AudioPlayerPlatformFactory._getPlatformDictionary();
	}

	private static _getPlatformDictionary(): AudioPlayer {
		const { Linux, Mac, Windows } = Platform;

		return {
			[Linux]: new AudioPlayerLinuxImpl(),
			[Mac]: new AudioPlayerLinuxImpl(),
			[Windows]: new AudioPlayerWindowsImpl(),
		}[AudioPlayerPlatformFactory.platform];
	}
}
