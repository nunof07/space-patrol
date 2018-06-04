import { Scalar } from '@src/core/Scalar';

export function getScalar<T>(value: Scalar<T>): T {
    return typeof value === 'function' ? value() : value;
}
