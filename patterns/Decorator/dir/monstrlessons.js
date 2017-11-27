let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН DECORATOR - ИСПОЛЬЗУЕТСЯ ДЛЯ :
1. ДОБАВЛЕНИЯ НОВЫХ СВОЙСТВ И МЕТОДОВ К СУЩЕСТВУЮЩЕМУ ОБЪЕКТУ - СМ index.js
2. ИЗМЕНЕНИЕ ИМЕЮЩИХСЯ СВОЙСТВ У "ИЗМЕНЕННЫХ" СУЩЕСТВУЮЩИХ ОБЪЕКТОВ - СМ monstrlessons.js
своего рода миксин, он является альтернативой наследования от класса к классу
*/
 
var Coffee = function() {
    this.cost = function(){return 5};
}

// class Coffee {
//   cost () {
//     return 5
//   }
// }

var sugar = function sugar(coffee) {
  var cost = coffee.cost();
  coffee.cost = function () {
    return cost + 1;
  };
};

// const sugar = coffee => {
//   const cost = coffee.cost()
//   coffee.cost = () => cost + 1
// }

const small = coffee => {
  const cost = coffee.cost()
  coffee.cost = () => cost - 1
}

const large = coffee => {
  const cost = coffee.cost()
  coffee.cost = () => cost + 2
}

const withMilk = coffee => {
  const cost = coffee.cost()
  coffee.cost = () => cost + 1
}

const largeWithMilkAndSugar = coffee => {
  large(coffee)
  withMilk(coffee)
  sugar(coffee)
  const cost = coffee.cost()

  coffee.cost = () => cost
}

const coffee = new Coffee()

largeWithMilkAndSugar(coffee)

console.log(coffee.cost())