// 生成马戏团里的动物
// 每个动物生成自带姓名，种类，技能
// 每个动物可学习技能
// 当学习技能的时候，马戏团的训练经验会有所增加
// 马戏团不会训练无关的技能
export abstract class  Animal {
    private static Animals:Animal[] = []
    abstract name:string;
    abstract type:string;
    protected abstract skill:string[]; 
    constructor() {
        Animal.Animals.push(this)
    }
    studySkills(targetName:string,skill:string):Animal|undefined{
        const result = Animal.Animals.find(e => e.name == targetName && e.skill.indexOf(skill) != -1)
        if(result) this.skill.push(skill)
        return this
    }
}

export class dog extends Animal{
    type:string = "犬科"
    name:string = "凯狗"
    skill:string[] = ["叫嚣"]
}

export class loin extends Animal{
    type: string="猫科"
    name: string = "狮子"
    skill: string[] = ["跳火圈"]
}