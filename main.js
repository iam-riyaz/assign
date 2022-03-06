let a=100;
let b=50;

const addFun= require(`./add`)
console.log(addFun(a,b))

const divideFun=require("./divide")
console.log(divideFun(a,b))

const multiFun=require("./multiply")
console.log(multiFun(a,b))

const subFun=require("./subtract")
console.log(subFun(a,b))