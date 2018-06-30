import { Factory } from '@src/core/Factory';
import { Wave } from '@src/enemies/Wave';

export interface WaveFactory extends Factory<Wave> {
    restart(): void;
}
