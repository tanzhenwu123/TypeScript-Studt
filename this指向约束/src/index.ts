class User{
    constructor(public name:string){}
    sayHello(this:User){
        console.log(`你好，我叫${this.name}`)
    }
}

const u = new User('tzw')
u.sayHello()