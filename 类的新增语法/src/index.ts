class User{
    gender:"男"|"女" = "男"
    readonly pId?:number|null
    private seeYellowVideoNumber:number = 5
    private thisSeeNumber:number = 0
    private userLevel:string = "青铜会员"
    constructor(readonly name:string,readonly age:number){
        this.pId = Math.floor(Math.random()*(99999))
    }
    seeYellowVideo(){
        if(this.thisSeeNumber < this.seeYellowVideoNumber){
            console.log('可以看片')
            this.thisSeeNumber++;
        }
        else console.log('次数不足，请提升会员等级')
    }
}

let user = new User('老莫杰',20)
user.seeYellowVideo()
console.log(user)