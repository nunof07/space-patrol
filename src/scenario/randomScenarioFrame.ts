import * as Random from 'random-js';

export function randomScenarioFrame(
    frames: ReadonlyArray<string>,
    previous: string,
    engine: Random.Engine
): string {
    const except = frames.filter(frame => frame !== previous);
    const chosen = Random.integer(0, except.length - 1)(engine);

    return except[chosen];
}
