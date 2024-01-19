//3. створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через prototype), створити одному в кожному форматі
let  nazva = {
  name: "Nastya"
};
let povnaNazva = {
  surname: " Davydova",
  _proto_:nazva
};
console.log(povnaNazva._proto_);



let obj = {
  namee: "Nastya",
  age: ""
};
let nastya = Object.create(obj);
let vasya = Object.create(obj);
nastya.age = 25;
vasya.age = 666;
console.log(nastya);
console.log(vasya);
