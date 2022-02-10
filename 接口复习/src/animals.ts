// 构造函数的name参数用于定义小动物出场的时候自我介绍

import { action, stunt } from "../interface/skill"

// 而抽象成员type则用于判断不同动物所能学习的技能
export abstract class Animals{
    abstract type:string
    constructor(public name:string){
        this.sayHello()
    }
    sayHello(){
        console.log(`${this.name}出场了`)
    }
}
export class Lion extends Animals implements stunt{
    type: string = "猫科"
    singleFire(): void {
        console.log(`${this.name}钻过了火圈`)
    }
    doubleFire(): void {
        console.log(`${this.name}钻过了双层火圈`)
    }
}
export class Dog extends Animals implements stunt{
    type: string = "犬科"
    singleFire(): void {
        console.log(`${this.name}钻过了火圈`)
    }
    doubleFire(): void {
        console.log(`${this.name}钻过了双层火圈`)
    }
}
export class Monkey extends Animals implements action,stunt{
    type: string = "灵长科"
    kongFu(): void {
        console.log(`${this.name}施展了功夫`)
    }
    singleFire(): void {
        console.log(`${this.name}钻过了火圈`)
    }
    doubleFire(): void {
        console.log(`${this.name}钻过了双层火圈`)
    }
}