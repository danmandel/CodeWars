export const min = (arr: number[]): number => arr.reduce((p,c) => p < c ? p : c, arr[0]);

export const max = (arr: number[]): number => arr.reduce((p, c) => p > c ? p : c, arr[0]);
