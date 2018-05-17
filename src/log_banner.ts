export function log_banner(version: string): void {
    console.log.apply(console, [
        `%c Space Patrol%c v${version} `,
        'color: #ffffff; background: #0000a0',
        'color: #a0a0a0; background: #0000a0',
    ]);
}
