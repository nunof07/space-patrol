import { Powerup } from '@src/crates/Powerup';
import { PowerupType } from '@src/crates/PowerupType';
import { PlayerSystem } from '@src/player/PlayerSystem';
import { UpgradableWeaponSystem } from '@src/weapons/UpgradableWeaponSystem';
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
                this.scene.sound.play('powerup');
                switch (powerup.powerupType) {
                    case PowerupType.Burst:
                        this.weaponPowerup(this.weapons.burst);
                        break;
                    case PowerupType.Pulse:
                        this.weaponPowerup(this.weapons.pulse);
                        break;
                    case PowerupType.Health:
                        this.healthPowerup();
                        break;
                    case PowerupType.Shield:
                        this.shieldPowerup();
                        break;
                    default:
                }
                powerup.destroy();
            }
        );
    }

    private weaponPowerup(weapon: UpgradableWeaponSystem): void {
        if (weapon.upgrade()) {
            this.scene.sound.play('powerup_weapon');
        }
    }

    private healthPowerup(): void {
        this.player.healthComponent.incHealth(25);
        this.player.healthComponent.refreshFilled();
    }

    private shieldPowerup(): void {
        if (this.player.healthComponent.incShield(25)) {
            this.scene.sound.play('powerup_shield');
        }
        this.player.healthComponent.refreshFilled();
        this.player.refreshShield();
    }
}
