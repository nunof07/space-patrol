import { ProgressBar } from '@src/progressBar/ProgressBar';

export function updateProgressBar(
    bar: ProgressBar,
    progress: number
): ProgressBar {
    bar.complete.width = progress * bar.bar.width;

    return bar;
}
