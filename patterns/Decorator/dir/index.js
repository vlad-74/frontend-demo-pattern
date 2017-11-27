let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН DECORATOR - ИСПОЛЬЗУЕТСЯ ДЛЯ :
1. ДОБАВЛЕНИЯ НОВЫХ СВОЙСТВ И МЕТОДОВ К СУЩЕСТВУЮЩЕМУ ОБЪЕКТУ - СМ index.js
2. ИЗМЕНЕНИЕ ИМЕЮЩИХСЯ СВОЙСТВ У "ИЗМЕНЕННЫХ" СУЩЕСТВУЮЩИХ ОБЪЕКТОВ - СМ monstrlessons.js
своего рода миксин, он является альтернативой наследования от класса к классу
*/
 
var User = function(name) {
    this.name = name;
 
    this.say = function() {
        log.add("User: " + this.name);
    };
}
 
var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;  // гарантирует, что ИМЯ остается таким же
    this.street = street;
    this.city = city;
 
    this.say = function() {
        log.add("Decorated User: " + this.name + ", " +
                   this.street + ", " + this.city);
    };
}
 
// logging helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log); log = ""; }
    }
})();
 
function run() {
 
    var user = new User("Kelly");
    user.say();
 
    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();

    user.say();
    decorated.say();
 
    log.show();
}

run();