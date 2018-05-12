import { start } from '@src/start';

start();

// tslint:disable-next-line:no-any no-unsafe-any
if ((<any>module).hot) {
    // tslint:disable-next-line:no-any no-unsafe-any
    (<any>module).hot.accept('@src/start', () => {
        start();
    });
}
