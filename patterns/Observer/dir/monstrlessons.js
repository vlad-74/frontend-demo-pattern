/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН OBSERVER - ИСПОЛЬЗУЕТСЯ ДЛЯ ОТСЛЕЖИВАНИЯ СОБЫТИЙ */

// класс, в котором храним массив подписчиков.
class EventObserver {
    constructor () {
      this.observers = []
    }

    // подписка
    subscribe (fn) {
      this.observers.push(fn)
    }

    // отказаться от подписки
    unsubscribe (fn) {
      this.observers = this.observers.filter(
        subscriber => subscriber !== fn
      )
    }

    // распространить среди подписчиков
    broadcast (data) {
      //this.observers.forEach(subscriber => subscriber(data))
      this.observers.forEach(function (subscriber) {
        return subscriber(data);
      });
    }
}

/*=================================КОНСОЛЬНАЯ ЧАСТЬ=======================================*/
const observer = new EventObserver()

observer.subscribe(data => {
  console.log('subscribe for module 1 fired', data)
})

observer.subscribe(data => {
  console.log('subscribe for module 2 fired', data)
})

//когда мы вызовем observer.broadcast, то это уведомит всех подписчиков.
observer.broadcast('hello')
observer.broadcast({obj: 'test'})

/*--------------------------------БРАУЗЕРНАЯ ЧАСТЬ-----------------------------------------*/
observer.broadcast(alert('broadcast observer_a'))
/*-----------------------------------------------------------------------------------------*/
const blogObserver = new EventObserver()

const textField = document.querySelector('.textField')
const countField = document.querySelector('.countField')
countField.innerHTML = 0;

// const getWordsCount = text => text ? text.trim().split(/\s+/).length : 0 
const getWordsCount = function getWordsCount(text) {
  if(text) {
    return text.trim().split(/\s+/).length;
  }else{
    return 0;
  }
};

// blogObserver.subscribe(text => { countField.innerHTML = getWordsCount(text) } )
blogObserver.subscribe(function (text) { // подписка
  countField.innerHTML = getWordsCount(text);
});

// textField.addEventListener('keyup', () => { blogObserver.broadcast(textField.value) } );
textField.addEventListener('keyup', function () {
  blogObserver.broadcast(textField.value); // распространять
});


/*==========================================================================================*/


// let hf = require('help-functions');
// console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);
