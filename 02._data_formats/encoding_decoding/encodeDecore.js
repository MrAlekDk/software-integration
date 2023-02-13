
let string = "Rød Grød med Fløde";

encoded = Buffer.from(string).toString('base64');
console.log(encoded);

decoded = Buffer.from(encoded, 'base64').toString('utf-8');
console.log(decoded);