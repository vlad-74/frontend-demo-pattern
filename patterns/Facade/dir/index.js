let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН FACADE - ИСПОЛЬЗУЕТСЯ ЧТОБЫ СОЗДАТЬ ПРОСТОЙ ИНТЕРФЕЙС К БОЛЬШОЙ И СЛОЖНОЙ
ЧАСТИ КОДА, ЧТОБЫ СПРЯТАТЬ ЕГО СЛОЖНОСТЬ */

var module = (function() {
  var _private = {
    i: 5,
    get: function() {
      console.log('Текущее значение:' + this.i);
    },
    set: function(val) {
      this.i = val;
    },
    run: function() {
      console.log('процесс запущен');
    },
    jump: function() {
      console.log('резкое изменение');
    }
  };
  return {
    facade: function(args) {
      _private.set(args.val);
      _private.get();
      if (args.run) {
        _private.run();
      }
    }
  }
}());

module.facade({run:true, val:10, }); // Текущее значение: 10, процесс запущен