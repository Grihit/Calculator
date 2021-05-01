var exp = "";
var ans = 0.0;
var c = 0;
function Reset(){
    document.getElementById("display").innerHTML = "";
    exp="";
}
function Display(x){
    document.getElementById("display").innerHTML += x;
    
}
function Back(){
    var x = document.getElementById("display").innerHTML;
    var y = Array.from(x);
    var z = y.splice(0, y.length - 1);
    var temp = Array.from(exp);
    if(c==1)
        var temp2 = temp.splice(0, temp.length - 5);
    else
        var temp2 = temp.splice(0, temp.length - 1);
    exp = temp2.join("");
    document.getElementById("display").innerHTML = "";
    for(i=0;i<z.length;i++)
        document.getElementById("display").innerHTML += z[i];
}
function Calculate(x){
    if(x == '%'){
        exp += "/100*";
        c=1;
    }
    else{
        c=0;
        exp += x;
    }
}
function Answer(){
    var ans = eval(exp);
    exp = ans;
    document.getElementById("display").innerHTML = ans;
}