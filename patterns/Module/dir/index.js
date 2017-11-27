let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН MODULE - ИСПОЛЬЗУЕТСЯ ДЛЯ АВТОНОМИИ СВОИХ СВОИСТВ И МЕТОДОВ */

var counterModule = (function (n) {
  var counter = 0;

  var increaseCounter = function () {
    counter ++;
  };

  var getCounter = function () {
  	increaseCounter();
    return n + counter;
  };

  return {
    getCounter: getCounter,
    increaseCounter: increaseCounter
  };

}(1000));

/*-------------------------------------------------------------------------------------*/
console.log(counterModule.getCounter());
 
console.log(counterModule.getCounter()),

counterModule.increaseCounter();
console.log(counterModule.getCounter());

