export const compare = (s1: string, s2: string): boolean => {
    const v1: number = typeof s1 === 'string' && !s1.match('[^a-zA-z]') ? s1.toUpperCase().split('').reduce((p, c) => p + c.charCodeAt(0), 0) : 0;
    const v2: number = typeof s2 === 'string' && !s2.match('[^A-Za-z]') ? s2.toUpperCase().split('').reduce((p, c) => p + c.charCodeAt(0), 0) : 0;
    return v1 === v2;
};
