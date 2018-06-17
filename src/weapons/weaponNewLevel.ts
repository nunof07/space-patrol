export function weaponNewLevel(
    level: number,
    defaultLevel: number,
    maxLevel: number
): number {
    const newLevel = Math.floor(level);

    return newLevel >= 1 && newLevel <= maxLevel ? newLevel : defaultLevel;
}
