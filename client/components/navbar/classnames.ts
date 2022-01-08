/* eslint-disable require-jsdoc */
export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}