let studenti = [
{
    ime: 'Pero',
    kolegiji: [
        {
            ime: 'Programsko inženjertvo',
            kratica: 'PI',
            komponente: ['P', 'V'],
        },
    ],
},
{
    ime: 'Marija',
    kolegiji: [],
},
{
    ime:'Ivica',
},
];

console.log(studenti);
console.log(studenti[0]);
console.log(studenti[0].ime);
console.log(studenti[0].kolegiji[0].komponente[0]);