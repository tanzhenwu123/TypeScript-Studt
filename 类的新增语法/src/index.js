"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.gender = "男";
        this.seeYellowVideoNumber = 5;
        this.thisSeeNumber = 0;
        this.userLevel = "青铜会员";
        this.pId = Math.floor(Math.random() * (99999));
    }
    seeYellowVideo() {
        if (this.thisSeeNumber < this.seeYellowVideoNumber) {
            console.log('可以看片');
            this.thisSeeNumber++;
        }
        else
            console.log('次数不足，请提升会员等级');
    }
}
let user = new User('老莫杰', 20);
user.seeYellowVideo();
console.log(user);
