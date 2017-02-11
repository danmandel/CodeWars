const solution = (input, markers) => input
    .split('\n')
    .map(line => stripComments(line, markers))
    .join('\n');

const stripComments = (line, markers) => {
    const commentStart = markers.reduce((commentStart, marker, index) => 
        line.indexOf(marker) < commentStart && line.indexOf(marker) >= 0
            ? line.indexOf(marker)
       			: commentStart
        ,line.length);
     return line.substring(0,commentStart).trim()
};
