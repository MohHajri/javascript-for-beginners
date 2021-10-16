let dog = {"name": "Woody", "type":"dog"};
let cat = {"name":"Bob", "type":"cat"};
console.log(dog);
console.log(cat);

console.log("\n\n\n")
let petName = ["woody", "Bob"];
console.log(petName);
let pets = [{"name": "Woody", "type":"dog"}, cat];
console.log(pets);
pets.push({"name":"Roxy", "type":"dog"});
console.log(pets[2]);

cat.age = 2;
dog["age"] = 14;
pets[0].age = 14;
pets[2].age = 6;

pets[1].age =3;
pets[1].hungry = true;
console.log(pets);