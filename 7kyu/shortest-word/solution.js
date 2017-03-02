const findShort = s => s.split(' ').reduce((p,c,i,a) => p.length < c.length ? p : c, s.split(' ')[0]).length

//top rated
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
