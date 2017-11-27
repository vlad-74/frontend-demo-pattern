let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН CONSTRUCTOR - ИСПОЛЬЗУЕТСЯ ДЛЯ СОЗДАНИЯ ПОДОБНЫХ ОБЪЕКТОВ */

function Person (name = 'IVAN', age = '30', country = 'BL') {
  this.name = name
  this.age = age
  this.country = country
  this.education = 'higher'
};
Person.prototype.hello = function(){
    return "Привет уважаемый " + this.name;
}

/*-------------------------------------------------------------------------------------*/
const person1 = new Person('John', 20, 'RU');
const person2 = new Person('Pit', 40, 'EN');
const person3 = new Person();

/*-------------------------------------------------------------------------------------*/
console.log(person1, person1.name, person1.hello());
console.log(person2, person2.name, person2.hello()),
console.log(person3, person3.name, person3.hello());

