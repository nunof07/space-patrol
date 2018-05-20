export function log_banner(
    title: string,
    version: string,
    // tslint:disable-next-line:no-any readonly-array
    logger: (message?: any, ...optionalParams: any[]) => void = console.log,
    context: object = console
): void {
    logger.apply(context, [
        `%c %c %c %c %c ${title}%c v${version} %c %c %c %c `,
        'color: #ffffff; background: #8888FF',
        'color: #ffffff; background: #4444FF',
        'color: #ffffff; background: #2222FF',
        'color: #ffffff; background: #0000FF',
        'color: #ffffff; background: #000099',
        'color: #a0a0a0; background: #000099',
        'color: #ffffff; background: #0000FF',
        'color: #ffffff; background: #2222FF',
        'color: #ffffff; background: #4444FF',
        'color: #ffffff; background: #8888FF',
    ]);
}
