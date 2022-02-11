class User {
    // 索引验证 字符串类型 内容为any(任何类型)
    [prop:string]:any

    constructor(public name:string){
        this.sayHello()
    }
    sayHello(){
        console.log(`你好，我是${this.name}`)
    }
}

const u = new User('吉吉国王')

// 在ts中默认情况下，不对索引器做严格的类型检查
// 需要严格的类型检查，需要在配置文件内开启 noImplicitAny 隐式类型检查
// 所引起的约束要在类里书写，并且要声明在所有成员之前，也就是类的最顶端

// 索引器的作用:
// 1.用作动态的增加类的成员和
// 2.动态操作类的成员

// console.log(u["name"])