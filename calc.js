var firstNum = prompt("Please enter the first number here");
var firstNum1 = parseInt(firstNum);
var secondNum = prompt("Please enter the second number here");
var secondNum1 = parseInt(secondNum);
var sum = firstNum1+secondNum1;
var sub = firstNum1-secondNum1;
var pro = firstNum1*secondNum1;
var div = firstNum1+secondNum1;

function add(){
    document.querySelector(".num").innerHTML = "The ans is " + sum;
}
function diff(){
    document.querySelector(".num").innerHTML = "The ans is " + sub;

}
function mult(){
    document.querySelector(".num").innerHTML = "The ans is " + pro;
}
function division(){
    document.querySelector(".num").innerHTML = "The ans is " + div;
}
document.querySelector("#plus").addEventListener("click",add);
document.querySelector("#minus").addEventListener("click",diff);
document.querySelector("#multiply").addEventListener("click",mult);
document.querySelector("#divide").addEventListener("click",division);