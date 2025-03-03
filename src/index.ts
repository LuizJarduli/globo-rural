#!/usr/bin/env node
import figlet from 'figlet';
import chalk from 'chalk';
import { AudioPlayerPlatformFactory, AudioPlayerService } from './app/app.js';
import path from 'path';

const init = (): void => {
	const resourcePath = `${path.dirname(import.meta.url)}/assets/globo-rural.mp3`;
	new AudioPlayerService(AudioPlayerPlatformFactory.create()).execute(resourcePath);

	console.log(chalk.green(figlet.textSync('Globo rural', 'Speed')));
};

init();
