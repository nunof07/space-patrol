import { Crate } from '@src/crates/Crate';

export function updateCrates(
    crates: ReadonlyArray<Crate>,
    time: number,
    delta: number
): ReadonlyArray<Crate> {
    let result: ReadonlyArray<Crate> = [];

    crates.forEach(crate => {
        crate.update(time, delta);

        if (crate.vitality.isAlive()) {
            result = result.concat(crate);
        }
    });

    return result;
}
