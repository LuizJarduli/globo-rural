#!/usr/bin/env node
import { AudioPlayerPlatformFactory, AudioPlayerService } from './app/app.js';

new AudioPlayerService(AudioPlayerPlatformFactory.create()).execute();
