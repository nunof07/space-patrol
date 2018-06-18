# space-patrol

[![Build Status](https://travis-ci.org/nunof07/space-patrol.svg?branch=master)](https://travis-ci.org/nunof07/space-patrol)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![codecov](https://codecov.io/gh/nunof07/space-patrol/branch/master/graph/badge.svg)](https://codecov.io/gh/nunof07/space-patrol)
[![Maintainability](https://api.codeclimate.com/v1/badges/f48d8b82211b0cfa4e90/maintainability)](https://codeclimate.com/github/nunof07/space-patrol/maintainability)
[![Lines of Code](https://tokei.rs/b1/github/nunof07/space-patrol)](https://github.com/Aaronepower/tokei)
[![Files](https://tokei.rs/b1/github/nunof07/space-patrol?category=files)](https://github.com/Aaronepower/tokei)

[![Greenkeeper badge](https://badges.greenkeeper.io/nunof07/space-patrol.svg)](https://greenkeeper.io/)
[![Dependencies](https://david-dm.org/nunof07/space-patrol.svg)](https://david-dm.org/nunof07/space-patrol)
[![Development Dependencies](https://david-dm.org/nunof07/space-patrol/dev-status.svg)](https://david-dm.org/nunof07/space-patrol?type=dev)

Shoot 'em up space game made with [Phaser 3](http://phaser.io/).

Work in progress.

## Credits

Everything not mentioned below was made by [Nuno Freitas](https://github.com/nunof07/) (programming and game design).

### Artwork

#### Graphics

-   [Big Rook Games](http://bigrookgames.com/), [Undead Empire](https://opengameart.org/content/undeadempire-tileset-64x64-repack-floor-lava-walls-and-effects) - [CC-BY 3.0](https://creativecommons.org/licenses/by/3.0/): Crate smoke explosion, burst weapon explosion.
-   [Kenney](http://kenney.nl/), [Platformer Pack Redux](http://kenney.nl/assets/platformer-pack-redux) - [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/): Health and shield powerups.
-   [Kenney](http://kenney.nl/), [Sokoban](http://kenney.nl/assets/sokoban) - [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/): Crates.
-   [Kenney](http://kenney.nl/), [Space Shooter Redux](http://kenney.nl/assets/space-shooter-redux) - [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/): Player ship, shield, and stars background.
-   [Skorpio](https://opengameart.org/users/skorpio), [Sci-fi effects](https://opengameart.org/content/sci-fi-effects) - [CC-BY 3.0](https://creativecommons.org/licenses/by/3.0/), [GPL 3.0](http://www.gnu.org/licenses/gpl-3.0.html): Player explosion and stars background.
-   [Tiny Speck](https://en.wikipedia.org/wiki/Slack_Technologies), [Glitch](http://www.glitchthegame.com/public-domain-game-art/) - [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/): Pulse and burst powerups.
-   [xbost](https://twitter.com/xbost), [NES Cyrillic](http://www.pentacom.jp/pentacom/bitfontmaker2/gallery/?id=234) - Public Domain: Font.

#### Audio

All audio effects from [Sonniss](https://sonniss.com), [GDC 2018](https://sonniss.com/gameaudiogdc18/) - [GDC Bundle](https://sonniss.com/gdc-bundle-license/):

-   Airborne Sound, "Drone,Cyber,Deep,Pulse,Disturbing,Invasive,Loop": Ambient music.
-   Airborne Sound - Nikolay Overchenk, "Whoosh,Sound Design,Whip By,Airy to Whine,High": Burst weapon fire.
-   Fox Audio Post-Production, "Droid_Vocal_23": Shield upgrade.
-   Fox Audio Post-Production, "SFX_Sub_Sonic_Bass_28": Player explosion.
-   Glitchedtones, "User Interface Notification Bubbles 04": Weapon upgrade.
-   Glitchedtones, "User Interface Shut Down 01": Game over.
-   Lukas Tvrdon, "Distant Blast 17": Crate explosion.
-   Olivier Girardot, "Bullet Impact 22": Pulse weapon hit.
-   Phil Michalski, "PM_CS_beep_denied5": Powerup picked.
-   SoundMorph, "Future Weapons 3 - Grenade Launcher 2 - Hit 2": Burst weapon hit.
-   Sound Spark LLC, "Feedback_Synth_Delayed_Evolving_Tones_19": Pulse weapon fire.

### Libraries

See [package.json](https://github.com/nunof07/space-patrol/blob/master/package.json) for external dependencies.

## Development

-   Clone repository.
-   Run `npm install` in project folder.
-   Run `npm run info` to see all available scripts.
-   Run `npm start` to serve game and watch for changes.
-   Run `npm run test:watch` to start tests and watch for changes.

## Gameplay

### Player stats

| Player | Start | Max |
| ------ | ----- | --- |
| Health | 100   | 100 |
| Shield | 0     | 100 |

### Weapon stats

| Weapon | Step | Damage | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Level 6 |
| ------ | ---- | ------ | ------- | ------- | ------- | ------- | ------- | ------- |
| Pulse  | 150  | 10     | 1       | 2       | 4       | 6       | 10      | 18      |
| Burst  | 1000 | 50     | 2       | 4       | 6       | 8       | 10      | 12      |
