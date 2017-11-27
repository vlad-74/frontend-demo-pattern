/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН OBSERVER - ИСПОЛЬЗУЕТСЯ ДЛЯ "ОТЛОЖЕННОГО" АВТОЗАПУСКА СОБЫТИЙ ПРИ :
1. ИЗМЕНЕНИЯ СТАТУСА
2. ВЫЗОВА УСЛОВИЯ (ФУНКЦИИ) ОПИСАННОГО В OBSERVER
см index.js, monstrlessons.js, observer.js
*/

//наблюдаемый объект
Observable = function() {
    this.status = "construct";
}
Observable.prototype.getStatus = function() {
    return this.status;
}
 

Observer = function() {
    this.subscriptions = [];
}
Observer.prototype = {
    subscribeTo: function(observable) {
        this.subscriptions.push(observable);
    },
    unsubscribeFrom: function(observable) {
        var i = 0,
            len = this.subscriptions.length;
       
        // Пробегаем по всему списку и если находим, то что искали,
        // удаляем
        for (; i < len; i++) {
            if (this.subscriptions[i] === observable) {
                this.subscriptions.splice(i, 1);
                // Не стоит искать дальше, 
                // если уже нашли то, что искали
                return;
            }
        }        
    },
    doSomethingIfOk: function(data) {
        var i = 0;
            len = this.subscriptions.length;
       
        // Пробегаемся по списку подписчиков и определяем
        // изменился ли статус на Ок ,
        // и выполняем то, что нужно подписчику, если это так
        for (; i < len; i++) {
            if (this.subscriptions[i].getStatus() === "ok") {
                // Делаем, что нибудь, потому что стутус
                // такой какой нам нужен
                console.log('ФУНКЦИЯ doSomethingIfOk ШЛЕТ ПРИВЕТ ТОЛЬКО ПРИ СТАТУСЕ = ОК + ' + data);
            }
        }
    }
}
 
var observer = new Observer(); // обозреватель 

var observable = new Observable(); // объкт для наблюдения
var observable2 = new Observable(); // объкт для наблюдения

observer.subscribeTo(observable); //добавили обозревателю объект 
observer.subscribeTo(observable2); //добавили обозревателю объект 
 
observer.doSomethingIfOk(); // Ничего не произойдет так как статус еще не изменен

observable.status = "ok"; // Изменяем статус на "Ок",
observable2.status = "ok"; // Изменяем статус на "Ок",

observer.doSomethingIfOk('данные из observer.doSomethingIfOk'); //СРАБОТАЛА ФУНКЦИЯ (В ОБОЗРЕВАТЕЛЕ) НА ИЗМЕНЕНИЕ СТАТУСА "Ок"