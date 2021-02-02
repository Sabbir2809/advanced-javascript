// Apply map, filter, find on an array of objects

const students = [
    {id: 9, name: "Sabbir Hossain"},
    {id: 8, name: "Komol"},
    {id: 5, name: "Salkin"},
    {id: 1, name: "Mizan"}
];

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter(s => s.id > 5);
console.log(bigger);

const isThere = students.find(s => s.id > 5);
console.log(isThere);