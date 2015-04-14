Принципы проектирования
=======================

* Выделите аспекты приложения, которые могу изменяться, и отделите их от тех, который всегда остаются постоянными.

* Программировать на уровне интерфейса, а не уровне реализации.
Допустим у нас есть такой код:

        function Animal(){}
        Animal.prototype.makeSound = function(){}
    
        funciton Dog(){}
        Dog.prototype.makeSound(){ return this.bark(); }
        Dog.prototype.bark(){ return 'barking'; }
    
        funciton Cat(){}
        Cat.prototype.makeSound(){ return this.meow(); }
        Cat.prototype.meow(){ return 'meowing'; }
    
    Программирование на уровне реализации выглядит так:

        var dog = new Dog();
        dog.bark();
        
    Программирование на уровне интерфейса/супертипа:
    
        var dog = new Dog();
        dog.makeSound();
        
* Отдавайте предпочтение композиции перед наследованием.
