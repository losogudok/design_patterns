'use strict';

// Реализация паттерна Стратегия

// Java подход
// Стоит отметить, что так как, this меняется
// в методах классов поведения, то в классе AbstractDuck
// используется call для ручного назначения this

function DuckAbsctract(name) {
    if (this.constructor === DuckAbsctract) {
        throw Error('DuckAbstract is an abstract class');
    }
    this.name = name;
}

DuckAbsctract.prototype = {
    constructor: DuckAbsctract,
    performQuack: function() {
        return this.quackBehavior.quack.call(this);
    },
    performFly: function() {
        return this.flyBehavior.fly.call(this);
    },
    setFlyBehavior: function(flyBehavior) {
        this.flyBehavior = flyBehavior;    
    },
    setQuackBehavior: function(quackBehavior) {
        this.quackBehavior = quackBehavior;    
    },
    swim: function() {
        throw Error('Swim method must be implemented');
    },
    display: function() {
        throw Error('Display method must be implemented');
    }
}

// Саб класс от DuckAbstract

function MallardDuck(name) {
    DuckAbsctract.call(this, name);
}


MallardDuck.prototype = {
    constructor: MallardDuck,
    quackBehavior: new Quack(),
    flyBehavior: new FlyWithWings(),
    display: function() {
        return this.name + ' is Mallard Duck';
    }
};

Object.setPrototypeOf(MallardDuck.prototype, DuckAbsctract.prototype);

// Саб класс Model Duck

function ModelDuck(name) {
    DuckAbsctract.call(this, name);
}


ModelDuck.prototype = {
    constructor: ModelDuck,
    quackBehavior: new Quack(),
    flyBehavior: new FlyNoWay(),
    display: function() {
        return this.name + ' is Model Duck';
    }
};

Object.setPrototypeOf(ModelDuck.prototype, DuckAbsctract.prototype);

// Определяем набор классов поведения кряканья

function Quack() {
    
}

Quack.prototype.quack = function() {
    return this.name + ' is quacking';
}

// Опредяляем набор классов поведения полета

function FlyWithWings() {
    
}

FlyWithWings.prototype.fly = function() {
    return this.name + ' is flying with wings';
}

function FlyNoWay() {
    
}

FlyNoWay.prototype.fly = function() {
    return this.name + ' can\'t fly =(';
};

function FlyOnARocket() {
    
}

FlyOnARocket.prototype.fly = function() {
    return this.name + ' is flying on a rocket, yeah!';
};

// Тесты

var mallardDuck = new MallardDuck('John');
console.log(mallardDuck.performFly());
console.log(mallardDuck.performQuack());
console.log(mallardDuck.display());

var modelDuck = new ModelDuck('Model John');
console.log(modelDuck.performFly());
modelDuck.setFlyBehavior(new FlyOnARocket());
console.log(modelDuck.performFly());

