//声明变量  undefined和null是所有类型的子类型
var data = NaN; //也可以用二进制，16进制与8进制，
var word = '我是一个字符串';
var arrayData = [1, 2, 3, 4, 5];
var isBoolean = true;
//声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
var anything = 'Tom';
//联合类型
var myFavorite; //可以是字符串也可是数字，但是其他的不行
myFavorite = '6';
//函数
//第一个形参代表传字符串类型的值   第二个值‘？’代表可以传也可以不传   第三个值则代表默认传参   
// 返回值为字符串
function func1(val1, val2, val3) {
    if (val3 === void 0) { val3 = '默认值'; }
    return val3;
}
// console.log(func1(word))
//es6字符串的新特性 自动拆分
function func2(params, val) {
    console.log(params); //[ 'Hi!', '.哈哈' ]
    console.log(val); //我是一个字符串
}
var getUserInfo = function (user) {
    return "my name is " + user.name + ",I'm " + user.age + "\u5C81\u4E86";
};
var p = {
    name: 'pangzm',
    age: 20,
    isBollean: true,
    findOne: function () {
        // console.log('哦哦哦')
        return '11';
    }
};
p.findOne();
//这个相当于定义函数                   //形参
var introduceSelfTwo = function (name, age, habby) {
    return name + "\u5DF2\u7ECF" + age + "\u5C81\u4E86,\u7231\u597D\u662F" + habby;
};
var One = /** @class */ (function () {
    function One(title) {
        this.log = function () {
            // console.log(this.title)
        };
        this.title = title;
        this.log();
    }
    return One;
}());
new One('one');
var someValue = "this is a string";
var strLength = someValue.length;
var newNumber = ['1', '2'];
console.log(newNumber);
