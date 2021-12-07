"use strict";
// 访问器
class Age {
    constructor(age) {
        this.age = age;
    }
    set myAge(value) {
        if (value < 0)
            this.age = 0;
        else if (value > 100)
            this.age = 100;
        else
            this.age = value;
    }
    get myAge() {
        return Math.floor(this.age);
    }
}
let my = new Age(22);
my.age = 12;
console.log(my);
