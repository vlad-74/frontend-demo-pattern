var Observable = function() {
    this.subscribers = [];
}
 
Observable.prototype = {
    subscribe: function(callback) {
        // В большинстве случаев вам нужно будет проверять         
        // существует ли подписчик в списке наблюдателей или нет, 
        // что бы не добавлять его повторно. Но здесь просто  
        // добавим вызов в список
        this.subscribers.push(callback);
    },
    unsubscribe: function(callback) {
        var i = 0,
            len = this.subscribers.length;
       
        // Пробегаем про всему список если находим нужного нам 
        // подписчика, то удаляем его.
        for (; i < len; i++) {
            if (this.subscribers[i] === callback) {
                this.subscribers.splice(i, 1);
                // Если нашли то что искали,
                // продолжать не надо.
                return;
            }
        }
    },
    publish: function(data) {
        var i = 0,
            len = this.subscribers.length;
       
        // Пробегаем по всему списку подписчиков и запускаем
        // функции.
        for (; i < len; i++) {
            this.subscribers[i](data);
        }        
    }
};
 
var Observer = function (...data) {
    console.log(data);
}

var Observer2 = function (...data) {
    console.log(data[0], '!');
}

var Observer3 = function (...data) {
    console.log(data, '!!');
}
 
// А вот как все это используется.
observable = new Observable();

observable.subscribe(Observer);
observable.subscribe(Observer2);
observable.subscribe(Observer3);

observable.publish('Опубликовано!');
observable.publish({obj: 'test'});