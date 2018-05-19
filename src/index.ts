// tslint:disable-next-line:no-relative-imports no-import-side-effect
import './style.css';
// tslint:disable-next-line:ordered-imports
import { Boot } from '@src/Boot';
import { config } from '@src/game/config';
import { log_banner } from '@src/game/log_banner';
import { start } from '@src/game/start';
import { title } from '@src/game/title';
import { version } from '@src/game/version';

log_banner(title(), version());
start(config(), Boot);
