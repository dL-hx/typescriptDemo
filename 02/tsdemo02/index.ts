    // //写 ts代码   要指定类型
    // var flag: boolean = true;

    // flag = false;

    // console.log(flag);

    // //数字类型(number)

    // var num: number = 123;

    // // num = '456'       出错
    // num = 456;

    // console.log(num);

    // //字符串类型(string)

    // var str: string = "this is ts";

    // str = "haha";

    // // str = true;   错误写法

    // // 数组类型(array)
    // // 1.第一种
    // var arr = ["1", "2"]; //es5定义数组

    // var arr1: number[] = [11, 22, 33]; //表示数组中的元类型都是数字

    // console.log(arr1);

    // // 2. 第二种定义数组的方式
    // // Array<number>
    // // Array表示是一个数组类型
    // // <number>表示里面的每一个都是数字类型
    // var arr2: Array<number> = [11, 22, 33];

    // console.log(arr2)
//第三种any[]       表示数组里面的类型可以随便写
var arr3:any[] = [11,22,33,'4444'];

console.log(arr3);



    // // 元组类型(tuple) 属于数组的一种
    //     //元组中的类型可以是   多种类型
    //     // let arr4:[number,string] = ['123','this is ts'];   出错
    //     //给数组中 的某一位置指定类型 
    //     let arr3:[number,string] = [123,'this is ts'];

    //     console.log(arr3)

    // //枚举类型(enum)
    // /*   随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
    //     例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。  
    //     在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
    //     如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
    //     也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
    //     这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
        
        
    //     enum 枚举名{ 
    //                 标识符[=整型常数], 
    //                 标识符[=整型常数], 
    //                 ... 
    //                 标识符[=整型常数], 
    //             } ;   
    // */

    //     enum Flag {success=1,error=2};

    //     let s:Flag = Flag.success;//s :(是)Flag类型

    //     console.log(s)

    //     //error

    //     enum Flag1 {success=1,error=2};

    //     let e:Flag1 = Flag1.error;

    //     console.log(e)



    //     //Color  
    //     enum Color {blue=3,red,'orange'};

    //     var c:Color = Color.red;

    //     var d:Color = Color.blue;

    //     console.log(c)   // 1   如果标识符没有赋值,他的值就是下标

    //     console.log(d)  // 3 

    //     //知道blue = 3 改变了下标

    //     // 此时  定义 f

    //     var f:Color = Color.orange;

    //     console.log(f) //5  此时下标是 5


    //     //用到最多的  表示状态码
    //     enum Err{'undefined'=-1,'null' =-2,'success' = 1};



    //     var event1:Err=Err.null;

    //     console.log(event1) // - 2




//任意类型(any)

var num:any = 123;
num = true
num = 'str';
console.log(num)

   //任意类型的用处(获取dom(获取box节点))

   //更改dom的背景颜色
var oBox :any= document.getElementById('box');

oBox.style.color = 'red';



// null 和 undefined  是其他(never类型)  数据类型的子类型 

// var num1:number;
// console.log(num1)  //输出 undefined(出错)



//指定undefined

var num1:undefined;
console.log(num1)  //输出 undefined





var num2:number| undefined;//num2 即是number类型  又是 undefined类型

num2 = 123;

console.log(num2)



//定义没有赋值 默认是undefined  不会出错


var num3:number| undefined;//num2 即是number类型  又是 undefined类型

console.log(num3)






//null 空类型

var num4:null;

// num4 = 123;//空类型不能赋值

//可以赋值为
num4 = null




//一个元素可能是 number类型  可能是null   可能是 undefined

var num5:number | null | undefined;  //如果不赋值就是undefined类型
                                    //赋值就要赋值为number类型

num5 = 1234;

console.log(num5)


//void类型 :typescript中的void表示没有返回任何类型   一般用于定义方法的时候方法没有返回值

// es5 定义写法
// function run(){
//     console.log('run')
// }


// run();//执行方法



//如果方法没有返回值,  在ts中更严谨的写法

//表示方法没有返回任何类型
// function run():void{//表示方法没有返回值,表示方法没有返回任何类型
//     console.log('run')
// }

// run();


//表示方法有返回类型:比如返回   123
function run():number{//表示方法有返回类型:比如返回   123
    return 123;
}

run();


// nerver类型(从不)从不会出现的类型:是其他类型(包括null和undefined)的子类型,代表从不会出现的值

//这意味着声明never的变量 只能被never 类型所赋值

var a:undefined;

// a = 123出错
a = undefined;   //这意味着声明never的变量 只能被never 类型所赋值只能被undefined类型赋值


var b:null;

b = null;//这意味着声明never的变量 只能被null 类型所赋值只能被undefined类型赋值



var c:never;  //一般情况永不到,可以用any 进行替代
                //或用字符串,抛出异常,赋值给字符串
// a = 123;错误写法
//匿名自执行函数
c = (()=>{
    throw new Error('错误');//抛出异常  
})()

