//4. створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
// 5. унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Engineer extends Person {
  constructor(name, age, experience, skills) {
    super(name, age);
    this.experience = experience;
    this.skills = skills;
  }

}

class QA_engineer extends Engineer {
  constructor(name, age, experience, skills, testingTools) {
    super(name, age, experience, skills);
    this.testingTools = testingTools;
  }

}

let objPerson = new Person('Anastasiia_Davydova', 34);
let objEngineer = new Engineer('Bober', 18, 5, ['JS', 'Java']);
let objQaEngineer = new QA_engineer('Beavers_brother', 2, 666, ['Cypress', 'Selenium'], ['Figma', 'Guthub']);

console.log('\nInformation about Person:');
console.log("Person:"+ " " + objPerson.name);
console.log("Age:"+ " " + objPerson.age + " " + "years");
console.log("\nInformation about Engineer:");
console.log("Person:"+ " " + objEngineer.name);
console.log("Age:"+ " " + objEngineer.age + " " + "years");
console.log("Experience:"+ " " + objEngineer.experience + " " + "years");
console.log("Skills:"+ " " + objEngineer.skills.join(', '));
console.log("\nInformation about QA Engineer:");
console.log("Person:"+ " " + objQaEngineer.name);
console.log("Age:"+ " " + objQaEngineer.age + " " + "years");
console.log("Experience:"+ " " + objQaEngineer.experience + " " + "years");
console.log("Skills:"+ " " + objQaEngineer.skills.join(', '));
console.log("Testing Tools:"+ " " + objQaEngineer.testingTools.join(', '));