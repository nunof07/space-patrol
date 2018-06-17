import { Powerup } from '@src/crates/Powerup';
import { PowerupType } from '@src/crates/PowerupType';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { WeaponsSystem } from '@src/weapons/WeaponsSystem';
import * as Phaser from 'phaser';

export class PowerupPlayerCollider {
    private readonly scene: Phaser.Scene;
    private readonly player: PlayerSystem;
    private readonly weapons: WeaponsSystem;

    constructor(
        scene: Phaser.Scene,
        player: PlayerSystem,
        weapons: WeaponsSystem
    ) {
        this.scene = scene;
        this.player = player;
        this.weapons = weapons;
    }

    public setup(powerup: Powerup): void {
        this.scene.physics.add.overlap(
            powerup.sprite,
            this.player.player.group,
            () => {
                switch (powerup.powerupType) {
                    case PowerupType.Burst:
                        this.weapons.burst.upgrade();
                        break;
                    case PowerupType.Pulse:
                        this.weapons.pulse.upgrade();
                        break;
                    case PowerupType.Health:
                        this.player.healthComponent.incHealth(25);
                        this.player.healthComponent.refreshFilled();
                        break;
                    case PowerupType.Shield:
                        this.player.healthComponent.incShield(25);
                        this.player.healthComponent.refreshFilled();
                        this.player.refreshShield();
                        break;
                    default:
                }
                powerup.destroy();
            }
        );
    }
}
