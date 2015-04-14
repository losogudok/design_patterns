/*
Фасад очень часто можно встретить в JS библиотеках.
Методы css() или animate(), есть ничто иное как фасад - упрощенный интерфейс доступа к API подсистемы. В нашем случае DOM API.
*/

// Пример без участия WEB API

// Ипотека (фасад)
var Mortgage = function(name) {
    this.name = name;
}
// Ипотека прототип, определяет 1 метод, который скрывает в себе
// взаимодествие фасад с подсистемой.
Mortgage.prototype = {
 
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
}
// Банк ( компонент подсистемы)
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
// Кредит ( компонент подсистемы)
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
// История ( компонент подсистемы)
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
 
function run() {
// теперь нам достаточно вызвать 1 метод    
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");
 
    alert(result);
}