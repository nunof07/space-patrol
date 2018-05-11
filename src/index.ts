import { start } from './App';

start();

if ((module as any).hot) {
    (module as any).hot.accept('./App', () => {
        start();
    });
}
