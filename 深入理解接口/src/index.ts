import { bingType, HorseType } from "./type";

abstract class Chess {
    abstract x: number;
    abstract y: number;
    abstract readonly name: string;
    getName() {
        console.log(this.name)
    }

    startMove(targetX: number, targetY: number): boolean{
        // 首先判断棋子移动是否会超出边界
        // 判断移动棋子类型
        const ChessA = (this.name == "象" || this.name == "相")
        const ChessB = (this.name == "仕")
        // 所有棋子的x横向轴边界规则，除开仕棋子
        const XRule = (this.x + targetX > 9 || this.x + targetX < 0)
        // 所有棋子的Y竖向轴边界规则,除开仕棋子
        const YRule = (this.y + targetY > 12 || this.y + targetY < 0)
        // (象||相)棋子的y竖向轴边界规则
        const xiangYRule = (this.y + targetY > 6 || this.y + targetY > 7 || this.y + targetY > 12 || this.y + targetY < 0)
        // 所有仕棋子的x横向轴边界规则
        const shiXRule = (this.x + targetX > 6 || this.x + targetX < 4)
        // 所有
        const shiYRule = (this.y + targetY > 3 || this.y + targetY < 0 || this.y + targetY > 12 || this.y + targetY < 10)
        // 如果棋子是象，超出边界则返回false
        if(ChessA) if(XRule || xiangYRule) return false
        // 如果棋子是仕，超出边界则返回false
        else if(ChessB) if(shiXRule || shiYRule) return false
        // 如果是其他的棋子，超出边界测返回false
        else if(XRule || YRule) return false
        // 以上都没发生则表示移动成功
        console.log(`选中${this.name}`);
        // 判断该位置是否有友方旗子或者敌方棋子
        
        // 判断传入的值是否符合棋子的移动规则
        if(!this.MoveEndRule(targetX,targetY)) return false
        else{
            console.log(`${this.name}落子`)
            return true
        }
    }

    protected abstract MoveEndRule (targetX:number,targetY:number):boolean
    
    // 象棋边界判断有两种类型
    // 1.棋子能过河
    // 2.棋子不能过河
}

class Horse extends Chess {
    name: string = "马"
    x: number = 2
    y: number = 5
    protected MoveEndRule(targetX: number, targetY: number): boolean {
        // 马的前后左右移动规则
        const a:HorseType = ({x:1,y:2} || {x:-1,y:2})
        const b:HorseType = ({x:1,y:-2} || {x:-1,y:-2})
        if(targetX == a.x && targetY == a.y || targetX == b.x && targetY == b.y) return true
        else return false
    }
}

class Pao extends Chess {
    get name() {
        return '炮'
    }
    get x() {
        return 2
    }
    get y() {
        return 3
    }
    set x(val) {
        this.x = val
    }
    set y(val) {
        this.y = val
    }
    protected MoveEndRule(targetX: number, targetY: number): boolean {
        if(targetX <= 9 - this.x && targetY <= 12 - this.y) return true
        else return false
    }
}

class Bing extends Chess {
    readonly name: string;
    x: number;
    y: number
    constructor() {
        super()
        this.name = '兵'
        this.x = 1
        this.y = 1
    }
    protected MoveEndRule(targetX: number, targetY: number): boolean {
        const a:bingType = ({x:1,y:0}||{x:-1,y:0})
        const b:bingType = ({x:0,y:1})
        if(this.y >= 6) if(targetX == b.x && targetY == b.y) return true
        else if(this.y < 6) if(targetX == a.x && targetY == a.y) return true
        return false
    }
}

const horse = new Horse()
const pao = new Pao()
const bing = new Bing()
horse.getName()
pao.getName()

horse.startMove(1,2)
bing.startMove(1,1)