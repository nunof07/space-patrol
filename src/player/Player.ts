import * as Phaser from 'phaser';

export class Player {
    private readonly groupImpl: Phaser.GameObjects.Group;
    private readonly particlesImpl: ReadonlyArray<
        Phaser.GameObjects.Particles.ParticleEmitter
    >;

    constructor(
        group: Phaser.GameObjects.Group,
        particles: ReadonlyArray<Phaser.GameObjects.Particles.ParticleEmitter>
    ) {
        this.groupImpl = group;
        this.particlesImpl = particles;
    }

    public get group(): Phaser.GameObjects.Group {
        return this.groupImpl;
    }

    public get particles(): ReadonlyArray<
        Phaser.GameObjects.Particles.ParticleEmitter
    > {
        return this.particlesImpl;
    }

    public destroy(): void {
        this.groupImpl.getChildren().forEach(object => {
            object.destroy();
        });
    }
}
