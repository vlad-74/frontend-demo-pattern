let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН SINGLETON ИСПОЛЬЗУЕТСЯ КОГДА КЛАСС ИМЕЕТ ТОЛЬКО ОДИН ЭКЗЕМПЛЯР (ПОДКЛЮЧЕНИЕ БД !!!)
И ЕСТЬ КАКАЯ-ТО ТОЧКА ДОСТУПА К ЭТОМУ ЭКЗЕМПЛЯРУ */

var mySingleton = (function(){
  var instance;

  function privateMethod(){
      return 'privateMethod'
  }
 var privateProperty = 5;

 function init(){
      return {x:Math.random()};
  }

  return {
      getInstance: function () {
        if ( !instance ) {
          instance = init();
        }
        return instance.x  + privateProperty;
      }
  }
})();


/*-------------------------------------------------------------------------------------*/
console.log(mySingleton.getInstance());
console.log(mySingleton.getInstance());
console.log(mySingleton.getInstance());

console.log(mySingleton.getInstance().init());  // => ОШИБКА
console.log(mySingleton.privateMethod()); // => ОШИБКА


// var counterModule = (function () {
//   var instance,
//       counter = 0;

//   var getCounter = function () {
//     return counter;
//   }

//   var increaseCounter = function () {
//     counter ++;
//   }

//   var createInstance = function () {
//     return {
//       getCounter: getCounter,
//       increaseCounter: increaseCounter
//     }
//   }

//   return {
//     getInstance: function () {
//       return instance || (instance = createInstance());
//     }
//   }
// })();

// console.log(counterModule.getInstance().getCounter())
// console.log(counterModule.getInstance().increaseCounter())
// console.log(counterModule.getInstance().getCounter())
// console.log(counterModule.getInstance().increaseCounter())
// console.log(counterModule.getInstance().getCounter())
// console.log(counterModule.getInstance().increaseCounter())
// console.log(counterModule.getInstance().getCounter())
// console.log(counterModule.getInstance().increaseCounter())
// console.log(counterModule.getInstance().getCounter())
// console.log(counterModule.getInstance().increaseCounter())
// console.log(counterModule.getInstance().getCounter())
// console.log(counterModule.getInstance().increaseCounter())
// console.log(counterModule.getInstance().getCounter())