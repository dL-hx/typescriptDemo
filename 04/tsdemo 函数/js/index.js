"use strict";
/*
1、vscode配置自动编译

    1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",


    2、第二步 任务 - 运行任务  监视tsconfig.json


2、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

3、typeScript中的函数

    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数  es6


*/
// 3.1、函数的定义
//es5定义函数的方法
// function run(){
//     return 'run';
// }
// var run2 = function (){
//     return 'run2';
// }
//ts中定义函数的方法
//函数声明法
/*  function run():string{
        return 'run';
    }
 */
//错误写法(返回值必须是string类型)
// function run1():string{
//     return 123;
// }
//匿名函数
/*  var fun2 = function ():number {
        return 123;
    }

    alert(fun2());//调用方法执行
 */
//ts中定义方法传参
/*
function getInfo(name:string,age:number):string{
    return `${name}---${age}`;
}
alert(getInfo('张三',23));
// alert(getInfo('张三','20'));//出错
 */
/*  var getInfo = function(name:string,age:number):string {
     return `${name}---${age}`;
 }

 alert(getInfo('张三',23)); */
//没有返回值的方法
function run() {
    console.log("run");
}
run();
// 3.2、方法可选参数
// es5里面方法的实参和行参可以不一样，但是ts中必须一样，
//如果不一样就需要配置可选参数
/*

age?: number            ? 表示age可传可不传
 */
/*
 function getInfo(name: string, age?: number): string {
  if(age){//如果有 age返回所有
      return `${name}---${age}`;
  }else{
      return `${name}---------年龄保密`;
  }
}
alert(getInfo('张三'))
alert(getInfo('张三',123))
*/
//注意:可选参数必须配置到参数的最后面
//错误写法
// function getInfo(name?: string, age: number): string {
//     if(age){//如果有 age返回所有
//         return `${name}---${age}`;
//     }else{
//         return `${name}---------年龄保密`;
//     }
//   }
// alert(getInfo('张三'))
// 3.3、默认参数(调用方法时可以指定默认的值) 可选参数
/* function getInfo(name: string, age: number = 20): string {//默认值是20  如果传了值,取传的值
    if(age){//如果有 age返回所有
        return `${name}---${age}`;
    }else{
        return `${name}---------年龄保密`;
    }
  }
alert(getInfo('张三'))
 */
// es5里面没法设置默认参数，es6和ts中都可以设置默认参数
// 3.4、剩余参数
/*
    function sum(a:number,b:number,c:number):number{
        return a + b + c;
    }
    console.log(sum(1,2,3)) */
//三点运算符 接受新参传过来的值
// 如果可以用数组接收就好了
/*   function sum (...result:number[]):number{//  ...result:[1.2,3,4,5,6]
      var sum = 0;
      for(var i = 0;i<result.length;i++){
          sum += result[i];
      }
      return sum;
  }
  console.log(sum(1,2,3,4,5,6))  */
/*
    function sum (a:number,b:number,...result:number[]):number{//a:1  b:2     ...result:[3,4,5,6]
        var sum = a;
        for(var i = 0;i<result.length;i++){
            sum += result[i];
        }
        return sum;
    }
    console.log(sum(1,2,3,4,5,6))
 */
// 3.5、ts函数重载
// java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
//ts为了兼容es5 以及 es6 重载的写法和java中有区别。
//es5中出现同名方法，下面的会替换上面的方法
/* function css(config){

}


function css(config,value){
    
} */
//ts中的重载
/* function getInfo(name:string):string;//方法一


function getInfo(age:number):number;//方法二

function getInfo(str:any):any{//在这里就实现了重载
    if(typeof str ==='string'){
        return '我叫' + str;
    }else{
        return '我的年龄' + str;
    }
}

alert(getInfo('zhangsan'))   //走方法一          我叫 zhangsan

alert(getInfo(20))   //走方法二        我的年龄 20 */
//错误写法
// alert(getInfo(true))   //在重载的方法中找不到该参数,没有找到匹配的方法
/*
function getInfo(name:string):string;//方法一


function getInfo(name:string,age:number):number;//方法二

function getInfo(name:any,age?:any):any{//在这里就实现了重载
    if(age){
        return '我叫' + name + '年龄' + age;
    }else{
        return '名字' + name;
    }
}

alert(getInfo('zhangsan'))   //走方法一          我叫 zhangsan

// alert(getInfo(20))   //错误写法        我的年龄 20

alert(getInfo('zhangsan',20))

// alert(getInfo('zhangsan',true))     //在重载的方法中找不到该参数,没有找到匹配的方法

 */
// 3.6、箭头函数  es6
setTimeout(function () {
    alert('run');
}, 1000);
//this指向的问题    箭头函数里面的this指向上下文
setTimeout(function () {
    alert('run');
}, 1000);
