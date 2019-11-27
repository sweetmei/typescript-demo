//声明变量  undefined和null是所有类型的子类型
var data: number = NaN  //也可以用二进制，16进制与8进制，
var word: string = '我是一个字符串'
var arrayData: number[] = [1,2,3,4,5]
let isBoolean: boolean = true
//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
let anything:any = 'Tom'
//联合类型
let myFavorite: string | number ;  //可以是字符串也可是数字，但是其他的不行
myFavorite = '6'


//函数
//第一个形参代表传字符串类型的值   第二个值‘？’代表可以传也可以不传   第三个值则代表默认传参   
// 返回值为字符串
function func1 ( val1:string, val2?:number,val3:string = '默认值'):string{
    return  val3
}
// console.log(func1(word))


//es6字符串的新特性 自动拆分
function func2(params,val) {
    console.log(params) //[ 'Hi!', '.哈哈' ]
    console.log(val)   //我是一个字符串
}
// func2`Hi!${word}.哈哈`


//接口的用法
interface IUser {
    name: string,
    age: number,
    isBollean?: boolean
}
let getUserInfo = (user:IUser):string => {
    return `my name is ${user.name},I'm ${user.age}岁了`
}
// console.log(getUserInfo({name:'pangzm',age:18}))

//默认情况下一个变量（对象）是对应的接口类型，那么这个变量（对象）必须实现接口中所有的属性和方法。
interface funcUser {
    name: string;
    age: number;
    isBollean?: boolean;  //可选可不选
    findOne?():void ;
}
    
let p:funcUser = {
    name: 'pangzm',
    age: 20,
    isBollean: true,
    findOne(){
        // console.log('哦哦哦')
        return '11';
    }
}
p.findOne()

//接口定义参数
interface interFuncOne{
    (name:string, age:number, habby?:string):string
} 
//这个相当于定义函数                   //形参
let introduceSelfTwo:interFuncOne = (name, age, habby) => {
    return `${name}已经${age}岁了,爱好是${habby}`
}
// console.log(introduceSelfTwo('pangzm',18,'eat'))   //调用函数  传参


//利用类去实现某个接口   implements  用类继承接口
interface Entey {
    title: string;
    log(): void
}
class One  implements Entey{
    title: string
    constructor(title: string) {
        this.title = title;
        this.log();
        }
    log = () => {
        // console.log(this.title)
    }
}
new One('one')

//接口继承接口  用关键字extends，可以继承多个接口
//注：如果继承的多个接口中，有同名的方法和属性编译是不通过的
//如果一个类实现了apiOne接口，那么不仅仅需要apiOne接口，还得实现apiOne继承的接口
interface apiOne {
    one:string
}

interface apiTwo {
    two:string
}

interface apiThree extends apiOne, apiTwo{
    three:number
}


let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
let newNumber:Array<number> = [1,2]  //声明一个number类型的数组
console.log(newNumber)

