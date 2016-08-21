var wire; // Find the wire.

var key = Object.keys(this)[Object.keys(this).length-1];

CutTheWire(this[key]);


//top rated
var wire = Object.keys(this).pop()
CutTheWire(this[wire]);
