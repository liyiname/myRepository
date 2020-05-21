(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})()
// 这种方法使用了块作用域来申明function防止污染全局变量。
// 效果等同于：
// function fun1(){
// alert("it works");
// }

// fun1();

//但是这种普通的编写方式会致使JS阻塞浏览器渲染
//即当运行上面两种例子的时候会出现：alert执行的时候，html内容是一片空白的，即<span>body</span>并未被显示，当点击确定后，才出现。