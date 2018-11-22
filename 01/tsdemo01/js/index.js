"use strict";
console.log("你好 ts");
function getData() {
    return 'ts';
}
var str = "你好";
/*第一步    tsc --init 生成tsconfig.json 改"outDir" :"./js"

2.第二步    Terminal(任务)----(Run Task)-运行任务   -----  watch(tsconfig) 监视tsconfig

3.新建 html文件    并引入index.js(新生成的文件),在浏览器打开控制台,可以看到       输出语句

--------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <!--引入生成的 index.js -->
    <script src="js/index.js"></script>
</head>
<body>
    
</body>
</html>


*/ 
