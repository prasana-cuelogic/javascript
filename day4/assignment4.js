/**
 * Created by PrasanaA on 11/01/16.
 */

var int = function(num){
    if(typeof intNumber !== "number" ){
        return false
    } else {
        return parseInt(num, 0);
    }
}

var n = 5.00;
var i = int(n);
console.log(n);

//OR
Number.prototype.int = function(){
    return parseInt(this.valueOf());
}
var a = 5;
var f = a.int();
console.log(f);