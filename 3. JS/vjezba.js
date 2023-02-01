let a = 10
let b = 'abc'

let moj_niz = [1, 'abc', true, () => {}];

console.log(moj_niz[0]);
console.log(moj_niz[1]);

moj_niz[0] = 'bc';
moj_niz.push("nesto novo");

console.log(moj_niz);
console.log(moj_niz.length);

for (let x of moj_niz) {
    console.log(x); 
}


let moj_objekt = {
    ime: "Lea",
    prezime: "Varžić",
    godiste: 2000,
    ispisi: function () {
        console.log('asd');
    },
};

console.log(moj_objekt);
console.log(moj_objekt['ime']);
console.log(moj_objekt.ime);
