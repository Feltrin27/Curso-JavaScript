//               01234567
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo', ' ', 'dia'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`)


console.log(umaString.charAt(6));
console.log(umaString.indexOf('o', 3))
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString[4]);

console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/));
console.log(umaString.replace(/r/g, 'l'));

console.log(umaString.length);
console.log(umaString.length - 3);
console.log(umaString.slice(-5, -1));
console.log(umaString.slice(2, 6));

console.log(umaString.substring(umaString.length -5));
console.log(umaString.split(' ', 2));
console.log(umaString.toLocaleUpperCase());
console.log(umaString.toLocaleLowerCase());
