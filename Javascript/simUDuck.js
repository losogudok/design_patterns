'use strict';

// Создаем абстрактный класс Duck
// реализация с помощью сабклассов
// главный недостаток данного подхода
// в том, что каждый метод конкретного класса
// нужно переопределять

function DuckAbsctract(name) {
    if (this.constructor === DuckAbsctract) {
        throw Error('DuckAbstract is an abstract class');
    }
    this.name = name;
}

DuckAbsctract.prototype = {
    constructor: DuckAbsctract,
    quack: function() {
        return this.name + ' is quacking.';
    },
    swim: function() {
        return this.name + ' is swimming';
    },
    fly: function() {
        return this.name + ' is flying';    
    },
    display: function() {
        throw Error('Display method must be implemented');
    }
}


function WoodenDuck(name) {
    DuckAbsctract.call(this, name);
}

WoodenDuck.prototype = {
    constructor: WoodenDuck,
    quack: function() {
        // деревянные утки не крякают
    },
    swim: function() {
        return this.name + ' is swimming';
    },
    fly: function() {
        // не летают
    },
    display: function() {
        return this.name + 'is wooden duck';
    }
}

var woodenDuck = new WoodenDuck('Wooden Quackie');