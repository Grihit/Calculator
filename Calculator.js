var exp = "";
var ans = 0.0;
var c = 0;
var dot = 0;
var dot2 = 0;
function Reset(){
    document.getElementById("display").innerHTML = "";
    document.getElementById("display-top").innerHTML = "";
    exp="";
    dot = 0;
}
function Display(x){
    if(x =='+' || x =='/' || x =='*' || x =='-' || x =='%')
        dot = 0;
    if(x == '.' && dot>0)
        return;
    if(x == '.')
        dot++;
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
    if(x =='+' || x =='/' || x =='*' || x =='-' || x =='%')
        dot2 = 0;
    if(x == '.' && dot2>0)
        return;
    if(x == '.')
        dot2++;
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
    //console.log(exp);
    var ans = eval(exp);
    ans = +(Math.round(ans + "e+5")  + "e-5");
    exp='';
    exp += ans;
    if(exp.includes('.')==true)
    {
        dot++;
        dot2++;
    }
    if(isNaN(ans))
        document.getElementById("display").innerHTML = 'Answer too big';
    else{
    document.getElementById("display-top").innerHTML = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = ans;
    }
}