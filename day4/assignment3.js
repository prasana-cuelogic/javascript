/**
 * Created by PrasanaA on 11/01/16.
 */

var float = function(intNumber){
    if(typeof intNumber !== "number" ){
        return false
    } else {
        return intNumber.toFixed(2);
    }
}

var n = 5;
var f = float(n);
console.log(f);

//OR

Number.prototype.float = function(){
    return this.valueOf().toFixed(2);
}
var a = 5;
var f = a.float();
console.log(f);