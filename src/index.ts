// tslint:disable-next-line:no-relative-imports no-import-side-effect
import './style.css';
// tslint:disable-next-line:ordered-imports
import { log_banner } from '@src/log_banner';
import { start } from '@src/start';
import { version } from '@src/version';
import * as Phaser from 'phaser';

log_banner(version());
start(Phaser.AUTO);
