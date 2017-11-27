let hf = require('help-functions');
console.log('\nРЕЗУЛЬТАТ ФАЙЛА : ' + __filename.substring(__filename.indexOf('patterns') + 0), '\n' + gl_hr);

/*-------------------------------СОДЕРЖИМОЕ ФАЙЛА--------------------------------------*/
/* ШАБЛОН OBSERVER_STATUS - ИСПОЛЬЗУЕТСЯ ДЛЯ МГНОВЕННОГО АВТОЗАПУСКА СОБЫТИЙ ПРИ ИЗМЕНЕНИЕ СТАТУСА */

let inherit = function(p) {
    if (p == null) throw TypeError(); // p не может быть значением null
    if (Object.create) // Если Object.create() определена...
    return Object.create(p); // использовать ее.
    var t = typeof p; // Иначе выяснить тип и проверить его
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {}; // Определить фиктивный конструктор.
    f.prototype = p; // Записать в его свойство prototype ссылку на объект p.
    return new f(); // Использовать f() для создания наследника" объекта p.
};

let statusChange = function(status, val, callback){
    if(!callback)console.log(
        status.name 
        + ': _eventCurrentStatus = ' 
        + val 
        + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' 
        + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
    else callback(status, val, callback);
};

let create_status = function(n, c/*c - ОПЦИОНАЛЬНО*/) {
    let status = {
        name: undefined,
        eventCurrentStatus: undefined,
        time: Date.parse(new Date()),
        oldvalue: undefined,
        oldtime: undefined,
        get currentStatus(){return this.eventCurrentStatus;},
        set currentStatus(val){
            this.oldvalue = this.eventCurrentStatus; 
            this.oldtime = this.time;
            this.eventCurrentStatus = val;
            this.time = Date.parse(new Date()); 
            if (!c){statusChange(this, val, false)}else{statusChange(this, val, c)};
        }
    };

    global[n] = inherit(status); 
    global[n].name = n;
};

/*=================================================================================================*/
function callbackf(status, val){
    console.log(status.name + ': !eventCurrentStatus = ' + val  + ' (time: ' +  new Date(status.time).toLocaleString() + ') | oldvalue = ' + status.oldvalue + ' (oldtime: ' + new Date(status.oldtime).toLocaleString() + ')');
}

let statuses = ['status_body','status_current_page', 'status_current_lng', 'status_current_flg'];
statuses.map(item => create_status(item, callbackf)); //ЦИКЛОМ СОЗДАЕМ СТАТУСЫ С ИМЕНАМИ ИЗ МАССИВА

statuses.map(item => global[item].currentStatus = "open"); //В СТАТУСАХ ЦИКЛОМ ИЗМЕНЯЕМ ИХ currentStatus

setTimeout(function(){ global[statuses[1]].currentStatus = "изменение"; }, 1500);