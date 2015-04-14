// common approach
(function () {

    function Animal(type, name) {
        this.name = name;
        this.type = type;
    }

    Animal.prototype = {
        eat: function () {
            return this.name + 'is eating';
        },
        walk: function () {
            return this.name + 'is walking';
        },
        run: function () {
            return this.name + 'is running';
        }
    };

    function Rabbit(type, name, color) {
        this.color = color;
        Animal.call(this, type, name);
    }

    Rabbit.prototype = Object.create(Animal.prototype);

    Rabbit.prototype.eat = function () {
        return Animal.prototype.eat.call(this) + ' carrot';
    }

    Rabbit.prototype.run = function () {
        this.color + ' rabbit is running fast';
    }

})();


// javascript approach
(function () {

    function createObject(obj) {
        var inst = Object.create(obj);
        var args = [].slice.call(arguments, 1);
        inst.init.apply(inst, args);
        return inst;
    }

    var Animal = {
        init: function (type, name) {
            this.name = name;
            this.type = type;
        },
        eat: function () {
            return this.name + ' is eating';
        },
        walk: function () {
            return this.name + ' is walking';
        },
        run: function () {
            return this.name + ' is running';
        }
    };

    var Rabbit = {
        init: function (name, color) {
            this.color = color;
            Animal.init.call(this, 'rabbit', name);
        },
        eat: function () {
            return this.color + ' ' + Animal.eat.call(this) + ' carrot';
        }
    };
    
    Object.setPrototypeOf(Rabbit, Animal);

    var dog = createObject(Animal, 'dog', 'Fiddo');
    var rabbit = createObject(Rabbit, 'Barry', 'white');

//    console.log(dog.eat());
//    console.log(rabbit.eat());
})();
