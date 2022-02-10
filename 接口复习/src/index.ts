import { hasAction, hasStunt, hasWisdom } from "../function/tools";
import { Lion,Dog,Monkey } from "./animals";

const animals = [
    new Dog('旺财'),
    new Lion('辛巴'),
    new Monkey('吉吉国王')
]

animals.forEach(e =>{
    // 需要再运行时也进行类型检查，而ts的接口只在编译前进行类型约束
    // 所以这里判断某个实例是否能进行指定的表演
    // 欲做约束需要进行另行处理
   if(hasStunt(e)){
       e.singleFire()
       e.doubleFire()
   }
})