class User{
    private static users:User[] = []
    constructor(public userName:string,public password:string,public phone:string,public uId:string,public birthDay:string){
        User.users.push(this)
    }
    static login(loginId:string,logigPwd:string):User|undefined{
        return User.users.find(e =>e.userName == loginId && e.password == logigPwd)
    }
}

new User("xiaoming","xiaoming123","15973142725","小明","20000108")
new User("xiaochen","xiaochen123","15973142725","小陈","20010108")

const result = User.login("xiaoming","xiaoming123")
console.log(result)


// 单例模式
// 整个系统，某些类的对象，最多只产生一个，为避免随意创建对象，可以使用单例模式进行强约束
class Board{
    private constructor(){}
    private static _Board?:Board
    static createBoard():Board{
        if(this._Board){
            return this._Board
        }else{
            this._Board = new Board()
            return this._Board 
        }
    }
}

const b = Board.createBoard()