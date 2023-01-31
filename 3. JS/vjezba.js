let a = 10
let b = 'abc'

let moj_niz = [1, 'abc', true, () => {}];

console.log(moj_niz[0]);
console.log(moj_niz[1]);

moj_niz[0] = 'bc';
moj_niz.push("nesto novo");

console.log(moj_niz);
console.log(moj_niz.length);
